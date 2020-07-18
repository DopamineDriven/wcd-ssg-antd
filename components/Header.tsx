import React, { FC } from "react";
import { Layout } from "antd";
import Link from "next/link";

const { Header } = Layout;
//Content destructured by Layout if needed
const FixedHeader: FC = () => {
	return (
		<Header className="header-fixed">
			<div className="header-logo">
				<div className="header-anchor">
					<Link href="/">
						<a className="header-text" style={{ textDecoration: "none" }}>
							Windy City Devs
						</a>
					</Link>
				</div>
			</div>
		</Header>
	);
};

export default FixedHeader;
