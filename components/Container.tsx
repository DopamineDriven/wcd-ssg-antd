import { ReactNode, FunctionComponent } from 'react';
import componentStyles from 'components.module.css';
type Props = {
	children?: ReactNode;
};

const Container: FunctionComponent = ({ children }: Props) => {
	return <div className={componentStyles.container}>{children}</div>;
};

export default Container;
