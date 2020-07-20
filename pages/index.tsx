import React from "react";
import Footer from "../components/footer";
import Head from "next/head";
import Header from "../components/header";
import Affix from "antd/lib/affix";
import Layout from "../components/layout";
import Container from "../components/container";

interface Props {
	props: string | number;
}

const Index = ({ props }: Props) => {
	const user = "🐜🐜🐜SSG🐜🐜🐜BUILD🐜🐜";
	return (
		<>
		<Layout>
			<Head>
				<title>Landing Page</title>
			</Head>
			<Affix offsetTop={0} style={{ zIndex: 99 }}>
				<Header props={props} />
			</Affix>
			<div className="pt-3">
				<div>{user}</div>
			</div>
			<Footer />
		</Layout>
		</>
	);
};

export default Index;
