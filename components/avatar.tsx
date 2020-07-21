import Avatar from 'antd/lib/avatar';
import UserOutlined from '@ant-design/icons/UserOutlined';

type Props = {
	name: string;
	picture: string;
};

const UserAvatar = ({ picture, name }: Props) => {
	return (
		<div style={{ display: 'flex', alignItems: 'center' }}>
			<Avatar
				src={picture}
				size={100}
				icon={UserOutlined}
				shape='circle'
				alt={`picture of ${name}`}
				className='vertical-center'
			/>
		</div>
	);
};

export default UserAvatar;