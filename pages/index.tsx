import React from 'react';
import Footer from '../components/footer';
import Head from 'next/head';
import Header from '../components/header';
import Affix from 'antd/lib/affix';
import AppLayout from '../components/layout';
import Container from '../components/container';
import Layout from 'antd/lib/layout';

const { Content } = Layout;

interface Props {
	props: string | number;
}

const Index = ({ props }: Props) => {
	const user = '🐜🐜🐜SSG🐜🐜🐜BUILD🐜🐜';
	return (
		<>
			<AppLayout>
				<Head>
					<title>Landing Page</title>
				</Head>
				<Affix offsetTop={0} style={{ zIndex: 99 }}>
					<Header props={props} />
				</Affix>
				<Container>
					<Content>
						<div className="px-3">{user}</div>
					</Content>
				</Container>
				<Footer />
			</AppLayout>
		</>
	);
};

export default Index;
