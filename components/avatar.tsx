import Avatar from 'antd/lib/avatar';
import UserOutlined from '@ant-design/icons/UserOutlined';

type Props = {
	src: string;
	alt: string;
};

const Avater = ({ src, alt }: Props) => {
	return (
		<div className='align-items-center d-flex'>
			<Avatar
				src={src}
				size={150}
				icon={UserOutlined}
				shape='circle'
				alt={alt}
				className='vertical-center'
			/>
		</div>
	);
};

export default Avater;
