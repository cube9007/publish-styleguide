import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { javascript } from '@codemirror/lang-javascript';
import { emphasize, styled } from '@mui/material/styles';
import { motion,
    useAnimationFrame,
     } from 'framer-motion'

import { 
        Box,
        TextField,
        FormControl,
        InputLabel,
        OutlinedInput,
        InputAdornment,
        Checkbox,
        Button,
        IconButton,
        } from "@mui/material";
        
import {
        VisibilityOff,
        Visibility,
        } from "@mui/icons-material";

const theme = createTheme({
    palette: {
        primary: {
        main: '#eb3175',
        contrastText: '#fff',
        },
    },
});

function LogIn() {
    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
        });

    const handleChangePassword = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        };

    const handleClickShowPassword = () => {
    setValues({
        ...values,
        showPassword: !values.showPassword,
    });
    };

    const handleMouseDownPassword = (event) => {
    event.preventDefault();
    };

    return (
    <ThemeProvider theme={theme}>
        <div className='Login_Back'>
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    y: [0, -100, 0],
                    x: [0, -200, 0],
                }}
                transition={{
                    duration: 8,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 0
                }}
            >
                <div className="circle_1"/>
            </motion.div>
            <motion.div
                animate={{
                    scale: [1.2, 0.8, 1.2],
                    y: [0, 200, 0],
                    x: [0, 100, 0],
                }}
                transition={{
                    duration: 9,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 0
                }}
            >
                <div className="circle_2"/>
            </motion.div>
            <motion.div
                animate={{
                    scale: [1.2, 0.5, 1.2],
                    y: [0, 100, 0],
                    x: [-200, 200, -200],
                }}
                transition={{
                    duration: 7,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 0
                }}
            >
                <div className="circle_3"/>
            </motion.div>
        </div>
        <div className='Login_Front'>
            <div className='Login_Front_div'>
                <Box display='flex' flexGrow='1' alignItems='center'  >
                    <motion.div
                    animate={{
                        scale: [0.9, 1, 0.9, 1, 0.9],
                        y: [0, -25, 0, -25, 0],
                    }}
                    transition={{
                        duration: 7,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatDelay: 0
                    }}
                    >
                        <div className='Login_Front_Logo'></div>
                    </motion.div>
                </Box>
                <Box width='250px' backgroundColor='rgb(255,255,255,0.95)' p='35px' borderRadius='15px' boxShadow='0 0 15px 15px rgb(0,0,0,0.05)'>
                    <h1 className='Login_Front_h1'> Nextree <span>LogIn</span></h1>
                    <br/>
                    <TextField label='Id' variant='outlined' fullWidth />
                    <FormControl variant="outlined" className='textfield2' fullWidth style={{ marginTop: '15px'}}>
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={values.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChangePassword('password')}
                            endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                                edge="end"
                                >
                                {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                    <Box display='flex' alignItems='center' m='10px 0 10px -10px'>
                        <Checkbox /> <p> 자동 로그인 </p>
                    </Box>
                    <Button variant='contained' fullWidth style={{ height: '55px', fontSize: '18px', fontWeight: 'bold' }} disableElevation> 로그인 </Button>
                </Box>
            </div>
        </div>
    </ThemeProvider>
    );
};

export default LogIn;