import React from 'react';
import styles from './Home.module.scss';
import TechStack from '../../components/TechStack';
import Employer from '../../components/Employer/Employer';
import Maintenance from '../../components/Maintenance';

const Home: React.FC = () => {
	// Toggle this variable to show/hide maintenance message
	const isMaintenanceMode = false;

	return (
		<div className={`${styles.homeContainer} flex flex-col min-h-screen items-center`}>
			<header className="inline-flex flex-col">
				<h1>
					<div className={styles.welcome}>Welcome to</div>
					<div className={styles.ghub}>G Hub</div>
					<div className={styles.slogan}>Where Code Meets Design</div>
				</h1>
			</header>

			{/* Conditionally render Maintenance or TechStack based on isMaintenanceMode */}
			{isMaintenanceMode ? (
				<Maintenance />
			) : (
				<>
					<div className={`${styles.employerContainer}`}>
						<Employer logo="/assets/companyLogo/grundfos-inverted.svg" link="/grundfos" altText="Grundfos" id="grundfos" />
						<Employer logo="/assets/companyLogo/concordium-inverted.svg" link="/concordium" altText="Concordium" id="concordium" />
						<Employer logo="/assets/companyLogo/vass-inverted.svg" link="/vass" altText="Vass" id="vass" />
						<Employer logo="/assets/companyLogo/agco-inverted.svg" link="/agco" altText="AGCO" id="agco" />
						<Employer logo="/assets/companyLogo/altapay-inverted.svg" link="/altapay" altText="AltaPay" id="altapay" />
						<Employer logo="/assets/companyLogo/philips-inverted.svg" link="/philips" altText="Philips" id="philips" />
					</div>
					<div className={`${styles.techStackContainer} flex flex-wrap justify-center gap-4 my-56`}>
						<TechStack title="Modern JS Frameworks/Libraries" items={['react', 'vuejs', 'angular', 'jquery']} />
						<TechStack title="Programming/Markup Languages" items={['javascript', 'typescript', 'html', 'css']} />
						<TechStack title="Preprocessors" items={['sass', 'less']} />
						<TechStack title="Server-Side" items={['nodejs']} />
						<TechStack title="Build Tools" items={['webpack', 'gulp', 'npm']} />
						<TechStack title="DevOps & Tools" items={['jenkins', 'docker', 'azure']} />
						<TechStack title="CMS" items={['aem']} />
						<TechStack title="Design Tools" items={['photoshop', 'illustrator', 'figma', 'invision']} />
						<TechStack title="Video Editing" items={['aftereffects', 'premiere']} />
					</div>
				</>
			)}
		</div>
	);
};

export default Home;
