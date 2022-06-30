import React, { useState, useRef } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { motion,
        useAnimationFrame,
         } from 'framer-motion'
import { 
        Stack,
        Box,
        Button,
        ButtonGroup,
        TextField, 
        InputAdornment,
        } from "@mui/material";
        
import {
        DateRange,
        } from "@mui/icons-material";

const theme = createTheme({
    palette: {
        primary: {
        main: '#eb3175',
        contrastText: '#fff',
        },
    },
});


function MotionDiv() {
    const ref = useRef(null);

    useAnimationFrame((t) => {
        const rotate = Math.sin(t / 10000) * 200;
        const y = (1 + Math.sin(t / 1000)) * -50;
        ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
    });

  return (
    <ThemeProvider theme={theme}>
        <div className="big-div">
            <h1> 
                <Link to="/" > Motion Div</Link>
            </h1>
        </div>
       
        <div className='styleguide-content'>
            <h2 className='styleguide-h2'> 설치 Install</h2>
            <Stack className='guideBox' spacing={2} direction='row' justifyContent='center' alignItems='center'>
                <motion.div 
                    style={{
                        width: '100px',
                        height: '100px',
                        backgroundColor: '#eb3175',
                        borderRadius: '15px'
                    }}
                    animate={{ scale: [0.5, 1, 0.5] }} 
                />
                <Button href='./MotionDiv' variant='outlined' style={{ height : '50px' }}> 새로고침 </Button>
            </Stack>
            <div className='codemirror' >
                <CodeMirror
                    value={`npm install framer-motion`}    
                    theme='dark'
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                        console.log('value:', value);
                    }}
                />
            </div>
            <br/>
            <div className='codemirror' >
                <CodeMirror
                    value={`import { motion } from 'framer-motion'

<motion.div 
    style={{
        width: '100px',
        height: '100px',
        backgroundColor: '#eb3175',
        borderRadius: '15px'
    }}
    animate={{ scale: [0.5, 1, 0.5] }} 
/>`}    
                    theme='dark'
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                        console.log('value:', value);
                    }}
                />
            </div>

            <br/><br/><br/><br/><br/>
            <h2 className='styleguide-h2'> 키프레임 Keyframe </h2>
            <a className='styleguide-p' href='https://www.framer.com/docs/examples/'>https://www.framer.com/docs/examples/ </a>
            <p className='styleguide-p'> 값을 배열로 지정하면 배열의 순서대로 재생된다. </p>
            <Stack className='guideBox' spacing={2} direction='row' justifyContent='center' alignItems='center'>
                 <motion.div
                    className='basicMotionDiv'
                    animate={{
                        scale: [1, 1.3, 1.3, 1, 1],
                        rotate: [0, 0, 270, 270, 0],
                        borderRadius: ["20%", "20%", "50%", "50%", "20%"]
                    }}
                    transition={{
                        duration: 2,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity,
                        repeatDelay: 1
                    }}
                />
            </Stack>
            <div className='codemirror' >
                <CodeMirror
                    value={`<motion.div
    className='basicMotionDiv'
    animate={{
        scale: [1, 1.3, 1.3, 1, 1],
        rotate: [0, 0, 270, 270, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"]
    }}
    transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1
    }}
/>`}    
                    theme='dark'
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                        console.log('value:', value);
                    }}
                />
            </div>

            <br/><br/><br/><br/><br/>
            <h2 className='styleguide-h2'> 호버 / 탭  Hover / Tab </h2>
            <p className='styleguide-p'> 커서를 올렸을 때와 클릭했을 때 효과를 줄 수 있습니다. </p>
            <Stack className='guideBox' spacing={2} direction='row' justifyContent='center' alignItems='center'>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
                    <Button className='basicMotionDiv' variant='outlined' >Button</Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
                    <Button className='basicMotionDiv' variant='contained' >Button</Button>
                </motion.div>
            </Stack>
            <div className='codemirror' >
                <CodeMirror
                    value={`<motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
    <Button className='basicMotionDiv' variant='contained' >Button</Button>
</motion.div>`}    
                    theme='dark'
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                        console.log('value:', value);
                    }}
                />
            </div>

            <br/><br/><br/><br/><br/>
            <h2 className='styleguide-h2'> 드래그 Drag </h2>
            <p className='styleguide-p'> 값을 배열로 지정하면 배열의 순서대로 재생된다. </p>
            <Stack className='guideBox' spacing={2} direction='row' justifyContent='center' alignItems='center'>
                <div className='dragArea'>
                    <motion.div
                        className='drag'
                        drag
                        dragConstraints={{
                        top: -100,
                        left: -100,
                        right: 100,
                        bottom: 100,
                        }}
                    />
                    <motion.div
                        className='drag2'
                        drag
                        dragConstraints={{
                        top: -100,
                        left: -100,
                        right: 100,
                        bottom: 100,
                        }}
                    />
                    <motion.div
                        className='drag3'
                        drag
                        dragConstraints={{
                        top: -100,
                        left: -100,
                        right: 100,
                        bottom: 100,
                        }}
                    />
                </div>
            </Stack>
            <div className='codemirror' >
                <CodeMirror
                    value={`<div className='dragArea'>
    <motion.div
        className='drag'
        drag
        dragConstraints={{
        top: -100,
        left: -100,
        right: 100,
        bottom: 100,
        }}
    />
    <motion.div
        className='drag2'
        drag
        dragConstraints={{
        top: -100,
        left: -100,
        right: 100,
        bottom: 100,
        }}
    />
    <motion.div
        className='drag3'
        drag
        dragConstraints={{
        top: -100,
        left: -100,
        right: 100,
        bottom: 100,
        }}
    />
</div>`}    
                    theme='dark'
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                        console.log('value:', value);
                    }}
                />
            </div>

            <br/><br/><br/><br/><br/>
            <h2 className='styleguide-h2'> 스크롤 트리거 Scroll Trigger </h2>
            <p className='styleguide-p'> 화면을 내릴 때 애니메이션이 진행됩니다. </p>
            <Stack className='guideBox' spacing={2} direction='row' justifyContent='center' alignItems='center'>
                <Box mt='40px'>
                    <motion.div
                        className='trigger'
                        initial={{ opacity: 0, 
                            y: 0
                        }}
                        whileInView={{ opacity: 1,
                            y: -20,
                            rotate: -30,
                            transition: {
                            type: "spring",
                            bounce: 0.4,
                            duration: 5,
                            }
                        }}
                        viewport={{ amount : true }}
                    />
                    <motion.div
                        className='trigger'
                        initial={{ opacity: 0, 
                            y: 0
                        }}
                        whileInView={{ opacity: 1,
                            y: -20,
                            rotate: -30,
                            transition: {
                            type: "spring",
                            bounce: 0.4,
                            duration: 5,
                            }
                        }}
                        viewport={{ amount : true }}
                    />
                    <motion.div
                        className='trigger'
                        initial={{ opacity: 0, 
                            y: 0
                        }}
                        whileInView={{ opacity: 1,
                            y: -20,
                            rotate: -30,
                            transition: {
                            type: "spring",
                            bounce: 0.4,
                            duration: 5,
                            }
                        }}
                        viewport={{ amount : true }}
                    />
                </Box>
            </Stack>
            <div className='codemirror' >
                <CodeMirror
                    value={`<motion.div
    className='trigger'
    initial={{ opacity: 0, 
        y: 0
    }}
    whileInView={{ opacity: 1,
        y: -20,
        rotate: -30,
        transition: {
        type: "spring",
        bounce: 0.4,
        duration: 5,
        }
    }}
    viewport={{ amount : true }}
/>`}    
                    theme='dark'
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                        console.log('value:', value);
                    }}
                />
            </div>

            <br/><br/><br/><br/><br/>
            <h2 className='styleguide-h2'> 3D 모션 </h2>
            <a className='styleguide-p' href='https://www.framer.com/docs/utilities/'> https://www.framer.com/docs/utilities/ </a>
            <Stack className='guideBox' spacing={2} direction='row' justifyContent='center' alignItems='center'>
                <div className="container">
                    <div className="cube" ref={ref}>
                        <div className="side_front" />
                        <div className="side_left" />
                        <div className="side_right" />
                        <div className="side_top" />
                        <div className="side_bottom" />
                        <div className="side_back" />
                    </div>
                </div>
            </Stack>
            <div className='codemirror' >
                <CodeMirror
                    value={`import { useAnimationFrame } from "framer-motion";
    export default function App() {
        const ref = useRef(null);
        
        useAnimationFrame((t) => {
            const rotate = Math.sin(t / 10000) * 200;
            const y = (1 + Math.sin(t / 1000)) * -50;
            ref.current.style.transform = translateY({y}px) rotateX({rotate}deg) rotateY({rotate}deg);
        });
        
        return (
            <div className="container">
            <div className="cube" ref={ref}>
                <div className="side front" />
                <div className="side left" />
                <div className="side right" />
                <div className="side top" />
                <div className="side bottom" />
                <div className="side back" />
            </div>
            </div>
        );
    }`}    
                    theme='dark'
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                        console.log('value:', value);
                    }}
                />
            </div>
            

        </div>

        

    </ThemeProvider>
  );
};

export default MotionDiv;
