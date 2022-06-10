import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Slide from './Slide';
import { setSlides } from '../redux/action/sliderAction';
import { useFetching } from '../hooks/useFetching';
import SliderService from '../API/SliderService';
import Loader from './UI/Loader/Loader';

export default function Slider() {
    const dispatch = useDispatch();
    const [slides, IsSliderLoading, sliderError] = useFetching(async () => {
        const response = await SliderService.fetchSlider();
        console.log(sliderError);
        return dispatch(setSlides(response.data))
    })

    useEffect(() => {
        return () => {
            slides();
        };
    }, []);

    return (
        <div className='slider'>
            {IsSliderLoading
                ? <Loader />
                : <Slide />
            }
        </div >
    )
}
