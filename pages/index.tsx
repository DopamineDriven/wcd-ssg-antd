import React, { Fragment } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Layout } from "antd";

const { Content } = Layout;

const Index = () => {
	const user = "🐜🐜🐜SSG🐜🐜🐜BUILD🐜🐜🐜";
	return (
		<Fragment>
			<Header />
			<Content className="index-content" style={{ padding: "24em" }}>
				<div>{user}</div>
			</Content>
            <Footer />
		</Fragment>
	);
};

export default Index;
