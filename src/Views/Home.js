import React from 'react';
import Searchbar from '../Components/Searchbar';
import BlogCard from '../Components/BlogCard';
import Login from './Login';
import useToken from '../Util/UseToken';
import '../Styles/Home.css';

export default function Home() {
	const [token, setToken] = useToken();

	return !token ? (
		<Login setToken={setToken} />
	) : (
		<div id="home-div">
			<Searchbar />
			<div id="blogcard-container">
				<BlogCard />
				<BlogCard />
			</div>
			<div id="button-container">
				<button type="button" id="new-blog-button">
					+
				</button>
			</div>
		</div>
	);
}
