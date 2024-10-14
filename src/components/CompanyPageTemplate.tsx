import React from 'react';
import Nav from '../components/Nav';
import HeroImage from '../components/HeroImage';
import ExperienceOverview from '../components/ExperienceOverview';
import workExperience from '../assets/json/workExperience.json';

interface CompanyPageTemplateProps {
    id: number;
}

const CompanyPageTemplate: React.FC<CompanyPageTemplateProps> = ({ id }) => {
    const companyData = workExperience.find(item => item.id === id);

    return (
        <>
            <Nav />
            {companyData && (
                <>
                    <HeroImage
                        imageSrc={companyData.backgroundImageSrc}
                        altText={companyData.backgroundImageAlt}
                    />
                    <ExperienceOverview
                        jobTitle={companyData.jobTitle}
                        jobDate={companyData.jobDate}
                        location={companyData.location}
                        description={companyData.description}
                        techStack={companyData.techStack}
                        logoSrc={companyData.logoSrc}
                    />
                </>
            )}
        </>
    );
};

export default CompanyPageTemplate;