import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Delete, Edit } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { customerApi } from "../../../State/configAxios/customerApi";
import { homeCategories } from "../../../Data/HomeCategories";
import { Deal as DealInterface, Home as HomeInterface } from "../../../Api/models";
import { dealApi } from "../../../State/configAxios/dealApi";
import { Box, IconButton, Modal } from "@mui/material";
import UpdateDealForm from "./UpdateDealForm";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",

  boxShadow: 24,
  p: 4,
};
const DealTable = () => {
  const [homePage, setHomePage] = useState<HomeInterface>({});
  const [selectedDealId, setSelectedDealId] = useState<number>();
  const [open, setOpen] = useState(false);
  const [deals, setDeals] = useState<DealInterface[]>([]);

  const handleCreateHomePage = async () => {
    try {
      const response = await customerApi.createHomeCategories(homeCategories);
      setHomePage(response.data);
      console.log("Response data: ", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllDeals = async () => {
    try {
      const response = await dealApi.getAllDeals();
      setDeals(response?.data?.data || []);
      console.log("Deals data: ", response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpen = (id: number | undefined) => {
    setSelectedDealId(id);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleDelete = async (id: number | undefined) => {
    try {
      await dealApi.deleteDeal(id ?? 0);
      await getAllDeals();
    } catch (error) {
      console.error("Error deleting deal:", error);
    }
  };

  useEffect(() => {
    handleCreateHomePage();
    getAllDeals();
  }, []);

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>No</StyledTableCell>
              <StyledTableCell>Image</StyledTableCell>
              <StyledTableCell>Category</StyledTableCell>
              <StyledTableCell>Discount</StyledTableCell>
              <StyledTableCell align="right">Edit</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {deals.map((deal: DealInterface, index) => (
              <StyledTableRow key={deal.id}>
                <StyledTableCell component="th" scope="row">
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell>
                  <img className="w-20 rounded-md" src={deal?.category?.image} alt="" />
                </StyledTableCell>
                <StyledTableCell>{deal?.category?.categoryId}</StyledTableCell>
                <StyledTableCell>{deal?.discount}%</StyledTableCell>
                <StyledTableCell align="right">
                  <IconButton onClick={() => handleOpen(deal.id)}>
                    <Edit className="text-orange-400 cursor-pointer" />
                  </IconButton>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <IconButton onClick={() => handleDelete(deal.id)}>
                    <Delete className="text-red-600 cursor-pointer" />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {selectedDealId && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <UpdateDealForm id={selectedDealId} onClose={handleClose} onRefresh={getAllDeals} />
          </Box>
        </Modal>
      )}
    </>
  );
};

export default DealTable;
