import React, { useEffect, useState } from "react";
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

  const handleChange = (event: SelectChangeEvent) => {
    setCouponStatus(event.target.value);
  };

  const fetchAllCoupons = async () => {
    try {
      const response = await adminCouponApi.getAllCoupons();
      const couponsData = response.data?.data ?? [];
      setAllCoupons(couponsData);
      console.log("Coupons with status: ", couponsData);
    } catch (error) {
      console.log(error);
    }
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

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>, couponId: number) => {
    setAnchorEl((prev) => ({
      ...prev,
      [couponId]: event.currentTarget,
    }));
  };

  const handleClose = (couponId: number) => {
    setAnchorEl((prev) => ({ ...prev, [couponId]: null }));
  };

  const handleUpdateCoupon = async (couponId: number, status: string) => {
    try {
      // Simulate API call to update coupon status
      // await adminCouponApi.updateCouponStatus(couponId, status);
      console.log(`Successfully updated coupon ${couponId} to status: ${status}`);

      // Refresh coupons
      fetchAllCoupons();
    } catch (err) {
      console.error("Failed to update coupon status:", err);
    } finally {
      handleClose(couponId);
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
            {couponStatuses.map((item) => (
              <MenuItem key={item.status} value={item.status}>
                {item.title}
              </MenuItem>
            ))}
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
              <TableRow key={coupon.code}>
                <StyledTableCell component="th" scope="row">
                  {coupon.code}
                </StyledTableCell>
                <StyledTableCell>{coupon.validityStartDate}</StyledTableCell>
                <StyledTableCell align="right">{coupon.validityEndDate}</StyledTableCell>
                <StyledTableCell align="right">${coupon.minimumOrderValue}</StyledTableCell>
                <StyledTableCell align="right">{coupon.discountPercentage}%</StyledTableCell>
                <StyledTableCell align="right">
                  {couponStatuses.find((status) => status.status === coupon.status)?.title}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Button
                    size="small"
                    onClick={(e) => coupon.code && handleClick(e, coupon.code.hashCode())}
                    color="primary"
                    className="bg-primary-color"
                  >
                    Status
                  </Button>
                  <Menu
                    id={`status-menu-${coupon.code}`}
                    anchorEl={coupon.code ? anchorEl[coupon.code.hashCode()] : null}
                    open={Boolean(coupon.code && anchorEl[coupon.code.hashCode()])}
                    onClose={() => coupon.code && handleClose(coupon.code.hashCode())}
                  >
                    {couponStatuses.map((status) => (
                      <MenuItem
                        key={status.status}
                        onClick={() => coupon.code && handleUpdateCoupon(coupon.code.hashCode(), status.status)}
                      >
                        {status.title}
                      </MenuItem>
                    ))}
                  </Menu>
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Button variant="text" color="error">
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
