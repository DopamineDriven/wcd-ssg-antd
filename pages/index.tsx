import React from 'react';
import Head from 'next/head';
import { getAllPosts } from '../lib/api';
import Post from '../types/post';
import FixedFooter from '../components/footer';
import FixedHeader from '../components/header';
import Layout from 'antd/lib/layout';
import Intro from '../components/intro';
import AppLayout from '../components/layout';
import Container from '../components/container';
import IndexCard from '../components/card';
import Affix from 'antd/lib/affix';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import List from 'antd/lib/list';

type Props = {
	props: string | number;
	allPosts: Post[];
};

const { Content } = Layout;
const { Item } = List;

const Index = ({ allPosts, props }: Props) => {
	const posts = allPosts;
	const indexCards = posts.map(post => (
		<Row
		gutter={24}
		justify='space-between'
		align='top'
		className='index-row'
	>
		<Col span={8} xs={24} sm={12} md={8} lg={6} xl={4} className="gutter-row">
			<IndexCard
				key={post.slug}
				title={post.title}
				coverImage={post.coverImage}
				date={post.date}
				author={post.author}
				slug={post.slug}
				excerpt={post.excerpt}
			/>
		</Col>
		</Row>
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
						{indexCards}


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
