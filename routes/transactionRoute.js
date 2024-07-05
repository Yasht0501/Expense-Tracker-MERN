const express = require('express');
const { addTransaction, getAllTransaction, OnlyGetAllTransactions, EditTransaction, DeleteTransaction } = require('../controllers/transactionController');

//router object
const router = express.Router()

//routes
//add transaction POST Method
router.post('/add-transaction', addTransaction)

//Edit transaction POST Method
router.post('/edit-transaction', EditTransaction)

//Delete transaction POST Method
router.post('/delete-transaction', DeleteTransaction)

//get transaction
router.post('/get-transaction', getAllTransaction)

router.post('/getAll-transaction', OnlyGetAllTransactions)

module.exports = router