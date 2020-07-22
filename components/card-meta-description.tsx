import Link from 'next/link';
import Button from 'antd/lib/button';
import cn from 'classnames';
type Props = {
	slug?: string;
	title: string;
};

const CardMetaDescription = ({ slug, title }: Props) => {
	const button = (
		<Button
			size='large'
			type='link'
			className={cn({
				'user-button': slug
			})}
		>
			About
		</Button>
	);
	return (
		<div>
			{slug ? (
				<Link as={`/posts/${slug}`} href='/posts/[slug]'>
					<a aria-label={title}>{button}</a>
				</Link>
			) : (
				button
			)}
		</div>
	);
};

export default CardMetaDescription;
