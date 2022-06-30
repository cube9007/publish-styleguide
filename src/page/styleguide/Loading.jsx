import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

import { 
        Box,
        Modal,
        Backdrop,
        Fade,
        CircularProgress,
        } from "@mui/material";
        
import {AccountCircle,
        } from "@mui/icons-material";

const theme = createTheme({
    palette: {
        primary: {
        main: '#eb3175',
        contrastText: '#fff',
        },
    },
});


function Loading() {
    const [open] = React.useState(true);

  return (
    <ThemeProvider theme={theme}>
        <div className="big-div">
            <h1 > 
                <Link to="/" > Loading</Link>
            </h1>
        </div>
        <div className='styleguide-content'>
            <Modal
                className='modal-backdrop'
                open={open}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={open}>
                <div className='loading-wrap' style={{ paddingBottom: "3%" }}>
                    <CircularProgress style={{ width: 60, height: 60 }} />
                </div>
                </Fade>
            </Modal>
            <div className='codemirror' >
                <CodeMirror
                    value={`function Loading() {
    const [open] = React.useState(true);

    return (
        <Modal
            className='modal-backdrop'
            open={open}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={open}>
            <div className='loading-wrap' style={{ paddingBottom: "3%" }}>
                <CircularProgress style={{ width: 60, height: 60 }} />
            </div>
            </Fade>
        </Modal>
    );
};

export default Loading; `}    
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

export default Loading;
