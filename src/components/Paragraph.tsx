import React from 'react';

interface ParagraphProps {
    title?: string;
    paragraphs?: string[];
    classes?: string;
    padding?: boolean;
}

const Paragraph: React.FC<ParagraphProps> = ({ title, paragraphs, padding = false, classes = '' }) => {
    const paddingClass = padding ? 'container-padding-bottom' : '';

    return (
        <div className={`${paddingClass} ${classes} self-center`}>
            {title && <h3 className="text-3xl font-medium tracking-[-0.9px] pb-2">{title}</h3>}
            {paragraphs && paragraphs.map((paragraph, idx) => (
                <p key={idx} className="pt-7 font-extralight tracking-wider leading-6 text-white/70">
                    {paragraph}
                </p>
            ))}
        </div>
    );
};

export default Paragraph;
