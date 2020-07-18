import React, { FC } from "react";
import { Layout } from "antd";
import { CopyrightCircleOutlined } from "@ant-design/icons";

const { Footer } = Layout;

const FixedFooter: FC = () => {
	const currentYear = new Date().getFullYear();
	return (
		<Footer style={{ textAlign: "center", alignContent: "center" }}>
			<CopyrightCircleOutlined
				style={{ color: "#ffffff", fontSize: "1.6em" }}
			/>
			{currentYear}
		</Footer>
	);
};

export default FixedFooter;
