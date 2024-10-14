import React, { useEffect, useState, useRef } from 'react';

interface ImageParagraphProps {
    layout: 'image-left' | 'image-right' | 'no-image' | 'just-image';
    title?: string;
    paragraphs?: string[];
    imageSrc?: string;
    altText?: string;
    padding?: boolean;
    imageClasses?: string;
    paragraphClasses?: string;
    slideDirection?: 'left' | 'right' | 'bottom' | 'fade'; // New slide direction options
}

const TitleContent: React.FC<{ title?: string }> = ({ title }) => (
    title ? <h3 className="text-3xl font-medium tracking-[-0.9px] pb-2">{title}</h3> : null
);

const ParagraphContent: React.FC<{ paragraphs?: string[] }> = ({ paragraphs }) => (
    <>
        {paragraphs && paragraphs.map((paragraph, idx) => (
            <p key={idx} className="pt-7 font-extralight tracking-wider leading-6 text-white/70">{paragraph}</p>
        ))}
    </>
);

const ImageContent: React.FC<{ imageSrc?: string; altText?: string; customClasses?: string; slideDirection?: 'left' | 'right' | 'bottom' | 'fade' }> = ({ imageSrc, altText, customClasses, slideDirection = 'right' }) => {
    const [isVisible, setIsVisible] = useState(false);
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (imageRef.current) {
                const rect = imageRef.current.getBoundingClientRect();
                const isInView = rect.top < window.innerHeight && rect.bottom > 0;
                if (isInView) {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const animationClass = `slide-in ${isVisible ? `visible-${slideDirection}` : ''}`;

    return imageSrc ? (
        <img
            ref={imageRef}
            src={imageSrc}
            alt={altText}
            className={`${animationClass} ${customClasses || ''}`}
        />
    ) : null;
};

const ImageParagraph: React.FC<ImageParagraphProps> = ({ layout, title, paragraphs, imageSrc, altText, padding = false, imageClasses, paragraphClasses, slideDirection }) => {
    const isImageLeft = layout === 'image-left';
    const isImageRight = layout === 'image-right';
    const isNoImage = layout === 'no-image';
    const isJustImage = layout === 'just-image';
    const containerPaddingClass = padding ? 'container-padding' : '';

    return (
        <>
            {isImageLeft && (
                <div className={`grid lg:grid-cols-2 gap-20 ${containerPaddingClass}`}>
                    <div className="order-2 lg:order-1">
                        <ImageContent imageSrc={imageSrc} altText={altText} customClasses={imageClasses} slideDirection={slideDirection} />
                    </div>
                    <div className={`self-center order-1 lg:order-2 ${paragraphClasses || ''}`}>
                        <TitleContent title={title} />
                        <ParagraphContent paragraphs={paragraphs} />
                    </div>
                </div>
            )}

            {isImageRight && (
                <div className={`grid lg:grid-cols-2 gap-20 ${containerPaddingClass}`}>
                    <div className={`self-center order-1 lg:order-2 ${paragraphClasses || ''}`}>
                        <TitleContent title={title} />
                        <ParagraphContent paragraphs={paragraphs} />
                    </div>
                    <div className="justify-self-center">
                        <ImageContent imageSrc={imageSrc} altText={altText} customClasses={imageClasses} slideDirection={slideDirection} />
                    </div>
                </div>
            )}

            {isNoImage && (
                <div className={`grid mx-auto ${containerPaddingClass} ${paragraphClasses || ''}`}>
                    <TitleContent title={title} />
                    <ParagraphContent paragraphs={paragraphs} />
                </div>
            )}

            {isJustImage && (
                <div className={`grid justify-items-center ${containerPaddingClass}`}>
                    <ImageContent imageSrc={imageSrc} altText={altText} customClasses={imageClasses} slideDirection={slideDirection}/>
                </div>
            )}
        </>
    );
};

export default ImageParagraph;
