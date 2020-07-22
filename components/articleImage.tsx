import cn from 'classnames';
import Link from 'next/link';

type Props = {
	title: string;
	src: string;
	slug?: string;
};

const ArticleImage = ({ title, src, slug }: Props) => {
	const image = (
		<img
			src={src}
			alt={`cover image for ${title}`}
			className={cn('shadow-sm', {
				'hover:shadow-md transition-shadow duration-200': slug
			})}
		/>
	);
	return (
		<div className='sm:mx-0'>
			{slug ? (
				<Link as={`/posts/${slug}`} href='/posts/[slug]'>
					<a aria-label={title}>{image}</a>
				</Link>
			) : (
				image
			)}
		</div>
	);
};

export default ArticleImage;
