import React from 'react';
import styles from './Home.module.scss';

const Home: React.FC = () => {

return (
	<div className={`${styles.homeContainer} flex flex-col min-h-screen items-center`}>
		<header className="inline-flex flex-col">
			<h1>
				<div className={styles.Welcome}>Welcome to</div>
				<div className={styles.Ghub}>G Hub</div> 
				<div className={styles.Slogan}>Where Code Meets Design</div>
			</h1>  
		</header>

		{/* Maintenance Message */}
		<div className="bg-yellow-200 text-yellow-800 p-4 mx-5 my-12 sm:m-20 rounded-lg max-w-md">
			<p>
				<strong>Notice:</strong> Today, Monday, October 7th, we will be performing maintenance, and the site will be temporarily unavailable.
				Please check back tomorrow. Thank you for your patience, and we apologize for any inconvenience caused.
			</p>
		</div>
	</div>
	);
};

export default Home;
