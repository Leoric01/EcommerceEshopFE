import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { sellerProductApi } from "../../../State/confaxios/sellerProductApi";
import { useEffect, useState } from "react";
import { Button, IconButton } from "@mui/material";
import { Edit } from "@mui/icons-material";

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

export default function ProductsTable() {
  const [products, setProducts] = useState<any[]>([]);
  const [hoveredProductId, setHoveredProductId] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const fetchProductsOfConnectedUser = async () => {
    try {
      const response = await sellerProductApi.getProductsOfCurrentSeller();
      const sellersProducts = response.data?.data || [];
      setProducts(sellersProducts);
    } catch (err) {
      console.error("Failed to fetch seller products:", err);
    }
  };

  useEffect(() => {
    fetchProductsOfConnectedUser();
  }, []);

  useEffect(() => {
    let imageInterval: any;
    if (hoveredProductId !== null) {
      const product = products.find((p) => p.id === hoveredProductId);
      if (product && product.image.length > 1) {
        imageInterval = setInterval(() => {
          setCurrentImageIndex((prevIndex) =>
            prevIndex === product.image.length - 1 ? 0 : prevIndex + 1
          );
        }, 1000);
      }
    }
    return () => clearInterval(imageInterval);
  }, [hoveredProductId, products]);

  const handleMouseEnter = (productId: number) => {
    setHoveredProductId(productId);
    setCurrentImageIndex(0);
  };

  const handleMouseLeave = () => {
    setHoveredProductId(null);
    setCurrentImageIndex(0);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Images</StyledTableCell>
            <StyledTableCell align="left">Title</StyledTableCell>
            <StyledTableCell align="left">MRP</StyledTableCell>
            <StyledTableCell align="left">Selling Price</StyledTableCell>
            <StyledTableCell align="left">Color</StyledTableCell>
            <StyledTableCell align="left">Update Stock</StyledTableCell>
            <StyledTableCell align="left">Sizes</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <StyledTableRow
              key={product.id}
              onMouseEnter={() => handleMouseEnter(product.id)}
              onMouseLeave={handleMouseLeave}
            >
              <StyledTableCell component="th" scope="row">
                {product.image && product.image.length > 0 ? (
                  <img
                    src={product.image[currentImageIndex]}
                    alt={product.title}
                    style={{ width: 100, height: 100 }}
                  />
                ) : (
                  "No Image"
                )}
              </StyledTableCell>
              <StyledTableCell align="left">{product.title}</StyledTableCell>
              <StyledTableCell align="left">
                ${product.mrpPrice}
              </StyledTableCell>
              <StyledTableCell align="left">
                ${product.sellingPrice}
              </StyledTableCell>
              <StyledTableCell align="left">{product.color}</StyledTableCell>
              <StyledTableCell align="left">
                {product.quantity === 0 ? (
                  <Button size="small">in_stock</Button>
                ) : (
                  product.quantity
                )}
              </StyledTableCell>
              <StyledTableCell align="left">
                {
                  <IconButton color="primary" size="small">
                    <Edit />
                  </IconButton>
                }
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
