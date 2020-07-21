import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import { getPostBySlug, getAllPosts } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';
import PostType from '../../types/post';
import Container from '../../components/container';
import FixedHeader from '../../components/header';
import AppLayout from '../../components/layout';
import PostTitle from '../../components/post-title';
import PostHeader from '../../components/post-header';
import PostBody from '../../components/post-body';
import Affix from 'antd/lib/affix';
import PostLink from '../../components/post-link';

type Props = {
	props: string | number;
	post: PostType;
};



const Post = ({ post, props }: Props) => {
	const router = useRouter();
	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />;
	}
	return (
		<AppLayout>
			<Affix offsetTop={0} className='affix-header'>
				<FixedHeader props={props} />
			</Affix>
			<Container>
				{router.isFallback ? (
					<PostTitle>Loading...</PostTitle>
				) : (
					<>
						<article className='mb-8 fff'>
							<Head>
								<title>About {post.title} | WCD</title>
								<meta property='og:image' content={post.ogImage.url} />
							</Head>
							<PostHeader
								title={post.title}
								coverImage={post.coverImage}
								date={post.date}
								author={post.author}
							/>
							<PostBody content={post.content} />
						</article>
					</>
				)}
			</Container>
		</AppLayout>
	);
};

export default Post;

type Params = {
	params: {
		slug: string;
	};
};

export async function getStaticProps({ params }: Params) {
	const post = getPostBySlug(params.slug, [
		'title',
		'date',
		'slug',
		'author',
		'content',
		'ogImage',
		'coverImage'
	]);
	const content = await markdownToHtml(post.content || '');

	return {
		props: {
			post: {
				...post,
				content
			}
		}
	};
}

export async function getStaticPaths() {
	const posts = getAllPosts(['slug']);

	return {
		paths: posts.map(posts => {
			return {
				params: {
					slug: posts.slug
				}
			};
		}),
		fallback: false
	};
}
