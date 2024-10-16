import React from 'react';

interface ContainerProps {
    layout: 'width-full' | 'width-3xl' | 'width-2xl' | 'width-xl' | 'width-lg';
    background?: 'darker' | 'lighter';
    padding?: boolean;
    classes?: string;
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ layout, background, classes, padding = false, children }) => {
    const getContainerClasses = () => {
        const widthClasses = {
            'width-full': 'w-full',
            'width-3xl': 'relative isolate container-padding-gutters mx-auto max-w-screen-3xl',
            'width-2xl': 'relative isolate container-padding-gutters mx-auto max-w-screen-2xl',
            'width-xl': 'relative isolate container-padding-gutters mx-auto max-w-screen-xl',
            'width-lg': 'relative isolate container-padding-gutters mx-auto max-w-screen-lg'
        }[layout] || '';

        const paddingClass = padding ? 'container-padding-bottom' : '';
        return `${widthClasses} ${paddingClass} ${classes || ''} text-white`.trim();
    };

    const backgroundClasses = background 
    ? `container-padding-top-large ${background === 'darker' ? 'bg-black/20' : 'bg-white/10'}`
    : '';

    return (
        <div className={`cnt-cmp overflow-hidden ${backgroundClasses}`}>
            <div className={getContainerClasses()}>{children}</div>
        </div>
    );
};

export default Container;
