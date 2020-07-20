import React, { FC } from 'react';
import Layout from 'antd/lib/layout';
import CopyrightCircleOutlined from '@ant-design/icons/CopyrightCircleOutlined';

const { Footer } = Layout;

const FixedFooter: FC = () => {
	const currentYear = new Date().getFullYear();
	return (
		<Footer
			style={{
				textAlign: 'center',
				alignContent: 'center',
				backgroundColor: '#000000',
				color: '#ffffff'
			}}
		>
			<CopyrightCircleOutlined
				style={{
					color: '#ffffff',
					fontSize: '1.0em',
					verticalAlign: 'center'
				}}
			/>
			&nbsp;
			{`${currentYear}`}
		</Footer>
	);
};

export default FixedFooter;
