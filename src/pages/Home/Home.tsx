import React from 'react';
import styles from './Home.module.scss';
import TechStack from '../../components/TechStack';
import Employer from '../../components/Employer';
import Maintenance from '../../components/Maintenance';
import GrundfosLogo from '../../assets/employers/grundfos-inverted.svg';
import ConcordiumLogo from '../../assets/employers/concordium-inverted.svg';
import VassLogo from '../../assets/employers/vass-inverted.svg';
import AgcoLogo from '../../assets/employers/agco-inverted.svg';
import AltaPayLogo from '../../assets/employers/altapay-inverted.svg';
import PhilipsLogo from '../../assets/employers/philips-inverted.svg';

const Home: React.FC = () => {
	// Toggle this variable to show/hide maintenance message
	const isMaintenanceMode = true;

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
					<div className={`${styles.techStack} flex flex-wrap justify-center gap-4 my-56`}>
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
					<div className="flex gap-6 mt-10">
						<Employer logo={GrundfosLogo} link="/page/grundfos" altText="Grundfos" />
						<Employer logo={ConcordiumLogo} link="/page/concordium" altText="Concordium" />
						<Employer logo={VassLogo} link="/page/vass" altText="Vass" />
						<Employer logo={AgcoLogo} link="/page/agco" altText="AGCO" />
						<Employer logo={AltaPayLogo} link="/page/altapay" altText="AltaPay" />
						<Employer logo={PhilipsLogo} link="/page/philips" altText="Philips" />
					</div>
				</>
			)}
		</div>
	);
};

export default Home;
