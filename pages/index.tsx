import React from "react";
import Footer from "../components/footer";
import Head from "next/head";
import Header from "../components/header";
import { Affix, Layout } from "antd";
import Meta from "../components/meta";

const { Content } = Layout;

interface Props {
	props: string | number;
}

const Index = ({ props }: Props) => {
	const user = "🐜🐜🐜SSG🐜🐜🐜BUILD🐜🐜";
	return (
		<>
		<Meta />
		<Layout className="app-layout">
			<Head>
				<title>Landing Page</title>
			</Head>
			<Affix offsetTop={0} style={{ zIndex: 99 }}>
				<Header props={props} />
			</Affix>
			<Content className="index-content" style={{ padding: "24em" }}>
				<div>{user}</div>
			</Content>
			<Footer />
		</Layout>
		</>
	);
};

export default Index;
