import Typography from 'antd/lib/typography';
import Link from 'next/link';

const { Text } = Typography;

const PostLink = () => {
	return (
		<Text strong className='mb-5 post-link fff'>
			<Link href='/'>
				<a className="fff ft-h1">&rarr;&nbsp;Home&nbsp;&larr;</a>
			</Link>
		</Text>
	);
};

export default PostLink;
