import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

import { 
        Box,
        CircularProgress,
        Typography,
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


function LoadingProgressCircle() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 20));
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <ThemeProvider theme={theme}>
        <div className="big-div">
            <h1 > 
                <Link to="/" > Loading Progress Circle </Link>
            </h1>
        </div>
        <div className='styleguide-content'>
            <h2 className='styleguide-h2'> Circular Progress </h2>
            <div className='guideBoxCenter'>
                <CircularProgress />
            </div>
            <div className='codemirror' >
                <CodeMirror
                    value={`<CircularProgress />`}    
                    theme='dark'
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                        console.log('value:', value);
                    }}
                />
            </div>

            <br/><br/><br/><br/><br/>
            <h2 className='styleguide-h2'> Circular Progress Color </h2>
            <div className='guideBoxCenter'>
                <Box>
                    <CircularProgress className="circularProgress" />
                    <CircularProgress className="circularProgress" color="success" />
                    <CircularProgress className="circularProgress" color="secondary" />
                    <CircularProgress color="inherit" />
                </Box>
            </div>
            <div className='codemirror' >
                <CodeMirror
                    value={`<CircularProgress />
<CircularProgress color="success" />
<CircularProgress color="secondary" />
<CircularProgress color="inherit" />`}    
                    theme='dark'
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                        console.log('value:', value);
                    }}
                />
            </div>

            <br/><br/><br/><br/><br/>
            <h2 className='styleguide-h2'> Circular Progress with Label </h2>
            <div className='guideBoxCenter'>
                <CircularProgress variant="determinate" value={progress} />
                <Box className='progresslabel'>
                    <Typography> {`${Math.round(progress)}%`} </Typography>
                </Box>
            </div>
            <div className='codemirror' >
                <CodeMirror
                    value={`function LoadingProgress() {
    const [progress, setProgress] = React.useState(0);
    
    React.useEffect(() => {
        const timer = setInterval(() => {
        setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 20));
        }, 500);
    
        return () => {
        clearInterval(timer);
        };
    }, []);
    
    return (
        <CircularProgress variant="determinate" value={progress} />
        <Box className='progresslabel'>
            <Typography> {'${Math.round(progress)}%'} </Typography>
        </Box>
        );
};
export default LoadingProgress;`}    
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

export default LoadingProgressCircle;
