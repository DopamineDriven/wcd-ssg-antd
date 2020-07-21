import { ReactNode, FC } from 'react';
import componentStyles from 'components.module.css';
type Props = {
	children?: ReactNode;
};

const Container: FC = ({ children }: Props) => {
	return (
		<div className={componentStyles.container || 'container'}>{children}</div>
	);
};

export default Container;
