import React from 'react'
import TransactionTable from './TransactionTable'

const Transaction = () => {
  return (
    <div>
      <h1 className="font-bold mb-5 text-xl">All Transactions</h1>
      <TransactionTable/>
    </div>
  )
}

export default Transaction