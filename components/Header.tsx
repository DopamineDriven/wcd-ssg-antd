import React from 'react';
import Layout from 'antd/lib/layout';
import NavLink from 'next/link';
import SvgLogo from './svg-logo';
import Alert from './alert'

interface Props {
	props: string | number;
	preview?: boolean;
}

const { Header } = Layout;
//Content destructured by Layout if needed
const FixedHeader = ({ props }: Props) => {
	return (
		<Header className='header-fixed'>
			<div>
				<NavLink href='/'>
					<a className='ml-5'>{<SvgLogo props={props} />}</a>
				</NavLink>
			</div>
		</Header>
	);
};

export default FixedHeader;
