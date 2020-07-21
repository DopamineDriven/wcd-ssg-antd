import React from 'react';

const Intro = () => {
	return (
		// <section className='flex-dir-col md:flex-row d-flex align-items-center md:justify-between my-5 md:mb-5'>
		<div className="post-title flex-dir-col align-items-center ml-5">
			<h1 className='ft-h1 md:ft-h1 leading-tight md:pr-4 intro-h1 ml-5'>
				Thanks for Dropping by
			</h1>
			<h4 className='fff align-text-center ft-h2 md:text-left md:pl-4 mt-3'>
				A next-gen platform powered by{' '}
				<a
					href='https://nextjs.org/'
					className='underline fff hover:text-success duration-200 transition-colors'
				>
					Next.js
				</a>{' '}
				and{' '}
				<a
					href='https://vercel.com/'
					className='underline fff hover:text-success duration-200 transition-colors'
				>
					Vercel
				</a>
			</h4>
		</div>
		// </section>
	);
};

export default Intro;
