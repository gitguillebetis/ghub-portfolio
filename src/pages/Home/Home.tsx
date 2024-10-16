import React from 'react';
import styles from './Home.module.scss';
import TechStack from '../../components/TechStack';
import Employer from '../../components/Employer/Employer';
import Maintenance from '../../components/Maintenance';
import Container from '../../components/Container';
import Grid from '../../components/Grid';

const Home: React.FC = () => {
	const isMaintenanceMode = false;

	return (
		<div className="home-background min-h-screen">
			<Container layout='width-xl'>
				<Grid layout='1column' classes='mt-[200px] justify-items-center'>

					<header>
						<h1 className="grid justify-items-center">
							<div className="text-white text-[2.3rem] font-thin tracking-[-2px] sm:text-[3rem] sm:tracking-[-3.2px] md:text-[3.75rem] leading-[70px]">Welcome to</div>
							<div className="text-white text-[1.3rem] font-thin tracking-[-0.7px] sm:text-[1.5rem] sm:tracking-[-0.8px] md:text-[1.875rem] md:tracking-[-0.9px] leading-[60px]">Guillermo Pacheco's Portfolio ...</div>
							<div className={styles.ghub}>G Hub</div>
							<div className="text-white text-[1.3rem] font-thin tracking-[-0.7px] sm:text-[1.5rem] sm:tracking-[-0.8px] md:text-[1.875rem] md:tracking-[-0.9px]">Where Code Meets Design</div>
						</h1>
					</header>

					{isMaintenanceMode ? (
						<Maintenance date={true} message="we will be performing maintenance, and the site will be temporarily unavailable. Please check back tomorrow. Thank you for your patience, and we apologize for any inconvenience caused." />				
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

				</Grid> 
			</Container>
		</div>
	);
};

export default Home;
