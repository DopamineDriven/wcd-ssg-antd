import React from "react";
import Footer from "../components/Footer";
import Head from "next/head";
import Header from "../components/Header";
import { Affix, Layout } from "antd";

const { Content } = Layout;

const Index = () => {
	const user = "🐜🐜🐜SSG🐜🐜🐜BUILD🐜🐜🐜";
	return (
		<Layout className="app-layout">
            <Head>
                <title>Landing Page</title>
            </Head>
			<Affix offsetTop={0} style={{ zIndex: 99 }}>
				<Header />
			</Affix>
			<Content className="index-content" style={{ padding: "24em" }}>
				<div>{user}</div>
			</Content>
			<Footer />
		</Layout>
	);
};

export default Index;
