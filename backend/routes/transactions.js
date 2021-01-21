const express = require('express');
const router = express.Router();
const { getTransactions, postTransaction, deleteTransaction } = require('../controllers/transactionController');

router.route('/').get(getTransactions).post(postTransaction);

router.route('/:id').delete(deleteTransaction);

module.exports = router;