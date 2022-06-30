import React, { useState, useEffect, Component } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { emphasize, styled } from '@mui/material/styles';

import { 
        Stack,
        Typography,
        Breadcrumbs,
        Link,
        Chip,
        } from "@mui/material";
        
import {
        NavigateNext,
        Home,
        Whatshot,
        Grain,
        ExpandMore,
        } from "@mui/icons-material";

const theme = createTheme({
    palette: {
        primary: {
        main: '#eb3175',
        contrastText: '#fff',
        },
    },
});
const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
      theme.palette.mode === 'light'
        ? theme.palette.grey[100]
        : theme.palette.grey[800];
    return {
      backgroundColor,
      height: theme.spacing(3),
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightRegular,
      '&:hover, &:focus': {
        backgroundColor: emphasize(backgroundColor, 0.06),
      },
      '&:active': {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(backgroundColor, 0.12),
      },
    };
  });
class BreadCrumbsPage extends Component {
    render() {
    return (
    <ThemeProvider theme={theme}>
        <div className="big-div">
            <h1> 
                <a href="/" > BreadCrumbs </a>
            </h1>
        </div>
       
        <div className='styleguide-content'>
            <h2 className='styleguide-h2'> 기본 유형 Basic BreadCrumbs </h2>
            <Stack className='guideBox' spacing={2} direction='row' justifyContent='center' alignItems='center'>
                <Breadcrumbs aria-label="breadcrumb">
                    <Link underline="hover" color="inherit" >
                    Nextree
                    </Link>
                    <Link
                    underline="hover"
                    color="inherit"
                    >
                    Core
                    </Link>
                    <Typography color="text.primary">Nomaidan</Typography>
                </Breadcrumbs>
            </Stack>
            <div className='codemirror' >
                <CodeMirror
                    value={`<Breadcrumbs aria-label="breadcrumb">
    <Link underline="hover" color="inherit" >
    Nextree
    </Link>
    <Link
    underline="hover"
    color="inherit"
    >
    Core
    </Link>
    <Typography color="text.primary">Nomaidan</Typography>
</Breadcrumbs>`}    
                    theme='dark'
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                        console.log('value:', value);
                    }}
                />
            </div>
            
