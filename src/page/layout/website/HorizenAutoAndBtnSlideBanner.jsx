import React, { useEffect, useRef, useState } from 'react';
// import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { Box, 
         Divider,
        } from "@mui/material";
import { ArrowBackIosNew,
         ArrowForwardIos,
        } from "@mui/icons-material";


// const theme = createTheme({
//         palette: {
//                 primary: {
//                 main: '#eb3175',
//                 contrastText: '#fff',
//                 },
//         },
//         });

function AutoAndBtnSlideBaanner() {
        // useEffect(() => {
        //         setInterval(function() {
        //                 changeCurrentPage()
        //         }, 5000); //miliseconds
        // }, []);
        

        const [currentPage, setCurrentPage ] = useState(1);
        const [currentClass, setCurrentClass] = useState('');
        const [currentClassCircle, setCurrentClassCircle] = useState('');

        if (currentPage === 5 ) {
                return currentPage === 1
        }
        if (currentPage === 0 ) {
                return currentPage === 4
        }
        
        const changeCurrentPage = () => {
                setCurrentPage(currentPage + 1);
                
                currnetPageUl();
                currnetPageUlCircle();
                console.log(currentPage)
                console.log(currentClass)
        }
        const changeBackPage = () => {
                setCurrentPage(currentPage - 1);
                currnetPageUl();
                currnetPageUlCircle();
                console.log(currentPage)
                console.log(currentClass)
        }

        function currnetPageUl() {
                switch (currentPage) {
                        case 1: setCurrentClass('ulFirst'); break;
                        case 2: setCurrentClass('ulSecond'); break;
                        case 3: setCurrentClass('ulThird'); break;
                        case 4: setCurrentClass('ulFourth'); break;
                }
                return currentClass;
        }
        function currnetPageUlCircle() {
                switch (currentPage) {
                        case 1: setCurrentClassCircle('btnSlideCircle1'); break;
                        case 2: setCurrentClassCircle('btnSlideCircle2'); break;
                        case 3: setCurrentClassCircle('btnSlideCircle3'); break;
                        case 4: setCurrentClassCircle('btnSlideCircle4'); break;
                }
                return currentClassCircle;
        }
        

        return (
                <div>
                <div className="AutoAndBtnSlide">
                        <div className="AutoAndBtnSlide-image">
                                <ul className={currentClass}>
                                        <li>
                                                <div>
                                                        <strong> 자동 + 수동 슬라이드 배너</strong>
                                                        <p>넥스트리 스타일 가이드의 수동 스타일 배너입니다.</p>
                                                </div>
                                        </li>
                                        <li>
                                                <div>
                                                        <strong> 자동 + 수동 슬라이드 배너</strong>
                                                        <p>넥스트리 스타일 가이드의 수동 스타일 배너입니다.</p>
                                                </div>
                                        </li>
                                        <li>
                                                <div>
                                                        <strong> 자동 + 수동 슬라이드 배너</strong>
                                                        <p>넥스트리 스타일 가이드의 수동 스타일 배너입니다.</p>
                                                </div>
                                        </li>
                                        <li>
                                                <div>
                                                        <strong> 자동 + 수동 슬라이드 배너</strong>
                                                        <p>넥스트리 스타일 가이드의 수동 스타일 배너입니다.</p>
                                                </div>
                                        </li>
                                </ul>
                        </div>
                        <div className="AutoAndBtnSlide-contents">
                                <strong className="AutoAndBtnSlide-contents-strong"> 
                                        <Link to="/" >    
                                                <strong className="AutoAndBtnSlide-contents-strong-nextree"> <p>N</p>EXTREE </strong>
                                                <p className="AutoAndBtnSlide-contents-strong-p"> UI UX <br/> Style Guide </p>
                                        </Link>
                                </strong>
                                <div className="Autobannerbutton">
                                        <div className="Autobannerbutton-rightbutton">
                                                <ArrowBackIosNew style={{ fontSize: '40px'}} onClick={changeBackPage}/>
                                        </div>
                                        <div className="Autobannerbutton-bottomcircle">
                                                <ul className={currentClassCircle}>
                                                        <li></li>
                                                        <li></li>
                                                        <li></li>
                                                        <li></li>
                                                </ul>
                                               
                                        </div>
                                        <div className="Autobannerbutton-leftbutton">
                                                <ArrowForwardIos style={{ fontSize: '40px'}} onClick={changeCurrentPage}/>
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
        </div>
    );
  };
  
  export default AutoAndBtnSlideBaanner;