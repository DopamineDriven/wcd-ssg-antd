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
	return (
		<>
			<AppLayout>
				<Head>
					<title>Landing Page</title>
				</Head>
					<Header props={props} />

				<Footer />
			</AppLayout>
		</>
	);
};

export default Index;
