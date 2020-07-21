import mdStyles from './md-styles.module.css';

type Props = {
	content: string;
};

const PostBody = ({ content }: Props) => {
	return (
		<div className='post-body'>
			<div
				className={mdStyles['markdown']}
				dangerouslySetInnerHTML={{ __html: content }}
			/>
		</div>
	);
};


export default PostBody;