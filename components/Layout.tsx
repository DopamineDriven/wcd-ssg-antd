import React from "react";
import Meta from "./meta";
import Footer from "./footer";
import componentStyles from "./component-styles.module.css";

type Props = {
	children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
	return (
		<>
			<Meta />
			<div className={componentStyles.minHScreen}>
				<main>{children}</main>
			</div>
			<Footer />
		</>
	);
};

export default Layout;
