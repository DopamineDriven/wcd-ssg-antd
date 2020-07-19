import React from "react";
import Meta from "./meta";
import Footer from "./footer";

type Props = {
	children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
	return (
		<>
			<Meta />
			<div style={{ minHeight: "100vh" }}>
				<main>{children}</main>
			</div>
			<Footer />
		</>
	);
};

export default Layout;
