import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { Edit } from "@mui/icons-material";
import { HomeCategory as HomeCategoriesInterface } from "../../../Api/models";
import { useState } from "react";
import { Box, IconButton, Modal } from "@mui/material";
import UpdateHomeCategoryForm from "./UpdateHomeCategoryForm";

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
  // hide last border
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
export default function HomeCategoryTable({ categories }: { categories: HomeCategoriesInterface[] }) {
  const [selectedCategory, setSelectedCategory] = useState<HomeCategoriesInterface>();
  const [open, setOpen] = useState(false);
  const handleOpen = (category: HomeCategoriesInterface | undefined) => () => {
    setSelectedCategory(category);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>No</StyledTableCell>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell>image</StyledTableCell>
              <StyledTableCell align="right">category</StyledTableCell>
              <StyledTableCell align="right">Name</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories?.map((category: HomeCategoriesInterface, index) => (
              <StyledTableRow key={category.categoryId}>
                <StyledTableCell component="th" scope="row">
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  {category.id}
                </StyledTableCell>
                <StyledTableCell component="th" scope="row">
                  <img className="w-20 rounded-md" src={category.image} alt="" />
                </StyledTableCell>
                <StyledTableCell align="right" component="th" scope="row">
                  {category.categoryId}
                </StyledTableCell>

                <StyledTableCell align="right">
                  <IconButton onClick={handleOpen(category)}>
                    <Edit className="text-orange-400 cursor-pointer" />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <UpdateHomeCategoryForm category={selectedCategory} handleClose={handleClose} />
        </Box>
      </Modal>
    </>
  );
}
