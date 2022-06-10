import defaultCat from '../images/default-cat.jpg';
import React from 'react'
import { useSelector } from 'react-redux';
import SliderSlick from "react-slick";



export default function Slide() {
    const slider = useSelector((state) => state.allSlides.slider);

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    const renderSlide = slider.map((slide) => {
        const { id, image, name, description } = slide;


        return (
            <div className='slide' key={id}>

                <div className='slide__image'>
                    <img src={image?.url !== undefined ? slide.image.url : defaultCat} alt={name} />
                </div>
                <div className="slide__info slide-info">
                    <div className="slide-info__name">{name}</div>
                    <div className="slide-info__description">{description}</div>
                </div>
            </div>

        )
    })

    return (
        <SliderSlick {...settings}>
            {renderSlide}
        </SliderSlick>
    );
}
