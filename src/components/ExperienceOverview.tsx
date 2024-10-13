'use client'

import TechStack from './TechStack';

interface ExperienceOverviewProps {
    jobTitle: string;
    jobDate: string;
    location: string;
    description: string[];
    techStack: string[];
    logoSrc: string;
}


const ExperienceOverview: React.FC<ExperienceOverviewProps> = ({ jobTitle, jobDate, location, description, techStack, logoSrc }) => {
    return (
        <section className="container relative isolate max-w-screen-xl mx-auto text-white px-4 sm:px-6 md:px-8 lg:px-10 p-8 sm:pt-10 md:pt-14 lg:pt-16">
            <div className="grid lg:grid-cols-2 gap-x-20 gap-y-12">
                <div className="lg:col-span-2">
                    <img src={`/assets/companyLogo/${logoSrc}`} alt={`${jobTitle} logo`} className="h-[30px] sm:h-[40px] md:h-[45px] lg:h-[50px]" />
                </div>
                <div className="lg:col-span-1">
                    <div>
                        <div className="border-b border-white opacity-20"></div>
                        <div className="py-4 flex">
                            <span className="font-medium w-24 sm:w-32">Title:</span>
                            <span className="font-extralight">{jobTitle}</span>
                        </div>
                        <div className="border-b border-white opacity-20"></div>
                        <div className="py-4 flex">
                            <span className="font-medium w-24 sm:w-32">Date:</span>
                            <span className="font-extralight">{jobDate}</span>
                        </div>
                        <div className="border-b border-white opacity-20"></div>
                        <div className="py-4 flex">
                            <span className="font-medium w-24 sm:w-32">Location:</span>
                            <span className="font-extralight">{location}</span>
                        </div>
                        <div className="border-b border-white opacity-20"></div>
                    </div>
                    <div className="font-extralight tracking-wider leading-6 pt-6">
                        {description.map((paragraph, idx) => (
                            <p className="pt-7">{paragraph}</p>
                        ))}
                    </div>
                </div>
                <div className="lg:col-span-1">
                    <h3 className="text-3xl font-medium tracking-[-0.9px] pb-8">Tools & Tech</h3>
                    <TechStack items={techStack} />
                </div>
            </div>
        </section>
    );
};

export default ExperienceOverview;