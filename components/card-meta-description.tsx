import Link from 'next/link';
import Button from 'antd/lib/button';

type Props = {
	slug?: string;
};

const CardMetaDescription = ({ slug }: Props) => {
	return (
		<Button size='large' type='link' className='user-button'>
			<Link as={`/posts/${slug}`} href='/posts/[slug]'>
				<a className='user-button-anchor'>About</a>
			</Link>
		</Button>
	);
};

export default CardMetaDescription;
