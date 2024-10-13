import React from 'react';
import Nav from '../components/Nav';
import HeroImage from '../components/HeroImage';
import ExperienceOverview from '../components/ExperienceOverview';
import '../styles/_global.scss';
import workExperience from '../assets/json/workExperience.json';

const grundfosData = workExperience.find(item => item.id === 5);

const Grundfos: React.FC = () => {

	return (
		<div className="pb-[500px]" style={{ backgroundColor: 'var(--agco-color)' }}>
			<Nav />
			{grundfosData && (
				<div>
					<HeroImage
						imageSrc={grundfosData.backgroundImageSrc}
						altText={grundfosData.backgroundImageAlt}
					/>
					<ExperienceOverview
						jobTitle={grundfosData.jobTitle}
						jobDate={grundfosData.jobDate}
						location={grundfosData.location}
						description={grundfosData.description}
						techStack={grundfosData.techStack}
						logoSrc={grundfosData.logoSrc}
					/>
				</div>
			)}
		</div>
	);
};

export default Grundfos;
