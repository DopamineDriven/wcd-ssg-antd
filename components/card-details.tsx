import Typography from 'antd/lib/typography';
import Divider from 'antd/lib/divider';
// import { User } from "../../lib/viewer.graphql";
const { Text, Title } = Typography;

type UProps = {
	name: string;
	role: string;
};

const CardDetails = ({ name, role }: UProps) => {
	return (
		<>
			<Title level={4} className='mb-3'>
				<Text className='ft-h2 fw-b _000'>
					{name}&nbsp;&nbsp;&nbsp;&nbsp;{role}
				</Text>
			</Title>
			<Divider />
		</>
	);
};

export default CardDetails;
