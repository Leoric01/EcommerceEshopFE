import { Button, Card, Divider } from "@mui/material";
import React from "react";
import TransactionTable from "./TransactionTable";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();
  return (
    <div className="space-y-6">
      <Card className="rounded-md space-y-4 p-5">
        <h1 className="text-gray-600 font-medium">Total Earning</h1>
        <h1 className="font-bold text-xl pb-1">9876</h1>
        <Divider />
        <p className="text-gray-600 font-medium pt-1">
          Last Payment : <strong>87 Kc</strong>
        </p>
      </Card>
      <div className="mt-10">
        <Button onClick={()=>navigate("/seller/transaction")} variant="contained">Transaction</Button>
      </div>
      <TransactionTable />
    </div>
  );
};

export default Payment;
