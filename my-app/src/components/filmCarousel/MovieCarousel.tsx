import React, { useEffect } from 'react';
import { FilmCarouselStyle } from './MovieCarousel.Style';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../shared/services/manager/index';
import { getPopularMovie } from '../../shared/services/manager/MovieReducer/PopularMovie.Action';
import ApiConfiguration from '../../shared/services/config/index';

SwiperCore.use([Pagination, Navigation]);

function MovieCarousel() {
    const movieSelector = useSelector((state: RootState) => state.popularMovie);
    const dispatch = useDispatch();
    const imageOrigin = new ApiConfiguration().imageOrigin;
    useEffect(() => {
        dispatch(getPopularMovie());
    }, [dispatch]);

    return (
        <FilmCarouselStyle>
            <Container>
                <Box>
                    <Box component="span" mb={1} className='title--overview'>Hiện đang thịnh hành</Box>
                    <Box className='FilmContainer'>
                        <Swiper
                            slidesPerView={5}
                            spaceBetween={35}
                            slidesPerGroup={5}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            navigation={true}
                            className="mySwiper">
                            {[...movieSelector.results].slice(0,5).map((value, index) => (
                                <SwiperSlide key={index}>
                                    <Box className='FilmContainer_slideFrame'>
                                        <Box className='FilmContainer_slideFrame_view'>
                                            <img src={imageOrigin + value.backdrop_path} alt="" />
                                        </Box>
                                    </Box>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Box>
                </Box>
            </Container>
            <br/>
            <Container>
                <Box>
                    <Box component="span" mb={1} className='title--overview'>Phim đặc sắc</Box>
                    <Box className='FilmContainer'>
                        <Swiper
                            slidesPerView={5}
                            spaceBetween={35}
                            slidesPerGroup={5}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            navigation={true}
                            className="mySwiper">
                            {[...movieSelector.results].slice(5,10).map((value, index) => (
                                <SwiperSlide key={index}>
                                    <Box className='FilmContainer_slideFrame'>
                                        <Box className='FilmContainer_slideFrame_view'>
                                            <img src={imageOrigin + value.backdrop_path} alt="" />
                                        </Box>
                                    </Box>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Box>
                </Box>
            </Container>
            <br/>
            <Container>
                <Box>
                    <Box component="span" mb={1} className='title--overview'>Phim hành động phưu lưu</Box>
                    <Box className='FilmContainer'>
                        <Swiper
                            slidesPerView={5}
                            spaceBetween={35}
                            slidesPerGroup={5}
                            loop={true}
                            loopFillGroupWithBlank={true}
                            navigation={true}
                            className="mySwiper">
                            {[...movieSelector.results].slice(10,15).map((value, index) => (
                                <SwiperSlide key={index}>
                                    <Box className='FilmContainer_slideFrame'>
                                        <Box className='FilmContainer_slideFrame_view'>
                                            <img src={imageOrigin + value.backdrop_path} alt="" />
                                        </Box>
                                    </Box>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </Box>
                </Box>
            </Container>
        </FilmCarouselStyle>
    );
}

export default MovieCarousel;