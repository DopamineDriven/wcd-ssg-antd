import React from 'react';
import Head from 'next/head';
import { getAllPosts } from '../lib/api';
import Post from '../types/post';
import FixedHeader from '../components/header';
import Intro from '../components/intro';
import AppLayout from '../components/layout';
import IndexCard from '../components/card';
import Affix from 'antd/lib/affix';
import Divider from 'antd/lib/divider';
// import Row from "antd/lib/row";
// import Col from "antd/lib/col";

type Props = {
	props: string | number;
	allPosts: Post[];
};

const Index = ({ allPosts, props }: Props) => {
	const posts = allPosts;
	const indexCards = posts.map(post => (
		<IndexCard
			key={post.slug}
			title={post.title}
			coverImage={post.coverImage}
			date={post.date}
			author={post.author}
			slug={post.slug}
			excerpt={post.excerpt}
		/>
	));
	return (
		<>
			<AppLayout>
				<Head>
					<title>Windy City Devs</title>
				</Head>
				<Affix offsetTop={0} className='affix-header'>
					<FixedHeader props={props} />
				</Affix>
				<Intro />
				<div className='index-row-keeper'>
					<Divider />
					{indexCards}
				</div>
			</AppLayout>
		</>
	);
};

export default Index;

export const getStaticProps = async () => {
	const allPosts = getAllPosts([
		'title',
		'date',
		'slug',
		'author',
		'coverImage',
		'excerpt'
	]);

	return {
		props: { allPosts }
	};
};
