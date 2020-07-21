import { ReactNode } from 'react';

type Props = {
	children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
	return (
		<h1 className='fff ft-h1 fw-b leading-tight md:leading-none mb-5 text-center md:text-left'>
			{children}
		</h1>
	);
};

export default PostTitle;