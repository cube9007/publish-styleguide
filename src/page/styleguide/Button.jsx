import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

import { 
        Stack,
        Box,
        Button,
        ButtonGroup,
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


function ButtonPage() {
  return (
    <ThemeProvider theme={theme}>
        <div className="big-div">
            <h1> 
                <Link to="/" > Button </Link>
            </h1>
        </div>
        <div className='styleguide-content'>
            <h2 className='styleguide-h2'> 기본 버튼 Basic </h2>
            <p className='styleguide-p'> 기본 유형은 3가지로 text(default) / contained / outlined 가 있습니다. </p>
            <Stack className='guideBox' spacing={2} direction='row' justifyContent='center'>
                <Button variant="text">Text</Button>
                <Button variant="contained">Contained</Button>
                <Button variant="outlined">Outlined</Button>
            </Stack>
            <div className='codemirror' >
                <CodeMirror
                    value={`<Stack className='guideBox' spacing={2} direction='row' justifyContent='center'>
    <Button variant="text">Text</Button>
    <Button variant="contained">Contained</Button>
    <Button variant="outlined">Outlined</Button>
</Stack>`}    
                    theme='dark'
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                        console.log('value:', value);
                    }}
                />
            </div>

            <br/><br/><br/><br/><br/>
            <h2 className='styleguide-h2'> 기본 기능 Basic Function </h2>
            <p className='styleguide-p'> disabled는 버튼을 비활성화 시킵니다. </p>
            <p className='styleguide-p'> href 는 버튼에 링크를 걸 수 있습니다. </p>
            <p className='styleguide-p'> disableElevation은 그림자효과를 없앱니다. </p>
            <Stack className='guideBox' spacing={2} direction='row' justifyContent='center'>
                <Button variant="contained">Contained</Button>
                <Button variant="contained" disabled>
                    Disabled
                </Button>
                <Button variant="contained" href="#contained-buttons">
                    Link
                </Button>
                <Button variant="contained" disableElevation>
                    Disable elevation
                </Button>
            </Stack>
            <div className='codemirror' >
                <CodeMirror
                    value={`<Stack className='guideBox' spacing={2} direction='row' justifyContent='center'>
    <Button variant="contained">Contained</Button>
    <Button variant="contained" disabled>
        Disabled
    </Button>
    <Button variant="contained" href="#contained-buttons">
        Link
    </Button>
    <Button variant="contained" disableElevation>
        Disable elevation
    </Button>
</Stack>`}    
                    theme='dark'
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                        console.log('value:', value);
                    }}
                />
            </div>

            <br/><br/><br/><br/><br/>
            <h2 className='styleguide-h2'> 색상 Color </h2>
            <Stack className='guideBox' spacing={2} direction='row' justifyContent='center'>
                <Button variant="outlined" >Primary</Button>
                <Button variant="outlined" color="secondary">Secondary</Button>
                <Button variant="outlined" color="success">
                    Success
                </Button>
                <Button variant="outlined" color="error">
                    Error
                </Button>
            </Stack>
            <div className='codemirror' >
                <CodeMirror
                    value={`<Stack className='guideBox' spacing={2} direction='row' justifyContent='center'>
    <Button variant="outlined" >Primary</Button>
    <Button variant="outlined" color="secondary">Secondary</Button>
    <Button variant="outlined" color="success">
        Success
    </Button>
    <Button variant="outlined" color="error">
        Error
    </Button>
</Stack>`}    
                    theme='dark'
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                        console.log('value:', value);
                    }}
                />
            </div>

            <br/><br/><br/><br/><br/>
            <h2 className='styleguide-h2'> 크기 Size </h2>
            <Box className='guideBox' sx={{ '& button' : { m : 1} }} display='flex' justifyContent='center'>
                <Box >
                    <Button variant="outlined" size="small">
                        Small
                    </Button>
                    <Button variant="outlined" size="medium">
                        Medium
                    </Button>
                    <Button variant="outlined" size="large">
                        Large
                    </Button>
                </Box>
            </Box>
            <div className='codemirror' >
                <CodeMirror
                    value={`<Button variant="outlined" size="small">
    Small
</Button>
<Button variant="outlined" size="medium">
    Medium
</Button>
<Button variant="outlined" size="large">
    Large
</Button>`}    
                    theme='dark'
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                        console.log('value:', value);
                    }}
                />
            </div>

            <br/><br/><br/><br/><br/>
            <h2 className='styleguide-h2'> 기본 버튼 그룹 Basic Button Group </h2>
            <p className='styleguide-p'> 버튼 그룹은 3가지 기본 유형이 있습니다.</p>
            <p className='styleguide-p'> text / outlined(default) / contained </p>
            <Box className='guideBoxCenter' sx={{ '& > *' : { m : 1 } }}>
                <ButtonGroup variant="text" >
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
                <ButtonGroup >
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
                <ButtonGroup variant="contained" >
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
            </Box>
            <div className='codemirror' >
                <CodeMirror
                    value={`<Box className='guideBoxCenter' sx={{ '& > *' : { m : 1 } }}>
    <ButtonGroup variant="text" >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
    </ButtonGroup>
    <ButtonGroup >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
    </ButtonGroup>
    <ButtonGroup variant="contained" >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
    </ButtonGroup>
</Box>`}    
                    theme='dark'
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                        console.log('value:', value);
                    }}
                />
            </div>

            <br/><br/><br/><br/><br/>
            <h2 className='styleguide-h2'> 색상 Color</h2>
            <Box className='guideBoxCenter' sx={{ '& > *' : { m : 1 } }}>
                <ButtonGroup  >
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
                <ButtonGroup color='secondary'>
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
                <ButtonGroup color='success' >
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
                <ButtonGroup color='error' >
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
            </Box>
            <div className='codemirror' >
                <CodeMirror
                    value={`<ButtonGroup  >
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
</ButtonGroup>
<ButtonGroup color='secondary'>
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
</ButtonGroup>
<ButtonGroup color='success' >
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
</ButtonGroup>
<ButtonGroup color='error' >
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
</ButtonGroup>`}    
                    theme='dark'
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                        console.log('value:', value);
                    }}
                />
            </div>

            <br/><br/><br/><br/><br/>
            <h2 className='styleguide-h2'> 크기 Size </h2>
            <p className='styleguide-p'> small / medium(default) / large </p>
            <Box className='guideBoxCenter' sx={{ '& > *' : { m : 1 } }}>
                <ButtonGroup size='small' >
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
                <ButtonGroup >
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
                <ButtonGroup size='large' >
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
            </Box>
            <div className='codemirror' >
                <CodeMirror
                    value={`<ButtonGroup size='small' >
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
</ButtonGroup>
<ButtonGroup >
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
</ButtonGroup>
<ButtonGroup size='large' >
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
</ButtonGroup>`}    
                    theme='dark'
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                        console.log('value:', value);
                    }}
                />
            </div>

            <br/><br/><br/><br/><br/>
            <h2 className='styleguide-h2'> 수직 버튼 Vertical </h2>
            <p className='styleguide-p'> orientation='vertical' 속성을 주면 됩니다. </p>
            <Box className='guideBox' justifyContent='center' display='center' sx={{ '& > *' : { m : 1 } }}>
                <ButtonGroup orientation='vertical' variant='text'>
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
                <ButtonGroup orientation='vertical' >
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
                <ButtonGroup orientation='vertical' variant='contained' >
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
            </Box>
            <div className='codemirror' >
                <CodeMirror
                    value={`<ButtonGroup orientation='vertical' variant='text'>
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
</ButtonGroup>
<ButtonGroup orientation='vertical' >
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
</ButtonGroup>
<ButtonGroup orientation='vertical' variant='contained' >
    <Button>One</Button>
    <Button>Two</Button>
    <Button>Three</Button>
</ButtonGroup>`}    
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

export default ButtonPage;
