import React from 'react';
import Head from 'next/head';
import FixedFooter from '../components/footer';
import FixedHeader from '../components/header';
import Intro from '../components/intro';
import Layout from '../components/layout';
import Container from '../components/container';
import IndexCard from '../components/card';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import List from 'antd/lib/list';

interface Props {
	props: string | number;
}

const Index = ({ props }: Props) => {
	return (
		<>
			<Layout>
				<Head>
					<title>Landing Page</title>
				</Head>
				<FixedHeader props={props} />
				<Container>
					<Intro />


				</Container>

				<FixedFooter />
			</Layout>
		</>
	);
};

export default Index;
