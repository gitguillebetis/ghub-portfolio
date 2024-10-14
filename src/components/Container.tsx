import React from 'react';

interface ContainerProps {
    layout: 'width-full' | 'width-3xl' | 'width-2xl' | 'width-xl';
    background?: 'darker' | 'lighter';
    padding?: boolean;
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ layout, background, padding = false, children }) => {
    const getContainerClasses = () => {
        const widthClasses = {
            'width-full': 'w-full',
            'width-3xl': 'relative isolate max-w-screen-3xl mx-auto',
            'width-2xl': 'relative isolate max-w-screen-2xl mx-auto',
            'width-xl': 'relative isolate max-w-screen-xl mx-auto'
        }[layout] || '';

        const paddingClass = padding ? 'container-padding' : '';
        return `${widthClasses} ${paddingClass} text-white`.trim();
    };

    const backgroundClasses = background 
    ? `container-padding-background ${background === 'darker' ? 'bg-black/20' : 'bg-white/10'}`
    : '';

    return (
        <div className={backgroundClasses}>
            <div className={getContainerClasses()}>{children}</div>
        </div>
    );
};

export default Container;
