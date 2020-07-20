import GithubOutlined from '@ant-design/icons/GithubOutlined';
import Button from 'antd/lib/button';

type Props = {
	github: string;
};

const Github = ({ github }: Props) => {
	return (
		<Button
			href={github}
			className="user-social-media-button"
			target="__blank"
			shape="round"
			icon={<GithubOutlined key="github" className="user-social-media-icon" />}
		/>
	);
};

export default Github;
