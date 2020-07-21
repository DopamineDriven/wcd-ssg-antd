import React from 'react';

const Intro = () => {
	return (
		<section className='flex-dir-col md:flex-row d-flex align-items-center md:justify-between my-5 md:mb-5'>
			<h1 className='ft-h1 md:ft-h1 leading-tight md:pr-4 intro-h1'>
				Windy City Devs
			</h1>
			<h4 className='fff align-text-center ft-md md:text-left md:pl-4 mt-3'>
				A JAMstack powered platform via{' '}
				<a
					href='https://nextjs.org/'
					className='underline hover:text-success duration-200 transition-colors'
				>
					Next.js
				</a>{' '}
				and{' '}
				<a
					href='https://vercel.com/'
					className='underline hover:text-success duration-200 transition-colors'
				>
					Vercel
				</a>
			</h4>
		</section>
	);
};

export default Intro;
