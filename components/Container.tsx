import { ReactNode, FunctionComponent } from 'react';
type Props = {
	children?: ReactNode;
};

const Container: FunctionComponent = ({ children }: Props) => {
	return <div className='container-div'>{children}</div>;
};

export default Container;
