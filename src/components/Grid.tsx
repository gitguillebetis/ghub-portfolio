import React from 'react';

interface GridProps {
    layout: '2column' | '1column';
    classes?: string;
    padding?: boolean;
    children: React.ReactNode;
}

const Grid: React.FC<GridProps> = ({ layout, padding = false, classes = '', children }) => {
    const baseClasses = `grid container-padding-gutters ${padding ? 'container-padding-bottom' : ''} ${classes}`.trim();
    const layoutClasses = {
        '2column': 'grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-14 xl:gap-20',
        '1column': ''
    }[layout];

    return (
        <div className={`${baseClasses} ${layoutClasses} justify-items-center`.trim()}>
            {children}
        </div>
    );
};

export default Grid;