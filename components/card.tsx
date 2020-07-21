import Card from 'antd/lib/card';
import Github from './github-icon';
import Linkedin from './linkedin-icon';
import Twitter from './twitter-icon';
import CardMetaDescription from './card-meta-description';
import CardDetails from './card-details';
import CardExcerpt from './card-excerpt';
import CoverImage from './cover-image';
import Avatar from './avatar';
import Author from '../types/author';
import DateFormatter from './date-formatter';

type Props = {
	title: string;
	coverImage: string;
	date: string;
	excerpt: string;
	author: Author;
	slug: string;
};

const { Meta } = Card;

const IndexCard = ({
	title,
	coverImage,
	date,
	excerpt,
	author,
	slug
}: Props) => {
	return (
		<section>
			<Card
				className='text-justify d-in m-3'
				hoverable={true}
				cover={<CoverImage title={title} src={coverImage} slug={slug} />}
				actions={[
					<Github github={author.github} />,
					<Linkedin linkedin={author.linkedin} />,
					<Twitter twitter={author.twitter} />
				]}
			>
				<CardDetails name={author.name} role={author.role} />
				<Meta
					description={<CardMetaDescription />}
					avatar={
						<Avatar
							picture={author.picture}
							name={`picture of ${author.name}`}
						/>
					}
				/>
				<CardExcerpt excerpt={excerpt} />
				<div className='ft-md mb-3'>
					<DateFormatter dateString={date} />
				</div>
			</Card>
		</section>
	);
};

export default IndexCard;
