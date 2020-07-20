import Link from 'next/link';
import Button from 'antd/lib/button';

const CardMetaDescription = () => {
	return (
		<Button size='large' type='link' className='user-button'>
			<Link href='/about'>
				<a>About</a>
			</Link>
		</Button>
	);
};

export default CardMetaDescription;
