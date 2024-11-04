import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, Button, Menu } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { accountStatuses } from "../../../Data/AccountStatuses";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Seller as SellerInterface } from "../../../Api/models";
import { sellerApi } from "../../../State/configAxios/sellerApi";
import { SellerAccountStatusEnum } from "../../../Api/models";
import { adminApi } from "../../../State/configAxios/adminApi";

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

export default function SellersTable() {
  const [page, setPage] = useState(0);
  const [accountStatus, setAccountStatus] = useState<SellerAccountStatusEnum | "">("");
  const [sellers, setSellers] = useState<SellerInterface[]>([]);

  const fetchSellers = async (status: SellerAccountStatusEnum) => {
    try {
      const response = await sellerApi.getAllSellers(status || "");
      const sellers = response.data?.data || [];
      setSellers(sellers);
      console.log("Successfully fetched sellers:", sellers);
    } catch (err) {
      console.error("Failed to fetch sellers:", err);
    }
  };

  useEffect(() => {
    fetchSellers(accountStatus as SellerAccountStatusEnum);
  }, [accountStatus]);

  const handleAccountStatusChange = (event: any) => {
    setAccountStatus(event.target.value as SellerAccountStatusEnum);
  };

  const handleUpdateSellerAccountStatus = async (id: number, status: SellerAccountStatusEnum) => {
    try {
      const response = await adminApi.updateStatus(id, status);
      console.log("Successfully updated seller status:", response);
      fetchSellers(accountStatus as SellerAccountStatusEnum);
    } catch (err) {
      console.error("Failed to update seller status:", err);
    }
  };

  const [anchorEl, setAnchorEl] = React.useState<{ [key: number]: HTMLElement | null }>({});
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, sellerId: any) => {
    setAnchorEl((prev) => ({ ...prev, [sellerId]: event.currentTarget }));
  };
  const handleClose = (sellerId: number) => {
    setAnchorEl((prev) => ({ ...prev, [sellerId]: null }));
  };

  return (
    <>
      <div className="pb-5 w-60">
        <FormControl color="primary" fullWidth>
          <Select
            id="demo-simple-select"
            value={accountStatus}
            onChange={handleAccountStatusChange}
            color="primary"
            className="text-primary-color"
            displayEmpty
            renderValue={(selected) => {
              if (selected === undefined) {
                return <em>Select Account Status</em>;
              }
              return accountStatuses.find((status) => status.status === selected)?.title || selected;
            }}
          >
            <MenuItem value={undefined}>
              <em>All</em>
            </MenuItem>
            {accountStatuses.map((status) => (
              <MenuItem value={status.status}>{status.title}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Seller Name</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Mobile</StyledTableCell>
              <StyledTableCell>VAT</StyledTableCell>
              <StyledTableCell>Bussiness Name</StyledTableCell>
              <StyledTableCell align="right">Account Status</StyledTableCell>
              <StyledTableCell align="right">Change Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sellers.map((seller) => (
              <StyledTableRow key={seller.id}>
                <StyledTableCell component="th" scope="row">
                  {seller.name}
                </StyledTableCell>
                <StyledTableCell>{seller.email}</StyledTableCell>
                <StyledTableCell>{seller.mobile}</StyledTableCell>
                <StyledTableCell>{seller.vat}</StyledTableCell>
                <StyledTableCell>{seller.businessDetails?.businessName}</StyledTableCell>
                <StyledTableCell align="right">{seller.accountStatus}</StyledTableCell>
                <StyledTableCell align="right">
                  <Button id={"basic-button" + seller.id} onClick={(e) => handleClick(e, seller.id)}>
                    Change Status
                  </Button>
                  <Menu
                    id={"basic-menus" + seller.id}
                    anchorEl={anchorEl[seller.id || 0]}
                    open={Boolean(anchorEl[seller.id || 0])}
                    onClose={() => handleClose(seller.id || 0)}
                  >
                    {accountStatuses.map((status) => (
                      <MenuItem
                        onClick={() =>
                          handleUpdateSellerAccountStatus(seller.id || 0, status.status as SellerAccountStatusEnum)
                        }
                        value={status.status}
                      >
                        {status.title}
                      </MenuItem>
                    ))}
                  </Menu>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
