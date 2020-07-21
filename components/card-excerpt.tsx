import Divider from 'antd/lib/divider';
import Typography from 'antd/lib/typography';
import MoreOutlined from '@ant-design/icons/MoreOutlined';

const { Paragraph } = Typography;

type CProps = {
	excerpt: string;
};

const CardExcerpt = ({ excerpt }: CProps) => {
	return (
		<>
			<Divider />
			<Paragraph
				ellipsis={{ expandable: true, rows: 1, symbol: <MoreOutlined /> }}
				className='ft-lgr'
			>
				<em>{`${excerpt}`}</em>
			</Paragraph>
		</>
	);
};

export default CardExcerpt;
