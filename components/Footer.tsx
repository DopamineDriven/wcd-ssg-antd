import React, { FC } from "react";
import { Layout } from "antd";
import { CopyrightCircleOutlined } from "@ant-design/icons";

const { Footer } = Layout;

const FixedFooter: FC = () => {
	const currentYear = new Date().getFullYear();
	return (
		<Layout>
			<Footer
				style={{
					textAlign: "center",
					alignContent: "center",
					backgroundColor: "#000000",
					color: "#ffffff"
				}}
			>
				<CopyrightCircleOutlined
					style={{
						color: "#ffffff",
						fontSize: "1.0em",
						verticalAlign: "center"
					}}
				/>
				&nbsp;
				{`${currentYear}`}
			</Footer>
		</Layout>
	);
};

export default FixedFooter;
