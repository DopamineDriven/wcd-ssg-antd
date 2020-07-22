import React from 'react';
import Layout from 'antd/lib/layout';
import CopyrightCircleOutlined from '@ant-design/icons/CopyrightCircleOutlined';

const { Footer } = Layout;

const FixedFooter = () => {
	const currentYear = new Date().getFullYear();
	return (

			<Footer className='align-center text-center fff ft-3 bg-black px-0 footer'>
				<CopyrightCircleOutlined />
				&nbsp;
				{currentYear}
			</Footer>

	);
};

export default FixedFooter;
