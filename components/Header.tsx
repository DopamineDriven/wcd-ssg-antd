import React, { FC } from "react";
import { Layout, Menu } from "antd";
import NavLink from "next/link";

const { Header } = Layout;
//Content destructured by Layout if needed
export const FixedHeader: FC = () => {
	return (
		<Layout>
			<Header className="header-fixed">
				<div className="header-logo">
					<div className="header-anchor">
						<NavLink href="/">
							<a className="header-text">Windy City Devs</a>
						</NavLink>
					</div>
				</div>
			</Header>
		</Layout>
	);
};
