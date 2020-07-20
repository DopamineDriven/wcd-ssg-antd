import Button from 'antd/lib/button';
import TwitterOutlined from '@ant-design/icons/TwitterOutlined';

type Props = {
	twitter: string;
};

const Twitter = ({ twitter }: Props) => {
	return (
		<Button
			href={twitter}
			target='__blank'
			className='social-media-btn'
			shape='round'
			icon={<TwitterOutlined key='twitter' className='social-media-icon' />}
		/>
	);
};

export default Twitter;
