import React from 'react';
import Layout from 'antd/lib/layout';
import NavLink from 'next/link';
import SvgLogo from './svg-logo';

interface Props {
	props: string | number;
}

const { Header } = Layout;
//Content destructured by Layout if needed
const FixedHeader = ({ props }: Props) => {
	return (
		<Header>
			<div className='d-in pl-2'>
				<NavLink href='/'>
					<a className='ml-5'>{<SvgLogo props={props} />}</a>
				</NavLink>
			</div>
		</Header>
	);
};

export default FixedHeader;
