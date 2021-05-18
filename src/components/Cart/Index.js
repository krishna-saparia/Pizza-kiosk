import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { observer } from "mobx-react-lite";
import React from "react";
import { products_data } from "../Products/Data";
import styled from "styled-components";

const CartTitle = styled.div`
  font-size: clamp(3rem, 1.5vw, 8rem);
  text-align: center;
  margin-bottom: 5rem;
`;

const CheckoutButton = styled.button`
  display: block;
  justify-content: center;
  text-align: center;
  margin: 20px auto;
  width: 20%;
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2 ease-out;
  cursor: pointer;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;

const useStyles = makeStyles({
  table: {
    Width: 700,
  },
});

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  root: {
    fontSize: "20px",
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const StyledTableContainer = withStyles((theme) => ({
  root: {
    marginTop: "40px",
  },
}))(TableContainer);

const checkout = () => {
  let min = 1000;
  let max = 9999;

  const random_number = Math.floor(Math.random() * (max - min + 1)) + min;
  window.alert(`Thanks !!!  Your order count is ${random_number}`);
};

const Cart = observer(() => {
  const classes = useStyles();

  const totalPerRow = products_data.productsData
    .flatMap((el) => el.details.dataset)
    .flatMap((el) => el.details)
    .map((el) => el.price * el.quantity);

  const subtotal = totalPerRow.reduce((a, b) => a + b, 0);

  const tax = Math.round((subtotal * 0.09975 + Number.EPSILON) * 100) / 100;

  const total = (subtotal + tax).toFixed(2);

  const taxRate = 0.09975;
  return (
    <div>
      <StyledTableContainer component={Paper} id="Cart">
        <CartTitle>Your Cart</CartTitle>
        <Table className={classes.table} aria-label="spanning table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center" colSpan={3}>
                Your Order Details
              </StyledTableCell>
              <StyledTableCell align="right">Price (CAD)</StyledTableCell>
            </TableRow>
            <TableRow>
              <StyledTableCell>Desc</StyledTableCell>
              <StyledTableCell align="right">Qty.</StyledTableCell>
              <StyledTableCell align="right">Unit</StyledTableCell>
              <StyledTableCell align="right">Sum</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products_data.productsData
              .flatMap((el) => el.details.dataset)
              .map((value, index) => {
                return (
                  <>
                    {value.details
                      .filter((el) => el.quantity > 0)
                      .map((el, index) => (
                        <TableRow key={index}>
                          <TableCell hover role="checkbox">
                            {el.name}({value.type})
                          </TableCell>
                          <TableCell align="right" hover role="checkbox">
                            {el.quantity}
                          </TableCell>
                          <TableCell align="right" hover role="checkbox">
                            {el.price}
                          </TableCell>
                          <TableCell align="right" hover role="checkbox">
                            {(el.price * el.quantity).toFixed(2)}
                          </TableCell>
                        </TableRow>
                      ))}
                  </>
                );
              })}
            <TableRow>
              <TableCell rowSpan={3} />
              <TableCell colSpan={2}>Subtotal</TableCell>
              <TableCell align="right">{subtotal}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Tax</TableCell>
              <TableCell align="right">{`${(taxRate * 100).toFixed(
                2
              )} %`}</TableCell>
              <TableCell align="right">{tax}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell colSpan={2}>Total</TableCell>
              <TableCell align="right">{total}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </StyledTableContainer>
      <CheckoutButton onClick={checkout}>Checkout</CheckoutButton>
    </div>
  );
});

export default Cart;
