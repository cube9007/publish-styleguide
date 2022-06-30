import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

import { 
        Box,
        LinearProgress,
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


function LoadingProgressLinear() {
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
                <Link to="/" > Loading ProgressLinear </Link>
            </h1>
        </div>
        <div className='styleguide-content'>
            <h2 className='styleguide-h2'> Linear Progress </h2>
            <div className='guideBox'>
                <LinearProgress />
            </div>
            <div className='codemirror' >
                <CodeMirror
                    value={`<LinearProgress />`}    
                    theme='dark'
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                        console.log('value:', value);
                    }}
                />
            </div>

            <br/><br/><br/><br/><br/>
            <h2 className='styleguide-h2'> Linear Progress Color </h2>
            <div className='guideBox'>
                <LinearProgress className="linearProgress" />
                <LinearProgress className="linearProgress" color="secondary" />
                <LinearProgress className="linearProgress" color="success" />
                <LinearProgress color="inherit" />
            </div>
            <div className='codemirror' >
                <CodeMirror
                    value={`<LinearProgress />
<LinearProgress color="secondary" />
<LinearProgress color="success" />
<LinearProgress color="inherit" />`}    
                    theme='dark'
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                        console.log('value:', value);
                    }}
                />
            </div>

            <br/><br/><br/><br/><br/>
            <h2 className='styleguide-h2'> Linear Progress with Label </h2>
            <div className='guideBox'>
                <Box display='flex' alignItems='center'>
                    <Box width='100%'>
                        <LinearProgress variant="determinate" value={progress} />
                    </Box>
                    <Box minWidth='30px' pl='10px'>
                        <Typography> {`${Math.round(progress)}%`} </Typography>
                    </Box>
                </Box>
            </div>
            <div className='codemirror' >
                <CodeMirror
                    value={`function LoadingProgressCircle() {
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
        <Box display='flex' alignItems='center'>
            <Box width='100%'>
                <LinearProgress variant="determinate" value={progress} />
            </Box>
            <Box minWidth='30px' pl='10px'>
                <Typography> {'${Math.round(progress)}%'} </Typography>
            </Box>
        </Box>
    );
};
export default LoadingProgressCircle;`}    
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

export default LoadingProgressLinear;
