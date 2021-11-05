import React, { useRef, useState } from 'react';
import Container from '@mui/material/Container';
import { MovieHeaderStyle } from './MovieHeader.Style';
import logo from '../../../assets/image/movie-logo.png';
import { NavLink } from 'react-router-dom';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';
import { animate } from 'motion';

function MovieHeader(): JSX.Element {
    const [clickMobileBtn, setClickMobileBtn] = useState(false);
    const movieFrameMenu = useRef<HTMLDivElement>(null!);

    function mobileButtonEvent(event: React.MouseEvent): void{
        !clickMobileBtn ?  setTranslateCssForChild(-12, -12) : setTranslateCssForChild(12, 12);

        function setTranslateCssForChild(first: number, last: number): void{
            animate(event.currentTarget.firstChild as Element,{ transform: [`translateY(${first}px)`] });
            animate(event.currentTarget.lastChild as Element,{ transform: [`translateY(${last}px)`] });
            !clickMobileBtn 
            ? animate(movieFrameMenu.current as Element, { height: [`100vh`] })
            : animate(movieFrameMenu.current as Element, { height: [`0`] });
            setClickMobileBtn(!clickMobileBtn);
        }
    }

    return (
        <MovieHeaderStyle>
            <Container>
                <div className='movieFrame'>
                    <div className='movieFrame_imageFrame'>
                        <img src={logo} className='movieFrame_imageFrame_image' alt="movie-Logo" />
                    </div>
                    <div className='movieFrame_menu' ref={ movieFrameMenu }>
                        <List className='movieFrame_menu_navList'>
                            <ListItem 
                            className='movieFrame_menu_nav_navLink linkColor--hover--yellow' disablePadding={true}>
                                <NavLink className="movieFrame_menu_nav_navLink_link fontColor--gray" to="/">Home</NavLink>
                            </ListItem>
                            <ListItem className='movieFrame_menu_nav_navLink linkColor--hover--yellow' disablePadding={true}>
                                <NavLink className="movieFrame_menu_nav_navLink_link fontColor--gray" to="/popular">Popular</NavLink>
                            </ListItem>
                            <ListItem className='movieFrame_menu_nav_navLink linkColor--hover--yellow' disablePadding={true}>
                                <NavLink className="movieFrame_menu_nav_navLink_link fontColor--gray" to="/toprated">Top rated</NavLink>
                            </ListItem>
                            <ListItem className='movieFrame_menu_nav_navLink linkColor--hover--yellow' disablePadding={true}>
                                <NavLink className="movieFrame_menu_nav_navLink_link fontColor--gray" to="/upcoming">Up coming</NavLink>
                            </ListItem>
                        </List>
                    </div>
                    <div className='movieFrame_mobileBtn' onClick={(event: React.MouseEvent) => mobileButtonEvent(event)}>
                        <DehazeIcon className='movieFrame_mobileBtn_dehazeIcon fontColor--gray'></DehazeIcon>
                        <CloseIcon className='movieFrame_mobileBtn_closeIcon fontColor--gray'></CloseIcon>
                    </div>
                </div>
            </Container>
        </MovieHeaderStyle>
    );
}

export default MovieHeader;