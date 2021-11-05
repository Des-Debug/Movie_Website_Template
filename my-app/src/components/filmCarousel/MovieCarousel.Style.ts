import { styled } from '@mui/material';
import { color, alignSize } from '../../assets/style/AppStyle';

export const  FilmCarouselStyle = styled('section')(({ theme }) => ({
    background:"#141414",
    padding:"24px 0",
    fontFamily: "'Dosis', sans-serif",
    '& .FilmContainer':{
        '& .FilmContainer_slideFrame':{
            cursor: "pointer",
            '& .FilmContainer_slideFrame_view':{
                width:"230px",
                height:"130px",
                '& img':{
                    width:"100%",
                    height:"100%",
                    borderRadius:"5px",
                },
            },
            '& .FilmContainer_slideFrame_content':{
                '& .title, .releaseDate':{
                    color: color.white,
                },  
                '& .title':{
                    color: color.white,
                },  
                '& .CountAverage':{
                    color: color.lightGreen,
                }
            },
        },
    },
    ...additionalClasses
}));

var additionalClasses = {
    '.title--overview':{
        display:"inline-block",
        padding: `${alignSize.padding} 0px`,
        color: "#ffffff",
        fontSize: "18px",
        fontWeight: "700",
        cursor:"pointer",
        transition: "0.25s ease-in-out"
    },
    '.title--overview:hover':{
        color: color.yellow,
    },
    '.swiper-button-prev':{
        left:"0",
    },
    '.swiper-button-next':{
        right:"0",
    },
    '.swiper-button-next, .swiper-button-prev':{
        width:"auto",
        height:"auto",
        top:"0%",
        margin:"0",
        padding:"0 14px",
        background:"rgb(0 0 0 / 37%)",
    },
    '.swiper-button-next:after, .swiper-button-prev:after':{
        color: '#ffffff',
        fontSize: "1.5rem",
        fontWeight:"600",
    },
}