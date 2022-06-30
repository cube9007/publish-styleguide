import * as React from 'react';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { Box, 
         Divider,
        } from "@mui/material";
import { ArrowBackIosNew,
         ArrowForwardIos,
        } from "@mui/icons-material";


const theme = createTheme({
        palette: {
                primary: {
                main: '#eb3175',
                contrastText: '#fff',
                },
        },
        });

function BtnSlideBaanner() {

        return (
        <ThemeProvider theme={theme}>
                <div className="btnslide">
                        <input type='radio' name='bannerbuttonarrow' id='bannerbutton1' className="bannerbutton-arrow1" defaultChecked/>
                        <input type='radio' name='bannerbuttonarrow' id='bannerbutton2' className="bannerbutton-arrow2" />
                        <input type='radio' name='bannerbuttonarrow' id='bannerbutton3' className="bannerbutton-arrow3" />
                        <input type='radio' name='bannerbuttonarrow' id='bannerbutton4' className="bannerbutton-arrow4" />
                        <div className="btnslide-image">
                                <ul>
                                        <li>
                                                <div>
                                                        <strong> 수동 슬라이드 배너</strong>
                                                        <p>넥스트리 스타일 가이드의 수동 스타일 배너입니다.</p>
                                                </div>
                                        </li>
                                        <li>
                                                <div>
                                                        <strong> 수동 슬라이드 배너</strong>
                                                        <p>넥스트리 스타일 가이드의 수동 스타일 배너입니다.</p>
                                                </div>
                                        </li>
                                        <li>
                                                <div>
                                                        <strong> 수동 슬라이드 배너</strong>
                                                        <p>넥스트리 스타일 가이드의 수동 스타일 배너입니다.</p>
                                                </div>
                                        </li>
                                        <li>
                                                <div>
                                                        <strong> 수동 슬라이드 배너</strong>
                                                        <p>넥스트리 스타일 가이드의 수동 스타일 배너입니다.</p>
                                                </div>
                                        </li>
                                </ul>
                        </div>
                        <div className="btnslide-contents">
                                <strong className="btnslide-contents-strong"> 
                                        <Link to="/" >    
                                                <strong className="btnslide-contents-strong-nextree"> <p>N</p>EXTREE </strong>
                                                <p className="btnslide-contents-strong-p"> UI UX <br/> Style Guide </p>
                                        </Link>
                                </strong>
                                <div className="bannerbutton">
                                        <div className="bannerbutton-rightbutton">
                                                <label for='bannerbutton4'>
                                                        <ArrowBackIosNew style={{ fontSize: '40px'}}/>
                                                </label>
                                                <label for='bannerbutton1'>
                                                        <ArrowBackIosNew style={{ fontSize: '40px'}}/>
                                                </label>
                                                <label for='bannerbutton2'>
                                                        <ArrowBackIosNew style={{ fontSize: '40px'}}/>
                                                </label>
                                                <label for='bannerbutton3'>
                                                        <ArrowBackIosNew style={{ fontSize: '40px'}}/>
                                                </label>
                                        </div>
                                        <div className="bannerbutton-bottomcircle">
                                                <ul>
                                                        <label for='bannerbutton1'> <li></li> </label>
                                                        <label for='bannerbutton2'> <li></li> </label>
                                                        <label for='bannerbutton3'> <li></li> </label>
                                                        <label for='bannerbutton4'> <li></li> </label>
                                                </ul>
                                               
                                        </div>
                                        <div className="bannerbutton-leftbutton">
                                                <label for='bannerbutton2' >
                                                        <ArrowForwardIos style={{ fontSize: '40px'}}/>
                                                </label>
                                                <label for='bannerbutton3' >
                                                        <ArrowForwardIos style={{ fontSize: '40px'}}/>
                                                </label>
                                                <label for='bannerbutton4' >
                                                        <ArrowForwardIos style={{ fontSize: '40px'}}/>
                                                </label>
                                                <label for='bannerbutton1' >
                                                        <ArrowForwardIos style={{ fontSize: '40px'}}/>
                                                </label>
                                        </div>
                                </div>
                        </div>
                </div>
                <Box className="contents-area">
                        <div className="common-box">
                                <h3> Contents Box </h3>
                                <Box className='common-box2' height='300px'>
                                <Box display='flex' flexGrow='1' justifyContent='center' alignItems='center'>
                                <div className='common-div'>
                                <h1> Image </h1>
                                </div>
                                </Box>
                                <Divider orientation='vertical' flexItem/>
                                <Box display='flex' flexGrow='2' justifyContent='center' alignItems='center'> 
                                <h1> 수동 슬라이드 배너입니다.</h1>
                                </Box>
                                </Box>
                        </div>
                        <div className="common-box">
                                <h3> Contents Box </h3>
                                <Box className='common-box2' height='300px'>
                                <Box display='flex' flexGrow='1' justifyContent='center' alignItems='center'>
                                <div className='common-div'>
                                <h1> Image </h1>
                                </div>
                                </Box>
                                <Divider orientation='vertical' flexItem/>
                                <Box display='flex' flexGrow='2' justifyContent='center' alignItems='center'> 
                                <h1> 수동 슬라이드 배너입니다.</h1>
                                </Box>
                                </Box>
                        </div>
                        </Box>
        </ThemeProvider>
    );
  };
  
  export default BtnSlideBaanner;