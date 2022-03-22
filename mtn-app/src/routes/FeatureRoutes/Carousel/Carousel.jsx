import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import ArrowBackIosOutlined from '@material-ui/icons/ArrowBackIosOutlined';
import ArrowForwardIosOutlined from '@material-ui/icons/ArrowForwardIosOutlined';
import React, { useRef } from 'react';
import Swiper from 'react-id-swiper';
import styled from 'styled-components';

const Carousel = () => {
  const ref = useRef(null);
  const params = {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      centeredSlides: true,
      clickable: true, 
      slidesPerView: 'auto',
      WrapperEl: 'Grid'
    },
    spaceBetween: 30
  }

  // method for slide to go to the next view
  const goNext = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.slideNext();
    }
  };

  // method for slide to go to the previous view
  const goPrev = () => {
    if (ref.current !== null && ref.current.swiper !== null) {
      ref.current.swiper.slidePrev();
    }
  };

  // custom menu item created
  const StyledMenuItem = styled(MenuItem)`
    background-color: #000000;    
    padding-left: 7px;
    padding-right: 7px;
    border-radius: 100%;
    height: 36px;
    width: 36px;
  `;

  return (
    <Grid item md={12} container alignItems="center" justifyContent="center" direction="row" item>
      <Grid md={9} alignItems="center" container justifyContent="center">
      <Swiper ref={ref} {...params}>
        <div>
          <Grid md={1}>Slide 1</Grid>
        </div>
        <div>
          <Grid md={1}>Slide 2</Grid>
        </div>
        <div>
          <Grid md={1}>Slide 3</Grid>
        </div>
        <div>
          <Grid md={1}>Slide 4</Grid>
        </div>
        <div>
          <Grid md={1}>Slide 5</Grid>
        </div>
      </Swiper>
      <StyledMenuItem className="arrowButton" onClick={goPrev}>
        <ArrowBackIosOutlined style={{fontSize: '18px'}} color="primary" />
      </StyledMenuItem>
      <StyledMenuItem className="arrowButton" onClick={goNext}>
        <ArrowForwardIosOutlined style={{fontSize: '18px'}} color="primary" />
      </StyledMenuItem>
      </Grid>
    </Grid>
  );
};

export default Carousel;