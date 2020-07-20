import Button from "antd/lib/button";
import TwitterOutlined from "@ant-design/icons/TwitterOutlined";

type Props = {
	twitter: string;
};

const Twitter = ({ twitter }: Props) => {
	return (
		<Button
			href={twitter}
			target="__blank"
			className="user-social-media-button"
			shape="round"
			icon={
				<TwitterOutlined key="twitter" className="user-social-media-icon" />
			}
		/>
	);
};

export default Twitter;