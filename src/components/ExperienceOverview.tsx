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
        <div className="relative isolate max-w-screen-xl mx-auto container-padding-gutters container-padding-top-small container-padding-bottom text-white">
            <section className="grid lg:grid-cols-2 gap-x-20 gap-y-12">
                <div className="lg:col-span-2">
                    <img src={`${logoSrc}`} alt={`${jobTitle} logo`} className="h-[30px] sm:h-[40px] md:h-[45px] lg:h-[50px]" />
                </div>
                <div className="lg:col-span-1">
                    <div>
                        <div className="border-b border-white opacity-20"></div>
                        <div className="py-4 flex">
                            <div className="font-medium w-24 sm:w-32 flex-shrink-0">Title:</div>
                            <div className="font-extralight">{jobTitle}</div>
                        </div>
                        <div className="border-b border-white opacity-20"></div>
                        <div className="py-4 flex">
                            <div className="font-medium w-24 sm:w-32 flex-shrink-0">Period:</div>
                            <div className="font-extralight">{jobDate}</div>
                        </div>
                        <div className="border-b border-white opacity-20"></div>
                        <div className="py-4 flex">
                            <div className="font-medium w-24 sm:w-32 flex-shrink-0">Location:</div>
                            <div className="font-extralight">{location}</div>
                        </div>
                        <div className="border-b border-white opacity-20"></div>
                    </div>
                    <div className="font-extralight tracking-wider leading-6 pt-6">
                        {description.map((paragraph, idx) => (
                            <p key={idx} className="pt-7 text-white/70">{paragraph}</p>
                        ))}
                    </div>
                </div>
                <div className="lg:col-span-1">
                    <h3 className="text-3xl font-medium tracking-[-0.9px] pb-8">Tools & Tech</h3>
                    <TechStack items={techStack} />
                </div>
            </section>
        </div>
    );
};

export default ExperienceOverview;