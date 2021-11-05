import { styled } from '@mui/material';
import { color } from '../../assets/style/AppStyle';
import backgroundImage from '../../assets/image/movie-background.jpg';
export const  MovieSliderStyle = styled('section')(({ theme }) => ({
    background: `url(${backgroundImage})`,
    paddingTop:"180px",
    paddingBottom:"180px",
    '& .MovieSlide':{
        lineHeight:4,
        overflow:"hidden",
        '& .xsColumn--reserve':{
            [theme.breakpoints.down("sm")]:{
                flexDirection:"column-reverse",
            }
        },
        '& .MovieSlide_contentFrame':{
            '& .MovieSlide_contentFrame_categoryLabel':{
                '& .MovieSlide_contentFrame_categoryLabel_label':{
                    fontSize:'10px',
                    fontWeight:700,
                    padding:"4px",
                    borderBottomRightRadius:"5px",
                    borderTopLeftRadius:"5px",
                    marginRight:"4px",
                },
            },
            '& .MovieSlide_contentFrame_movieName':{
                '& p':{
                    fontFamily: "'Dosis', sans-serif",
                    textTransform:"uppercase",
                    fontSize: "3.2rem",
                    fontWeight: "700",
                    lineHeight: 1,
                    paddingRight: "120px",
                    [theme.breakpoints.down("md")]:{
                        paddingRight: "0",
                        fontSize: "2rem",
                    },
                    '& span':{
                        color: "#abb7c4",
                        fontSize: "36px",
                        fontWeight: "400",
                    },
                },
            },
            '& .MovieSlide_contentFrame_socialButton':{
                display:"flex",
                justifyContent:"space-between",
                paddingRight:"120px",
                flexWrap: "wrap",
                [theme.breakpoints.down("md")]:{
                    paddingRight: "0",
                },
                '& .MovieSlide_contentFrame_socialButton_btn':{
                    display:"flex",
                    alignItems:'center',
                    cursor:"pointer",
                    '& .item--icon':{
                        marginRight:"12px",
                        padding: "4px",
                        borderRadius:"100px",
                        display:"flex",
                        border: `solid 1px ${color.red}`,
                        color: color.red,
                    },
                    '& .item--content':{
                        color: color.red,
                        fontSize: "12px",
                        fontWeight: "700",
                        textTransform:"uppercase",
                        [theme.breakpoints.down("md")]:{
                            fontSize: "10px",
                        },
                    },
                },
            },
            '& .MovieSlide_contentFrame_detailFrame':{
                position:"relative",
                cursor:"pointer",
                height:"40px",
                width:'130px',
                display:"inline-block",
                '& .MovieSlide_contentFrame_detailFrame_btn':{
                    position:'absolute',
                    width:"130px",
                    borderRadius:"100px",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    transition:"ease-in-out 0.5s",
                    '& a':{
                        textDecoration:"none",
                        fontSize:"12px",
                        fontWeight:"700",
                        textTransform:"uppercase",
                        [theme.breakpoints.down("md")]:{
                            fontSize: "10px",
                        },
                    },
                },
                '& .MovieSlide_contentFrame_detailFrame_btn:first-of-type':{
                    transform:"rotateX(-180deg)",
                }
            },
            '& .MovieSlide_contentFrame_detailFrame:hover .MovieSlide_contentFrame_detailFrame_btn:last-child':{
                transform:"rotateX(90deg)",
            },
            '& .MovieSlide_contentFrame_detailFrame:hover .MovieSlide_contentFrame_detailFrame_btn:first-of-type':{
                transform:"rotateX(0deg)",
            },
        },
        '& .movie_imageFrame':{
            height:'400px',
            textAlign:"center",
            [theme.breakpoints.down("md")]:{
                width:"100%",
                padding:"0",
            },
            'img':{
                height:"100%",
            }
        }
    },
    ...addtionalClasses
}));

var addtionalClasses = {
    '.MovieSlide_contentFrame_categoryLabel_label:nth-of-type(1)':{
        background: color.lightBlue,
    },
    '.MovieSlide_contentFrame_categoryLabel_label:nth-of-type(2)':{
        background: color.lightOrange,
    },
    '.MovieSlide_contentFrame_categoryLabel_label:nth-of-type(3)':{
        background: color.lightBrown,
    },
    '.MovieSlide_contentFrame_categoryLabel_label:nth-of-type(4)':{
        background: color.lightGreen,
    },
    '.font--white':{
        color: `${color.white}!important`,
    },
    '.font--yellow':{
        color: `${color.yellow}!important`,
    },
    '.background--red':{
        background: color.red,
    },
    '.background--black':{
        background: color.black,
    },
    '.categoryItem':{
        transform: "translateX(-100px)"
    }
}