            <br/><br/><br/><br/><br/>
            <h2 className='styleguide-h2'> 구분 기호 설정 Custom Seperator </h2>
            <Stack className='guideBoxCenter' spacing={2} >
                <Breadcrumbs separator='>'>
                    <Link underline="hover" color="inherit" >
                    Nextree
                    </Link>
                    <Link
                    underline="hover"
                    color="inherit"
                    >
                    Core
                    </Link>
                    <Typography color="text.primary">Nomaidan</Typography>
                </Breadcrumbs>
                <Breadcrumbs separator='-'>
                    <Link underline="hover" color="inherit" >
                    Nextree
                    </Link>
                    <Link
                    underline="hover"
                    color="inherit"
                    >
                    Core
                    </Link>
                    <Typography color="text.primary">Nomaidan</Typography>
                </Breadcrumbs>
                <Breadcrumbs separator={<NavigateNext fontSize='small' /> } >
                    <Link underline="hover" color="inherit" >
                    Nextree
                    </Link>
                    <Link
                    underline="hover"
                    color="inherit"
                    >
                    Core
                    </Link>
                    <Typography color="text.primary">Nomaidan</Typography>
                </Breadcrumbs>
            </Stack>
            <div className='codemirror' >
                <CodeMirror
                    value={`<Breadcrumbs separator='>'>`}    
                    theme='dark'
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                        console.log('value:', value);
                    }}
                />
            </div>
            
            <br/><br/><br/><br/><br/>
            <h2 className='styleguide-h2'> 아이콘 Icon </h2>
            <Stack className='guideBoxCenter' spacing={2} >
                <Breadcrumbs separator='>'>
                    <Link underline="hover" color="inherit" >
                        <Home sx={{ mr: 0.5 }} fontSize="inherit" />
                    Nextree
                    </Link>
                    <Link
                    underline="hover"
                    color="inherit"
                    >
                        <Whatshot sx={{ mr: 0.5 }} fontSize="inherit" />
                    Core
                    </Link>
                    <Typography color="text.primary">
                        <Grain sx={{ mr: 0.5 }} fontSize="inherit" />
                        Nomaidan
                    </Typography>
                </Breadcrumbs>
            </Stack>
            <div className='codemirror' >
                <CodeMirror
                    value={`<Breadcrumbs separator='>'>
    <Link underline="hover" color="inherit" >
        <Home sx={{ mr: 0.5 }} fontSize="inherit" />
    Nextree
    </Link>
    <Link
    underline="hover"
    color="inherit"
    >
        <Whatshot sx={{ mr: 0.5 }} fontSize="inherit" />
    Core
    </Link>
    <Typography color="text.primary">
        <Grain sx={{ mr: 0.5 }} fontSize="inherit" />
        Nomaidan
    </Typography>
</Breadcrumbs>`}    
                    theme='dark'
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                        console.log('value:', value);
                    }}
                />
            </div>

            <br/><br/><br/><br/><br/>
            <h2 className='styleguide-h2'> 접힌 브레드크럼즈 Collapsed breadcrumbs </h2>
            <Stack className='guideBoxCenter' spacing={2} >
                <Breadcrumbs maxItems={2} separator='>'>
                    <Link underline="hover" color="inherit" >
                        <Home sx={{ mr: 0.5 }} fontSize="inherit" />
                    Nextree
                    </Link>
                    <Link
                    underline="hover"
                    color="inherit"
                    >
                        <Whatshot sx={{ mr: 0.5 }} fontSize="inherit" />
                    Core
                    </Link>
                    <Link
                    underline="hover"
                    color="inherit"
                    >
                        <Whatshot sx={{ mr: 0.5 }} fontSize="inherit" />
                    Core2
                    </Link>
                    <Link
                    underline="hover"
                    color="inherit"
                    >
                        <Whatshot sx={{ mr: 0.5 }} fontSize="inherit" />
                    Core3
                    </Link>
                    <Typography color="text.primary">
                        <Grain sx={{ mr: 0.5 }} fontSize="inherit" />
                        Nomaidan
                    </Typography>
                </Breadcrumbs>
            </Stack>
            <div className='codemirror' >
                <CodeMirror
                    value={`<Breadcrumbs maxItems={2} separator='>'>`}    
                    theme='dark'
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                        console.log('value:', value);
                    }}
                />
            </div>

            <br/><br/><br/><br/><br/>
            <h2 className='styleguide-h2'> 스타일 Styled </h2>
            <Stack className='guideBoxCenter' spacing={2} >
                <Breadcrumbs aria-label="breadcrumb">
                    <StyledBreadcrumb
                    component="a"
                    href="#"
                    label="Home"
                    icon={<Home fontSize="small" />}
                    />
                    <StyledBreadcrumb component="a" href="#" label="Catalog" />
                    <StyledBreadcrumb
                    label="Accessories"
                    />
                </Breadcrumbs>
            </Stack>
            <div className='codemirror' >
                <CodeMirror
                    value={`const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
        theme.palette.mode === 'light'
        ? theme.palette.grey[100]
        : theme.palette.grey[800];
    return {
        backgroundColor,
        height: theme.spacing(3),
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
        backgroundColor: emphasize(backgroundColor, 0.06),
        },
        '&:active': {
        boxShadow: theme.shadows[1],
        backgroundColor: emphasize(backgroundColor, 0.12),
        },
    };
    });
class BreadCrumbsPage extends Component {
    render() {
    return (
        <Breadcrumbs aria-label="breadcrumb">
            <StyledBreadcrumb
            component="a"
            href="#"
            label="Home"
            icon={<Home fontSize="small" />}
            />
            <StyledBreadcrumb component="a" href="#" label="Catalog" />
            <StyledBreadcrumb
            label="Accessories"
            />
        </Breadcrumbs>
        );
    }
};

export default BreadCrumbsPage;`}    
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
    }
};

export default BreadCrumbsPage;