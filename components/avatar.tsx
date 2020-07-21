import Avatar from 'antd/lib/avatar';
import UserOutlined from '@ant-design/icons/UserOutlined';
import Typography from 'antd/lib/typography';
type Props = {
	name: string;
	picture: string;
};

const { Text } = Typography;

const UserAvatar = ({ picture, name }: Props) => {
	return (
		<>
			<Text strong className='ft-h2 fff'>
				{name}
			</Text>
			<div style={{ display: 'flex', alignItems: 'center', marginTop: "1rem" }}>
				<Avatar
					src={picture}
					size={150}
					icon={UserOutlined}
					shape='circle'
					alt={`picture of ${name}`}
					className='vertical-center'
				/>
			</div>
		</>
	);
};

export default UserAvatar;
