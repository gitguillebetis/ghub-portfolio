import React from 'react';
import Nav from '../components/Nav';
import HeroImage from '../components/HeroImage';
import ExperienceOverview from '../components/ExperienceOverview';
import '../styles/_global.scss';
import workData from '../assets/json/workExperience.json';

const experienceData = workData.find(item => item.id === 4);

const Grundfos: React.FC = () => {
	return (
		<div className="pb-[500px]" style={{ backgroundColor: 'var(--concordium-color)' }}>
			<Nav />
			{experienceData && (
				<div>
					<HeroImage
						imageSrc={experienceData.backgroundImageSrc}
						altText={experienceData.backgroundImageAlt}
					/>
					<ExperienceOverview
						jobTitle={experienceData.jobTitle}
						jobDate={experienceData.jobDate}
						location={experienceData.location}
						description={experienceData.description}
						techStack={experienceData.techStack}
						logoSrc={experienceData.logoSrc}
					/>
				</div>
			)}
		</div>
	);
};

export default Grundfos;
