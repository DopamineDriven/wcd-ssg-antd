import Button from 'antd/lib/button';
import GithubOutlined from '@ant-design/icons/GithubOutlined';

type Props = {
	github: string;
};

const Github = ({ github }: Props) => {
	return (
		<Button
			href={github}
			className='social-media-btn'
			target='__blank'
			shape='round'
			icon={<GithubOutlined key='github' className='social-media-icon' />}
		/>
	);
};

export default Github;
