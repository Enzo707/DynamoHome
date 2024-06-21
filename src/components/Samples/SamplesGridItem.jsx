import React from 'react';
import { img } from '../../assets/home';
import { openFile } from '../../functions/utility';
import { CardItem } from '../Common/CardItem';

export function SamplesGridItem({ FileName, FilePath }) {
    const handleClick = (e) => {
        e.preventDefault();
        openFile(FilePath);
    };

    return (
        <CardItem 
            imageSrc={img} 
            onClick={handleClick} 
            tooltipContent={FilePath} 
            titleText={FileName} 
            subtitleText={FilePath} 
        />
    );
}