import React from 'react';

interface BackgroundImageProps {
    imageSrc: string;
    altText?: string;
    padding?: boolean;
    classes?: string;
}

const BackgroundImage: React.FC<BackgroundImageProps> = ({ imageSrc, altText, classes = '', padding = false }) => {
    const paddingClass = padding ? 'container-padding-bottom' : '';

    return (
        <div className={`${classes} ${paddingClass}`}>
            <div
                style={{ backgroundImage: `url(${imageSrc})` }}
                className={`bg-cover bg-center ${classes}`}
                role="img"
                aria-label={altText}
            ></div>
        </div>
    );
};

export default BackgroundImage;
