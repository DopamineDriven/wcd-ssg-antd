import React from 'react';
import Head from 'next/head';
import { CMS_NAME } from '../lib/constants';
import { getAllPosts } from '../lib/api';
import Post from '../types/post';
import FixedFooter from '../components/footer';
import FixedHeader from '../components/header';
import Intro from '../components/intro';
import Layout from '../components/layout';
import Container from '../components/container';
import IndexCard from '../components/card';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import List from 'antd/lib/list';

type Props = {
	props: string | number;
	allPosts: Post[];
};

const { Item } = List;

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
			<Layout>
				<Head>
					<title>SSG via Nextjs and {CMS_NAME}</title>
				</Head>
				<FixedHeader props={props} />
				<Container>
					<Intro />
					<Row gutter={[48, 48]} justify='center' align='middle'>
						<Col span={8} xs={24} sm={12} md={8} lg={6} xl={4}>
							<List
								grid={{
									gutter: 8,
									xs: 1,
									sm: 2,
									lg: 4
								}}
								header={<></>}
								dataSource={indexCards}
								renderItem={indexCard => <Item>{indexCard}</Item>}
							/>
						</Col>
					</Row>
				</Container>
				<FixedFooter />
			</Layout>
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
