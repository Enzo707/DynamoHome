import React from 'react';
import { img } from '../../assets/home.js';
import { openFile } from '../../functions/utility';
import { CardItem } from '../Common/CardItem';

export function GraphGridItem({ id, Caption, ContextData, Description, DateModified, Thumbnail, setIsDisabled }) {
    const handleClick = (e) => {
        // freezes the UI 
        setIsDisabled(true);

        e.preventDefault();
        openFile(ContextData);
    };

    return (
        <CardItem 
            imageSrc={Thumbnail || img} 
            onClick={handleClick} 
            tooltipContent={Description} 
            titleText={Caption} 
            subtitleText={DateModified} 
        />
    );
}