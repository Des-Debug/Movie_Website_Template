import React, { useEffect } from 'react';
import { MovieSliderStyle } from './MovieSlider.Style';
import Container from '@mui/material/Container';
import { Swiper, SwiperSlide } from 'swiper/react';
import Grid from '@mui/material/Grid';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Box from '@mui/material/Box';
import Boster from '../../assets/image/poster1.jpg';
import { animate, stagger } from 'motion';
import 'swiper/swiper.min.css';
function MovieSlider(): JSX.Element {
    
    useEffect(()=>{
        styleAnimationForSlider();
    },[]);

    function styleAnimationForSlider(){
        const categoryItem: NodeListOf<Element> = document.querySelectorAll(".categoryItem");
        const movieimageFrame = document.querySelectorAll(".movie_imageFrame");
        animate(categoryItem, { x: [-670, 0] },
            {
                delay: stagger(0.1),
                duration: 1.2,
                easing: [.35, .03, .46, 2]
            }
            );
        animate(movieimageFrame, 
            { 
                scale: [0, 0.2, 0.4, 0.6, 1],
                opacity:[0, 0.2, 0.4, 0.6, 1],
                rotate: [ 180, 0] }, 
            { 
                duration: 0.8,
                easing: "ease-in-out",
            });
    }

    function slideChangeEvent(){
        styleAnimationForSlider();
    }
    
    return (
        <MovieSliderStyle>
            <Container>
                <Swiper onSlideChange={ () => slideChangeEvent() }>
                    <SwiperSlide>
                        <div className='MovieSlide'>
                            <Grid container className='xsColumn--reserve'>
                                <Grid item md={7} sm={6} xs={12}>
                                    <div className='MovieSlide_contentFrame'>
                                        <Box className='MovieSlide_contentFrame_categoryLabel categoryItem'>
                                            <span className='MovieSlide_contentFrame_categoryLabel_label font--white'>SCI-FI</span>
                                            <span className='MovieSlide_contentFrame_categoryLabel_label font--white'>Action</span>
                                            <span className='MovieSlide_contentFrame_categoryLabel_label font--white'>Advanture</span>
                                        </Box>
                                        <Box className='MovieSlide_contentFrame_movieName categoryItem font--white'>
                                            <p>guardians of the galaxy <span>2015</span> </p>
                                        </Box>
                                        <Box mt={1} className='MovieSlide_contentFrame_socialButton categoryItem'>
                                            <div className='MovieSlide_contentFrame_socialButton_btn'>
                                                <span className='item--icon'>
                                                    <PlayArrowIcon fontSize="small"></PlayArrowIcon>
                                                </span>
                                                <span className='item--content'>Watch Trailer</span>
                                            </div>
                                            <div className='MovieSlide_contentFrame_socialButton_btn'>
                                                <span className='item--icon'>
                                                    <FavoriteIcon fontSize="small"></FavoriteIcon>
                                                </span>
                                                <span className='item--content'>Add to Favorite</span>
                                            </div>
                                            <div className='MovieSlide_contentFrame_socialButton_btn'>
                                                <span className='item--icon'>
                                                    <ShareIcon fontSize="small"></ShareIcon>
                                                </span>
                                                <span className='item--content'>share</span>
                                            </div>
                                        </Box>
                                        <Box mt={3} className='MovieSlide_contentFrame_detailFrame categoryItem'>
                                            <div className='MovieSlide_contentFrame_detailFrame_btn background--black'>
                                                <a href="/" className='font--yellow'>More detail</a>
                                            </div>
                                            <div className='MovieSlide_contentFrame_detailFrame_btn background--red'>
                                                <a href="/" className='font--white'>More detail</a>
                                            </div>
                                        </Box>
                                    </div>
                                </Grid>
                                <Grid item md={5} sm={6} xs={12} style={{color:'yellow'}}>
                                    <Box px={1} className='movie_imageFrame'>
                                        <img src={Boster} alt="" />
                                    </Box>
                                </Grid>
                            </Grid>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='MovieSlide'>
                            <Grid container>
                                <Grid item xs={7} md={6}>
                                    <div className='MovieSlide_contentFrame'>
                                        <Box className='MovieSlide_contentFrame_categoryLabel categoryItem'>
                                            <span className='MovieSlide_contentFrame_categoryLabel_label font--white'>SCI-FI</span>
                                            <span className='MovieSlide_contentFrame_categoryLabel_label font--white'>Action</span>
                                            <span className='MovieSlide_contentFrame_categoryLabel_label font--white'>Advanture</span>
                                        </Box>
                                        <Box className='MovieSlide_contentFrame_movieName categoryItem font--white'>
                                            <p>guardians of the galaxy <span>2015</span> </p>
                                        </Box>
                                        <Box mt={1} className='MovieSlide_contentFrame_socialButton categoryItem'>
                                            <div className='MovieSlide_contentFrame_socialButton_btn'>
                                                <span className='item--icon'>
                                                    <PlayArrowIcon fontSize="small"></PlayArrowIcon>
                                                </span>
                                                <span className='item--content'>Watch Trailer</span>
                                            </div>
                                            <div className='MovieSlide_contentFrame_socialButton_btn'>
                                                <span className='item--icon'>
                                                    <FavoriteIcon fontSize="small"></FavoriteIcon>
                                                </span>
                                                <span className='item--content'>Add to Favorite</span>
                                            </div>
                                            <div className='MovieSlide_contentFrame_socialButton_btn'>
                                                <span className='item--icon'>
                                                    <ShareIcon fontSize="small"></ShareIcon>
                                                </span>
                                                <span className='item--content'>share</span>
                                            </div>
                                        </Box>
                                        <Box mt={3} className='MovieSlide_contentFrame_detailFrame categoryItem'>
                                            <div className='MovieSlide_contentFrame_detailFrame_btn background--black'>
                                                <a href="/" className='font--yellow'>More detail</a>
                                            </div>
                                            <div className='MovieSlide_contentFrame_detailFrame_btn background--red'>
                                                <a href="/" className='font--white'>More detail</a>
                                            </div>
                                        </Box>
                                    </div>
                                </Grid>
                                <Grid item xs={5} md={6} style={{color:'yellow'}}>
                                    <Box px={6} className='movie_imageFrame'>
                                        <img src={Boster} alt="" />
                                    </Box>
                                </Grid>
                            </Grid>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </Container>
        </MovieSliderStyle>
    );
}

export default MovieSlider;