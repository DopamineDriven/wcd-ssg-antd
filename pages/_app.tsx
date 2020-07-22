import { AppProps } from 'next/app';
import 'antd/dist/antd.css';
import '../styles/index.css';


export default function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} className='app' />;
}
