import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

import { TextField,
        InputLabel,
        MenuItem,
        FormControl,
        Input,
        InputAdornment,
        OutlinedInput,
        IconButton,
        } from "@mui/material";
        
import {AccountCircle,
        Visibility,
        VisibilityOff,
        } from "@mui/icons-material";

const nextreeian = [
    {
    value: 'Nextree',
    label: 'Nextree',
    },
    {
    value: 'Nomadian',
    label: 'Nomadian',
    },
    {
    value: 'Namoosori',
    label: 'Namoosori',
    },
];

const theme = createTheme({
    palette: {
        primary: {
        main: '#eb3175',
        contrastText: '#fff',
        },
    },
});

function Textfield() {
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


  const [nextree, setNextree] = React.useState('EUR');

  const handleChange = (event) => {
    setNextree(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
        <div className="big-div">
            <h1 > 
                <Link to="/" > TextField </Link>
            </h1>
        </div>
        <div className='styleguide-content'>
            <h2 className='styleguide-h2'> 기본 Basic </h2>
            <p className='styleguide-p' > 기본적인 형태는 Outlined, Filled, Standard 3가지 형태가 제공됩니다. </p>
            <div className='guideBox'>
                <TextField className='textfield' style={{ margin: '10px 10px' }} label="Outlined" variant="outlined" margin="dense"/>
                <TextField className='textfield' style={{ margin: '10px 10px' }} label="Filled" variant="filled" margin="dense"/>
                <TextField className='textfield' style={{ margin: '10px 10px' }} label="Standard" variant="standard" />
            </div>
            <div className='codemirror' >
                <CodeMirror
                    value={`<TextField label="Outlined" variant="outlined" />
<TextField label="Filled" variant="filled" />
<TextField label="Standard" variant="standard" />`}    
                    theme='dark'
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                        console.log('value:', value);
                    }}
                />
            </div>

            <br/><br/><br/><br/><br/>
            <h2 className='styleguide-h2'> 양식 Form </h2>
            <div className='guideBox'>
                <div className='guideBox-Box'>
                    <TextField className='textfield' style={{ margin: '0 10px' }} required label="Required" variant="outlined" />
                    <TextField className='textfield' style={{ margin: '0 10px' }} disabled label="Disabled" variant="outlined" />
                    <TextField className='textfield' style={{ margin: '0 10px' }} type='Password' label="Password" variant="outlined" />
                </div>
                <div className='guideBox-Box'>
                    <TextField className='textfield' style={{ margin: '0 10px' }} InputProps={{ readOnly: true, }} label="Read Only" variant="outlined" />
                    <TextField className='textfield' style={{ margin: '0 10px' }} InputLabelProps={{ shrink: true,}} type='number'label="Number" variant="outlined" />
                    <TextField className='textfield' style={{ margin: '0 10px' }} type='search' label="Search field" variant="outlined" />
                </div>
                <div className='guideBox-Box'>
                    <TextField className='textfield' style={{ margin: '0 10px' }} type='Password' label="Helper text" helperText='하단 helper text' variant="outlined" />
                </div>
            </div>
            <div className='codemirror' >
                <CodeMirror
                    value={`<div className='guideBox-Box'>
    <TextField required label="Required" variant="outlined" />
    <TextField disabled label="Disabled" variant="outlined" />
    <TextField type='Password' label="Password" variant="outlined" />
</div>
<div className='guideBox-Box'>
    <TextField InputProps={{ readOnly: true, }} label="Read Only" variant="outlined" />
    <TextField InputLabelProps={{ shrink: true,}} type='number'label="Number" variant="outlined" />
    <TextField type='search' label="Search field" variant="outlined" />
</div>
<div className='guideBox-Box'>
    <TextField type='Password' label="Helper text" helperText='하단 helper text' variant="outlined" />
</div>`}    
                    theme='dark'
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                        console.log('value:', value);
                    }}
                />
            </div>

            <br/><br/><br/><br/><br/>
            <h2 className='styleguide-h2'> 오류 Error </h2>
            <div className='guideBox'>
                <TextField className='textfield2' style={{ margin: '10px 10px' }} error label="error" defaultValue="not Nextree" variant="outlined"/>  
                <TextField className='textfield2' style={{ margin: '10px 10px' }} error label="error" defaultValue="not Nextree" helperText="잘못 입력되었습니다." variant="outlined"/>  
            </div>
            <div className='codemirror' >
                <CodeMirror
                    value={`<TextField error label="error" defaultValue="not Nextree" variant="outlined" />  
<TextField error label="error" defaultValue="not Nextree" helperText="잘못 입력되었습니다." variant="outlined" />  `}    
                    theme='dark'
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                        console.log('value:', value);
                    }}
                />
            </div>

            <br/><br/><br/><br/><br/>
            <h2 className='styleguide-h2'> 여러 줄 Multiliner</h2>
            <div className='guideBox'>
                <TextField className='textfield2' style={{ margin: '10px 10px' }} multiline maxRows={4} label="Multiliner" variant="outlined"/>  
                <TextField className='textfield2' style={{ margin: '10px 10px' }} multiline rows={4} label="Multiliner" variant="outlined"/>  
            </div>
            <div className='codemirror' >
                <CodeMirror
                    value={`<TextField multiline maxRows={4} label="Multiliner" variant="outlined"/>  
<TextField multiline rows={4} label="Multiliner" variant="outlined"/>`}    
                    theme='dark'
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                        console.log('value:', value);
                    }}
                />
            </div>

            <br/><br/><br/><br/><br/>
            <h2 className='styleguide-h2'> 선택 Select</h2>
            <div className='guideBox'>
                <TextField 
                    className='textfield2' 
                    style={{ margin: '10px 10px' }} 
                    select
                    value={nextree}
                    onChange={handleChange}
                    label="Select Menu" 
                    variant="outlined"
                >
                    {nextreeian.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                        {option.label}
                        </MenuItem>
                    ))}
                </TextField>  
                <TextField 
                    className='textfield2' 
                    style={{ margin: '10px 10px' }} 
                    select
                    value={nextree}
                    onChange={handleChange}
                    label="Select Option" 
                    SelectProps={{ native: true, }}
                    variant="outlined"
                >
                    {nextreeian.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </TextField> 
                
            </div>
            <div className='codemirror' >
                <CodeMirror
                    value={`const nextreeian = [
    {
    value: 'Nextree',
    label: 'Nextree',
    },
    {
    value: 'Nomadian',
    label: 'Nomadian',
    },
    {
    value: 'Namoosori',
    label: 'Namoosori',
    },
];

function Textfield() {
    const [nextree, setNextree] = React.useState('EUR');
  
    const handleChange = (event) => {
      setNextree(event.target.value);
    };
  
    return (
        <TextField 
            select
            value={nextree}
            onChange={handleChange}
            label="Select Menu" 
            variant="outlined"
        >
            {nextreeian.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                {option.label}
                </MenuItem>
            ))}
        </TextField>  
        <TextField 
            select
            value={nextree}
            onChange={handleChange}
            label="Select Option" 
            SelectProps={{ native: true, }}
            variant="outlined"
        >
            {nextreeian.map((option) => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
            ))}
        </TextField> 
    );
};
`}    
                    theme='dark'
                    height='500px'
                    
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                        console.log('value:', value);
                    }}
                />
            </div>

            <br/><br/><br/><br/><br/>
            <h2 className='styleguide-h2'> 아이콘 Icon </h2>
            <div className='guideBox'>
                <FormControl variant="standard" className='textfield2' style={{ margin: '10px 10px' }}>
                    <InputLabel >
                    FormControl
                    </InputLabel>
                    <Input
                    startAdornment={
                        <InputAdornment position="start">
                        <AccountCircle />
                        </InputAdornment>
                    }
                    />
                </FormControl>
                <TextField
                    className='textfield2'
                    style={{ margin: '10px 10px' }}
                    label="TextField"
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        <AccountCircle />
                        </InputAdornment>
                    ),
                    }}
                    variant="outlined"
                />               
                
            </div>
            <div className='codemirror' >
                <CodeMirror
                    value={`<FormControl variant="standard" className='textfield2' style={{ margin: '10px 10px' }}>
    <InputLabel >
    FormControl
    </InputLabel>
    <Input
    startAdornment={
        <InputAdornment position="start">
        <AccountCircle />
        </InputAdornment>
    }
    />
</FormControl>
<TextField
    className='textfield2'
    style={{ margin: '10px 10px' }}
    label="TextField"
    InputProps={{
        startAdornment: (
            <InputAdornment position="start">
            <AccountCircle />
            </InputAdornment>
        ),
    }}
    variant="outlined"
/>`}    
                    theme='dark'
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                        console.log('value:', value);
                    }}
                />
            </div>

            <br/><br/><br/><br/><br/>
            <h2 className='styleguide-h2'> 비밀번호 Password </h2>
            <div className='guideBox'>
                <FormControl variant="standard" className='textfield2' style={{ margin: '10px 10px' }}>
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <Input
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
                <FormControl variant="outlined" className='textfield2' style={{ margin: '10px 10px' }}>
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
                
            </div>
            <div className='codemirror' >
                <CodeMirror
                    value={`function Textfield() {
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
        <FormControl variant="standard" className='textfield2' style={{ margin: '10px 10px' }}>
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <Input
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
    );
};`}    
                    height='500px'
                    theme='dark'
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                        console.log('value:', value);
                    }}
                />
            </div>

            <br/><br/><br/><br/><br/>
            <h2 className='styleguide-h2'> 사이즈 Size </h2>
            <div className='guideBox'>
                <TextField className='textfield2' style={{ margin: '10px 10px' }} label="small" size='small' />
                <TextField className='textfield2' style={{ margin: '10px 10px' }} label="Normal" />
            </div>
            <div className='codemirror' >
                <CodeMirror
                    value={`<TextField label="small" size='small' />
<TextField label="Normal" />`}    
                    theme='dark'
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                        console.log('value:', value);
                    }}
                />
            </div>

            <br/><br/><br/><br/><br/>
            <h2 className='styleguide-h2'> Full Width </h2>
            <div className='guideBox'>
                <TextField fullWidth label="FullWidth" />
            </div>
            <div className='codemirror' >
                <CodeMirror
                    value={`<TextField fullWidth label="FullWidth" />`}    
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

export default Textfield;
