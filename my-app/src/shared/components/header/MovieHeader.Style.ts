import { styled } from '@mui/material';
import { fontStyle, alignSize, color } from '../../../assets/style/AppStyle';

export const  MovieHeaderStyle = styled('header')(({ theme }) => ({
    background: color.lightBlack,
    display: "flex",
    alignItems: "center",
    position: "fixed",
    height: '76px',
    zIndex: 1000,
    '& .movieFrame':{
        display:"flex",
        alignItems:"center",
        height:"100%",
        justifyContent: 'space-between',
        [theme.breakpoints.down("sm")]:{
            position:"relative",
        },
        '& .movieFrame_imageFrame':{
            width:"100px",
            height:'50px',
            cursor:"pointer",
            '& .movieFrame_imageFrame_image':{
                width:"100%",
                height:"100%",
            },
        },
        '& .movieFrame_menu':{
            flex:"1",
            margin:"0px 48px",
            [theme.breakpoints.down("sm")]:{
                margin:"0px 0px",
                position:"fixed",
                top:"63px",
                background: color.lightBlack,
                height:"0vh",
                overflow:"hidden",
            },
            '& .movieFrame_menu_navList':{
                '& .movieFrame_menu_nav_navLink':{
                    display:"inline",
                    padding: alignSize.padding,
                    marginLeft: alignSize.margin,
                    marginRight: alignSize.margin,
                    [theme.breakpoints.down("sm")]:{
                        display: "block",    
                        margin: `${alignSize.margin} 0px`,
                    },
                    '& .movieFrame_menu_nav_navLink_link':{
                        textDecoration:"none",
                        fontSize: fontStyle.size.website,
                        fontWeight: fontStyle.weight,
                        transition:"ease-in-out 0.35s",
                    }
                }
            }
        },
        '& .movieFrame_mobileBtn':{
            posision:"relative",
            display:"none",
            cursor:"pointer",
            width:"35px",
            height:"35px",
            border:"solid 1px white",
            borderRadius:'5px',
            overflow:"hidden",
            [theme.breakpoints.down("sm")]:{
                display:"flex",
                alignItems:'center',
                justifyContent:"center",
                flexDirection:"column",
            },
            '& .movieFrame_mobileBtn_dehazeIcon':{
                transform: "translate(0px, 12px)",
            },
            '& .movieFrame_mobileBtn_closeIcon':{
                transform: "translate(0px, 12px)",
            },
        },
    },
    ...additionalClass
}));

var additionalClass: Object = {
    '.fontColor--gray':{
        color: `${ color.lightGray } !important`,
    },
    '.linkColor--hover--yellow:hover a':{
        color: `${ color.yellow } !important`,
    },
}