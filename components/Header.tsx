import React from 'react';
import Layout from 'antd/lib/layout';
// import { LogoHeader } from "../Style";
import NavLink from 'next/link';
import SvgLogo from './svg-logo';
import componentStyles from './component-styles.module.css';
interface Props {
	props: string | number;
}

const { Header } = Layout;
//Content destructured by Layout if needed
const FixedHeader = ({ props }: Props) => {
	return (
		<Header className={componentStyles.headerFixed}>
			<div className={componentStyles.headerDiv}>
				<NavLink href="/">
					<a className={componentStyles.headerA}>{<SvgLogo props={props} />}</a>
				</NavLink>
			</div>
		</Header>
	);
};

export default FixedHeader;
