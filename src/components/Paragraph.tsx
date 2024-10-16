import React from 'react';

interface ParagraphProps {
    title?: string;
    paragraphs?: string[];
    classes?: string;
    padding?: boolean;
    TitleLarge?: boolean;
}

const Paragraph: React.FC<ParagraphProps> = ({ title, paragraphs, padding = false, classes = '', TitleLarge = false }) => {
    const paddingClass = padding ? 'container-padding-bottom' : '';

    return (
        <div className={`${paddingClass} ${classes} relative`}>
            {TitleLarge && title ? (
                <>
                    <h1 className="absolute z-0 text-[220px] font-semibold text-white/5 transform -translate-y-[140px] translate-x-[-80px] tracking-[-3px] whitespace-nowrap">
                        {title}
                    </h1>
                    <h3 className="text-[69px] font-medium tracking-[-0.9px]">{title}</h3>
                </>
            ) : (
                title && <h3 className="text-3xl font-medium tracking-[-0.9px] pb-2">{title}</h3>
            )}

            {paragraphs && paragraphs.map((paragraph, idx) => (
                <p key={idx} className="pt-7 font-extralight tracking-wider leading-6 text-white/70">
                    {paragraph}
                </p>
            ))}
        </div>
    );
};

export default Paragraph;
