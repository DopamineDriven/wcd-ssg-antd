import { ReactNode } from 'react';
import Meta from './meta';
import Footer from './footer';


type Props = {
	children: ReactNode;
};

const AppLayout = ({ children }: Props) => {
	return (
		<>
			<Meta />
			<div className='app-layout'>
				<main>{children}</main>
			</div>
			<Footer />
		</>
	);
};

export default AppLayout;
