import Avatar from 'antd/lib/avatar';
import UserOutlined from '@ant-design/icons/UserOutlined';

type Props = {
	picture: string;
	name: string;
};

const Avater = ({ picture, name }: Props) => {
	return (
		<div className='align-items-center d-flex'>
			<Avatar
				src={picture}
				size={150}
				icon={UserOutlined}
				shape='circle'
				alt={`picture of ${name}`}
				className='vertical-center'
			/>
		</div>
	);
};

export default Avater;
