import React, { useState, useEffect, useRef } from 'react';

interface ImageProps {
    imageSrc: string;
    altText?: string;
    padding?: boolean;
    containerClasses?: string;
    imageClasses?: string;
    shadowRounded?: boolean;
    slideDirection?: 'left' | 'right' | 'bottom' | 'fade';
}

const Image: React.FC<ImageProps> = ({ imageSrc, altText, containerClasses = '', imageClasses = '', slideDirection = 'right', padding = false, shadowRounded = false }) => {
    const [isVisible, setIsVisible] = useState(false);
    const imgRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (imgRef.current) {
                const rect = imgRef.current.getBoundingClientRect();
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
    const paddingClass = padding ? 'container-padding-bottom' : '';
    const shadowRoundedClass = shadowRounded ? 'image-rounded-shadow' : '';

    return (
        <div className={`${containerClasses} ${paddingClass} ${animationClass}`}>
            <img
                ref={imgRef}
                src={imageSrc}
                alt={altText}
                className={`${shadowRoundedClass} ${imageClasses}`}
            />
        </div>
    );
};

export default Image;
