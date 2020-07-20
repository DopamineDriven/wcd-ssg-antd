import React, { FC } from 'react';
import Layout from 'antd/lib/layout';
import CopyrightCircleOutlined from '@ant-design/icons/CopyrightCircleOutlined';

const { Footer } = Layout;

const FixedFooter: FC = () => {
	const currentYear = new Date().getFullYear();
	return (
		<Footer className="align-enter text-center fff ft-3">
			<CopyrightCircleOutlined
				style={{
					color: '#ffffff',
					fontSize: '1.0em'
				}}
			/>
			&nbsp;
			{`${currentYear}`}
		</Footer>
	);
};

export default FixedFooter;
