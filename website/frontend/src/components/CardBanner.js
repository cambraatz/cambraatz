import React from 'react';
import LinkCard from './LinkCard';
import LAImage from '../assets/landscape_design_1.jpg';
import CSSnip from '../assets/CS.jpg';
import GardenDesign from '../assets/garden_design_1.jpg';
import Artwork from '../assets/a_basin.jpg';

const CardBanner = () => {
    return(
        <div className="CardBox">
            <LinkCard className="Card" image={CSSnip} title='Computer Science' />
            <LinkCard className="Card" image={LAImage} title='Landscape Design' />
            <LinkCard className="Card" image={Artwork} title='Art // Photography' />
            <LinkCard className="Card" image={GardenDesign} title='Hobbies' />
        </div>
    );
};

export default CardBanner;
