import Divider from 'antd/lib/divider';
import Typography from 'antd/lib/typography';

const { Paragraph, Text } = Typography;

type CProps = {
	excerpt: string;
};

const CardExcerpt = ({ excerpt }: CProps) => {
	return (
		<>
			<Divider />
			<Paragraph>
				<Text className='ft-lgr _000'>
					<em>{excerpt}</em>
				</Text>
			</Paragraph>
		</>
	);
};

export default CardExcerpt;
