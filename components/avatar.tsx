import Avatar from 'antd/lib/avatar';
import UserOutlined from '@ant-design/icons/UserOutlined';
import componentStyles from './component-styles.module.css';

type Props = {
	src: string;
	alt: string;
};

const Avater = ({ src, alt }: Props) => {
	return (
		<div className={componentStyles.avatarDiv}>
			<Avatar
				src={src}
				size={150}
				icon={UserOutlined}
				shape="circle"
				alt={alt}
				className={componentStyles.avatar}
			/>
		</div>
	);
};

export default Avater;
