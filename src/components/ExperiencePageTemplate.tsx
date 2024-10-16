import React from 'react';
import Nav from './Nav';
import HeroImage from './HeroImage';
import ExperienceOverview from './ExperienceOverview';
import data from '../assets/json/data.json';

interface ExperienceTemplateProps {
    id: number;
}

const ExperiencePageTemplate: React.FC<ExperienceTemplateProps> = ({ id }) => {
    const experienceData = data.experience.find((item) => item.experienceID === id);

    const companyLogo = experienceData
        ? data.companies.find((item) => item.companyID === experienceData.companyID)?.logoSrc
        : null;

    return (
        <>
            <Nav />
            {experienceData ? (
                <>
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
                        logoSrc={companyLogo || ''} 
                    />
                </>
            ) : (
                <p>Experience data not found.</p>
            )}
        </>
    );
};

export default ExperiencePageTemplate;
