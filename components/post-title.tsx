import { ReactNode } from 'react';
import Typography from 'antd/lib/typography';

type Props = {
	children?: ReactNode;
};

const { Text } = Typography;

const PostTitle = ({ children }: Props) => {
	return (
		<Text className='fff ft-h2 fw-b leading-tight md:leading-none mt-5 mb-5 text-center md:text-left'>
			{children}
		</Text>
	);
};

export default PostTitle;
