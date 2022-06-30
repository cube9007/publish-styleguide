import * as React from 'react';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { Box, 
         Button,
         Divider,
         OutlinedInput,
         Checkbox
        } from "@mui/material";
import {
        } from "@mui/icons-material";


const theme = createTheme({
        palette: {
                primary: {
                main: '#eb3175',
                contrastText: '#fff',
                },
        },
        });

function SlideBaanner() {

        return (
        <ThemeProvider theme={theme}>
                <div className="bannerslide">
                        <div className="bannerslide-image">
                                <ul>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                        <li></li>
                                </ul>
                        </div>
                        <div className="bannerslide-contents">
                                <strong className="bannerslide-contents-strong"> 
                                        <Link to="/" >    
                                                <strong className="bannerslide-contents-strong-nextree"> <p>N</p>EXTREE </strong>
                                                <p className="bannerslide-contents-strong-p"> UI UX <br/> Style Guide </p>
                                        </Link>
                                </strong>
                                <div className="bannerslide-contents-box">
                                        <div className ="bannerslide-contents-box-desc"> 
                                                <strong> 자동 슬라이드 배너 </strong>
                                                <p> 자동 슬라이드 배너로 편리하게 홈페이지 디자인하세요! </p>
                                        </div>
                                        <div className="bannerslide-contents-box-login">
                                                <p>
                                                       <strong> <b>단체회원</b> 로그인 </strong>
                                                </p>
                                                <p>
                                                        <OutlinedInput className="bannerslide-contents-box-login-field" placeholder="ID" />
                                                        <OutlinedInput className="bannerslide-contents-box-login-field" placeholder="PWD" />
                                                </p>
                                                <p className="bannerslide-contents-box-login-check">
                                                        <Checkbox /> 자동로그인
                                                </p>
                                                <p>
                                                        <Button variant="contained" disableElevation size="large" className="banner-contents-box-login-button"> <p> 로그인 </p></Button>
                                                </p>
                                                <p>
                                                        <div>
                                                                <a href=''> 아이디 찾기 </a>
                                                                <a href=''> 비밀번호 찾기 </a>
                                                        </div>
                                                        <a href=''> 회원가입 </a>
                                                </p>

                                        </div>
                                </div>
                        </div>
                        <div>
                                <div className="bannerslide-progress"> </div>
                                <div className="bannerslide-progress-line"></div>
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
                                <h1> 자동 슬라이드 배너입니다.</h1>
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
                                <h1> 자동 슬라이드 배너입니다.</h1>
                                </Box>
                                </Box>
                        </div>
                        </Box>
        </ThemeProvider>
    );
  };
  
  export default SlideBaanner;