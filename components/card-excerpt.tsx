import Divider from 'antd/lib/divider';
import Typography from 'antd/lib/typography';
import MoreOutlined from '@ant-design/icons/MoreOutlined';

const { Paragraph, Text } = Typography;

type CProps = {
	excerpt: string;
};

const CardExcerpt = ({ excerpt }: CProps) => {
	return (
		<>
			<Divider />
			<Paragraph
				ellipsis={{ expandable: true, rows: 1, symbol: <MoreOutlined /> }}
			>
				<Text className='ft-lgr _000'>
					<em>{excerpt}</em>
				</Text>
			</Paragraph>
		</>
	);
};

export default CardExcerpt;
