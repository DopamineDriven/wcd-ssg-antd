import React, { FC } from 'react';
import Layout from 'antd/lib/layout';
import Container from './container';
import CopyrightCircleOutlined from '@ant-design/icons/CopyrightCircleOutlined';

const { Footer } = Layout;

const FixedFooter: FC = () => {
	const currentYear = new Date().getFullYear();
	return (
		<Container>
			<Footer className='align-center text-center fff ft-3'>
				<CopyrightCircleOutlined />
				&nbsp;
				{currentYear}
			</Footer>
		</Container>
	);
};

export default FixedFooter;
