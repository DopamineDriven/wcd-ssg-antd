import Button from 'antd/lib/button';
import LinkedinOutlined from '@ant-design/icons/LinkedinOutlined';

type Props = {
	linkedin: string;
};

const Linkedin = ({ linkedin }: Props) => {
	return (
		<Button
			href={linkedin}
			target='__blank'
			className='social-media-btn'
			shape='round'
			icon={<LinkedinOutlined key='linkedin' className='social-media-icon' />}
		/>
	);
};

export default Linkedin;
