import React, { useEffect, useState, MouseEvent } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  SelectChangeEvent,
  Menu,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import { Delete } from "@mui/icons-material";
import { adminCouponApi } from "../../../State/configAxios/couponApi";
import { CouponDtoResponse } from "../../../Api/models";

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

const Coupon = () => {
  const [couponStatus, setCouponStatus] = useState("");
  const [allCoupons, setAllCoupons] = useState<CouponDtoResponse[]>([]);
  const [filteredCoupons, setFilteredCoupons] = useState<CouponDtoResponse[]>([]);
  const [anchorEl, setAnchorEl] = useState<{ [key: number]: HTMLElement | null }>({});
  const handleClick = (event: MouseEvent<HTMLButtonElement>, couponId: number) => {
    setAnchorEl((prev) => ({
      ...prev,
      [couponId]: event.currentTarget,
    }));
  };
  const handleChange = (event: SelectChangeEvent) => {
    setCouponStatus(event.target.value);
  };

  const fetchAllCoupons = async () => {
    try {
      const response = await adminCouponApi.getAllCoupons();
      const couponsData = response.data?.data ?? [];
      setAllCoupons(couponsData);
      console.log("Fetched coupons:", couponsData);
    } catch (error) {
      console.error("Error fetching coupons:", error);
    }
  };

  const handleAccountStatusChange = async (couponId: number, status: "ACTIVE" | "SUSPENDED") => {
    try {
      const response = await adminCouponApi.updateCouponStatus(couponId, status);
      console.log("Updated coupon:", response.data?.data);
      fetchAllCoupons();
    } catch (error) {
      console.error("Failed to update coupon status:", error);
    } finally {
      handleClose(couponId);
    }
  };

  const handleClose = (couponId: number) => {
    setAnchorEl((prev) => ({ ...prev, [couponId]: null }));
  };

  useEffect(() => {
    fetchAllCoupons();
  }, []);

  useEffect(() => {
    const updatedFilteredCoupons = couponStatus
      ? allCoupons.filter((coupon) => coupon.status === couponStatus)
      : allCoupons;
    setFilteredCoupons(updatedFilteredCoupons);
  }, [couponStatus, allCoupons]);

  const handleDeleteCoupon = async (id: number) => {
    try {
      const response = await adminCouponApi.deleteCoupon(id);
      console.log("Deleted coupon success: ", response.data);
      fetchAllCoupons();
    } catch (error) {
      console.error(`Failed to delete coupon with id: ${id}`, error);
    }
  };

  return (
    <div>
      <div className="pb-5 w-60">
        <FormControl fullWidth>
          <InputLabel id="coupon-status-select-label">Coupon Status</InputLabel>
          <Select
            labelId="coupon-status-select-label"
            id="coupon-status-select"
            value={couponStatus}
            label="Coupon Status"
            onChange={handleChange}
          >
            <MenuItem value="">All</MenuItem>
            <MenuItem value="ACTIVE">Active</MenuItem>
            <MenuItem value="SUSPENDED">Suspended</MenuItem>
            <MenuItem value="EXPIRED">Expired</MenuItem>
            <MenuItem value="NOT_ACTIVE_YET">Not started yet</MenuItem>
            <MenuItem value="INVALID">Invalid</MenuItem>
          </Select>
        </FormControl>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="coupon table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Coupon Code</StyledTableCell>
              <StyledTableCell>Start Date</StyledTableCell>
              <StyledTableCell align="right">End Date</StyledTableCell>
              <StyledTableCell align="right">Min Order Value</StyledTableCell>
              <StyledTableCell align="right">Discount %</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
              <StyledTableCell align="right">Update Status</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCoupons.map((coupon) => (
              <TableRow key={coupon.id}>
                <StyledTableCell component="th" scope="row">
                  {coupon.code}
                </StyledTableCell>
                <StyledTableCell>{coupon.validityStartDate}</StyledTableCell>
                <StyledTableCell align="right">{coupon.validityEndDate}</StyledTableCell>
                <StyledTableCell align="right">${coupon.minimumOrderValue}</StyledTableCell>
                <StyledTableCell align="right">{coupon.discountPercentage}%</StyledTableCell>
                <StyledTableCell align="right">{coupon.status}</StyledTableCell>
                <StyledTableCell align="right">
                  <Button
                    size="small"
                    onClick={(e) => coupon.id !== undefined && handleClick(e, coupon.id)}
                    color="primary"
                    className="bg-primary-color"
                  >
                    Change Status
                  </Button>
                  <Menu
                    id={`status-menu-${coupon.code}`}
                    anchorEl={coupon.id !== undefined ? anchorEl[coupon.id] : null}
                    open={Boolean(coupon.id && anchorEl[coupon.id])}
                    onClose={() => coupon.id && handleClose(coupon.id)}
                  >
                    {
                      <MenuItem onClick={() => coupon.id && handleAccountStatusChange(coupon.id, "SUSPENDED")}>
                        Suspend
                      </MenuItem>
                    }
                    {
                      <MenuItem onClick={() => coupon.id && handleAccountStatusChange(coupon.id, "ACTIVE")}>
                        Activate
                      </MenuItem>
                    }
                  </Menu>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Button variant="text" color="error" onClick={() => coupon.id && handleDeleteCoupon(coupon.id)}>
                    <Delete />
                  </Button>
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Coupon;
