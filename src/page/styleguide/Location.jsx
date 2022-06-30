import React, { useState, useEffect, Component } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import $ from "jquery";

import { 
        Stack,
        Button,
        IconButton,
        } from "@mui/material";
        
import {
        ArrowUpward,
        ArrowDownward,
        } from "@mui/icons-material";

const theme = createTheme({
    palette: {
        primary: {
        main: '#eb3175',
        contrastText: '#fff',
        },
    },
});

class LocationPage extends Component {
        
    componentDidMount() {
        $(document).ready(function() {

            $(window).scroll(function() {
                // top button controll
                if ($(this).scrollTop() > 500) {
                    $('.topButton').fadeIn();
                    $('.bottomButton').fadeOut();
                } else {
                    $('.topButton').fadeOut();
                    $('.bottomButton').fadeIn();
                }
            });
        
            $(".topButton").click(function() {
                $('html, body').animate({scrollTop:0}, '300');
            });
            $(".bottomButton").click(function() {
                $('html, body').animate({scrollTop:1000}, '300');
            });
        });
    }
    render() {
    return (
    <ThemeProvider theme={theme}>
        <div className="big-div">
            <h1> 
                <Link to="/" > Location </Link>
            </h1>
        </div>
       
        <div 
            // className='styleguide-content' 
            style={{ padding:'50px 200px'}}
        >
            <h2 className='styleguide-h2'> Basic Location </h2>
            <Stack className='guideBox' spacing={2} direction='row' height='500px' justifyContent='center' alignItems='center'>
                <h3 style={{ color: '#999' }}> 스크롤용 여백입니다. </h3>
               <IconButton 
                    className='topButton'
                    style={{ position: 'fixed', backgroundColor:'#eb3175', bottom: '30px', right: '30px'}}>
                    <ArrowUpward style={{ color: 'white' }} />
               </IconButton>

               <IconButton 
                    className='bottomButton'
                    style={{ position: 'fixed', backgroundColor:'#eb3175', zIndex:'3', bottom: '30px', margin: '0 auto'}}>
                    <ArrowDownward style={{ color: 'white' }} />
               </IconButton>
            </Stack>
            <div className='codemirror' >
                <CodeMirror
                    value={`componentDidMount() {
    $(document).ready(function() {

        $(window).scroll(function() {
            // top button controll
            if ($(this).scrollTop() > 500) {
                $('.topButton').fadeIn();
                $('.bottomButton').fadeOut();
            } else {
                $('.topButton').fadeOut();
                $('.bottomButton').fadeIn();
            }
        });
    
        $(".topButton").click(function() {
            $('html, body').animate({scrollTop:0}, '300');
        });
        $(".bottomButton").click(function() {
            $('html, body').animate({scrollTop:1000}, '300');
        });
    });
}`}    
                    theme='dark'
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                        console.log('value:', value);
                    }}
                />
            </div>
            
            <br/><br/><br/><br/><br/>
            
            
        </div>
    </ThemeProvider>
    );
    }
};

export default LocationPage;