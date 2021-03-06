import React, { useContext, useEffect, useState } from 'react';
import BlogCard from '../Components/BlogCard';
import { useStyles } from '../Styles/HomeStyles';
import { GlobalContext } from '../Context/GlobalState';
//import Blog from './Blog';
import { UserContext } from '../Context/UserContext';

export default function Home() {
	const classes = useStyles();
	const { transactions, getTransactions } = useContext(GlobalContext);
	const { search, setSearch } = useContext(UserContext);
	const [filteredTransactions, setFilteredTransactions] = useState([]);

	useEffect(() => {
		getTransactions();
		// eslint-disable-next-line
	}, []);
	useEffect(() => {
		if (search !== '') {
			setFilteredTransactions(
				transactions.filter((transaction) => {
					return transaction.title.toLowerCase().includes(search.toLowerCase());
				})
			);
		} else setFilteredTransactions(transactions);
	}, [search, setSearch, transactions]);

	console.log('HOME RENDERED');
	console.log('search: ' + search);
	console.log(filteredTransactions);
	console.log(transactions);
	return (
		<div className={classes.home}>
			<div className={classes.viewA}>
				{transactions ? (
					filteredTransactions
						.slice(0)
						.reverse()
						.map((transaction) => (
							<BlogCard key={transaction._id} transaction={transaction} />
						))
				) : (
					<p>transactions</p>
				)}
			</div>
			{/* <div className={classes.viewB}>
				<Switch>
					<Route path="/blog/:id">
						<Blog className={classes.blog} />
					</Route>
					<Route path="/newBlog">
						<NewBlog />
					</Route>
				</Switch>
			</div> */}
		</div>
	);
}
