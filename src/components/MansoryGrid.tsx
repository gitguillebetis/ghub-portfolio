

import React from 'react';

interface MasonryGridProps {
    images: string[];
}

const MasonryGrid: React.FC<MasonryGridProps> = ({ images }) => {

    const columns: string[][] = [[], [], [], []];

    images.forEach((img, index) => {
        columns[index % 4].push(img);
    });

    return (
        <div className="grid grid-cols-4 gap-4 w-full h-full">
            <div className="column-1 space-y-4 mt-[250px]">
                {columns[0].map((src, index) => (
                    <div key={`col1-${index}`} className="overflow-hidden rounded-lg shadow-lg">
                        <img src={src} alt={`Image ${index + 1}`} className="w-full h-auto object-cover" />
                    </div>
                ))}
            </div>

            <div className="column-2 space-y-4 mt-[50px]">
                {columns[1].map((src, index) => (
                    <div key={`col2-${index}`} className="overflow-hidden rounded-lg shadow-lg">
                        <img src={src} alt={`Image ${index + 1}`} className="w-full h-auto object-cover" />
                    </div>
                ))}
            </div>

            <div className="column-3 space-y-4 mt-[140px]">
                {columns[2].map((src, index) => (
                    <div key={`col3-${index}`} className="overflow-hidden rounded-lg shadow-lg">
                        <img src={src} alt={`Image ${index + 1}`} className="w-full h-auto object-cover" />
                    </div>
                ))}
            </div>

            <div className="column-4 space-y-4">
                {columns[3].map((src, index) => (
                    <div key={`col4-${index}`} className="overflow-hidden rounded-lg shadow-lg">
                        <img src={src} alt={`Image ${index + 1}`} className="w-full h-auto object-cover" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MasonryGrid;