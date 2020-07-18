import React from "react";
import { Layout } from "antd";

const { Content } = Layout;

const Index = () => {
	const user = "Enter TypeScript+Next+Antd+SSG+Vercel";
	return (
		<Content>
			<div>{user}</div>
		</Content>
	);
};

export default Index;
