import React from 'react';
import Layout from 'antd/lib/layout';
import CopyrightCircleOutlined from '@ant-design/icons/CopyrightCircleOutlined';
import Alert from './alert';

interface Props {
	preview?: boolean;
}

const { Footer } = Layout;

const FixedFooter = ({ preview }: Props) => {
	const currentYear = new Date().getFullYear();
	return (
		<Footer className='align-center text-center fff ft-3 bg-black px-0 footer'>
			<CopyrightCircleOutlined />
			&nbsp;
			{currentYear}
			&nbsp;&nbsp;&nbsp;&nbsp;
			<Alert preview={preview} />
		</Footer>
	);
};

export default FixedFooter;
