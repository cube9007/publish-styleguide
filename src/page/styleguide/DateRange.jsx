import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

import { 
        Box,
        Button,
        TextField, 
        InputAdornment,
        } from "@mui/material";
        
import {
        DateRange,
        } from "@mui/icons-material";

import addWeeks from 'date-fns/addWeeks';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateRangePicker from '@mui/lab/DateRangePicker';

function getWeeksAfter(date, amount) {
    return date ? addWeeks(date, amount) : undefined;
  }

const theme = createTheme({
    palette: {
        primary: {
        main: '#eb3175',
        contrastText: '#fff',
        },
    },
});


function Datepicker() {
    const [value, setValue] = React.useState([null, null]);

  return (
    <ThemeProvider theme={theme}>
        <div className="big-div">
            <h1> 
                <Link to="/" > Date Range Picker </Link>
            </h1>
        </div>
        <div className='styleguide-content'>
            <h2 className='styleguide-h2'> 날짜 범위 설정 Date Range Picker </h2>
            <Box className='guideBox' display='flex' justifyContent='center'>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateRangePicker
                        disablePast
                        value={value}
                        maxDate={getWeeksAfter(value[0], 4)}
                        onChange={(newValue) => {
                        setValue(newValue);
                        }}
                        renderInput={(startProps, endProps) => (
                        <React.Fragment>
                            <TextField {...startProps} label='시작일'
                                InputProps={{
                                    endAdornment: (
                                    <InputAdornment position="start">
                                        <DateRange />
                                    </InputAdornment>
                                    ),
                            }}/>
                            <Box sx={{ mx: 2 }}> ~ </Box>
                            <TextField {...endProps} label='종료일'
                                InputProps={{
                                    endAdornment: (
                                    <InputAdornment position="start">
                                        <DateRange />
                                    </InputAdornment>
                                    ),
                            }}/>
                        </React.Fragment>
                        )}
                    />
                </LocalizationProvider>
                    <Button >오늘</Button>
                    <Button >일주일</Button>
                    <Button >한달</Button>
            </Box>
            <div className='codemirror' >
                <CodeMirror
                    value={`import addWeeks from 'date-fns/addWeeks';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateRangePicker from '@mui/lab/DateRangePicker';

function getWeeksAfter(date, amount) {
    return date ? addWeeks(date, amount) : undefined;
    }
    
function Datepicker() {
    const [value, setValue] = React.useState([null, null]);

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DateRangePicker
                disablePast
                value={value}
                maxDate={getWeeksAfter(value[0], 4)}
                onChange={(newValue) => {
                setValue(newValue);
                }}
                renderInput={(startProps, endProps) => (
                <React.Fragment>
                    <TextField {...startProps} />
                    <Box sx={{ mx: 2 }}> to </Box>
                    <TextField {...endProps} />
                </React.Fragment>
                )}
            />
        </LocalizationProvider>

    );
};

export default Datepicker;`}    
                    theme='dark'
                    height='500px'
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

export default Datepicker;
