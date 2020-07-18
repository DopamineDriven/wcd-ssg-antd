import React, { FC } from "react";
import { Layout } from "antd";
import { CopyrightCircleFilled } from "@ant-design/icons";

const { Footer } = Layout;

const StickyFooter: FC = () => {
    const currentYear = new Date().getFullYear();
    return (
        <Footer style={{ textAlign: "center" }}>
            <CopyrightCircleFilled 
                
            />
        </Footer>
    )
}

export default StickyFooter;