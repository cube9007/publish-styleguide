import * as React from 'react';
import { Link } from "react-router-dom";
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { styled } from '@mui/material/styles';
import { Box, 
        Typography,
        IconButton, 
        Menu, 
        MenuItem, 
        Accordion,
        AccordionSummary,
        AccordionDetails
        } from "@mui/material";
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import {AccountCircle,
        ExpandMore,
        Person,
        Domain,
        ArrowForward,
        ArrowForwardIosSharp,
        MenuOpen,
        ArrowBackIosNew,
        ArrowForwardIos,
        } from "@mui/icons-material";

const Accordion1 = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid rgb(0,0,0,0)`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary1 = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharp sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 'white',
    // theme.palette.mode === 'dark'
    //   ? '#e08787'
    //   : 'rgba(0, 0, 0, .0)',
  flexDirection: 'row',
  '&$expanded': {
    backgroundColor: '#eb3175',
  },
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails1 = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderBottom: '1px solid rgba(0, 0, 0, .05)',
}));



function Sidemenu() {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    
    const [accountEl, setAccountEl] = React.useState(null);
  
    const handleMenu = (event) => {
      setAccountEl(event.currentTarget);
    };
  
    const accountClose = () => {
      setAccountEl(null);
    };

    return (
      <> 
        <Box className="sidemenuall">
        {/* 우측 영역 */}
          <input className="contents-appbar-check" type='checkbox' id='ra'></input>
          <div className="sidemenu280" >
            <Box className="sidemenu280-logo" >
                <h1 > <Link to="/" className="logo"> Nextree </Link> </h1>
            </Box>
            {/* <Divider /> */}
            <Box className="sidemenu280-menu">
                <a href='' className="sidemenu280-menu-avatar">
                    <Person className="sidemenu280-menu-avatar-person" style={{ fontSize: '50px '}}/> 
                </a>
                <Box className="sidemenu280-menu-namebox"> <p className="sidemenu280-menu-namebox-p"> <a href=''>홍길동</a>님 </p> &nbsp;안녕하세요</Box>
                <p className="sidemenu280-menu-insa"> 넥스트리에 오신 걸 환영합니다. </p>
                <Accordion1 className="sidemenu280-menu-accordion" elevation='0' disableGutters expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary1 className="sidemenu280-menu-accordion-summary" expandIcon={<ExpandMore />} style={{ padding: '25px'}} > 
                    <Domain className="sidemenu280-menu-accordion-summary-icon" style={{ fontSize: '22px '}} /> Side Menu 1
                    </AccordionSummary1>
                    <AccordionDetails1 className="sidemenu280-menu-accordion-details">
                        <ul>
                            <li>
                                <a href=''> Side Small Menu 1</a> <ArrowForward className="sidemenu280-menu-accordion-details-arrow" style={{ fontSize: '14px'}}/>
                            </li>
                            <li>
                                <a href=''> Side Small Menu 2</a> <ArrowForward className="sidemenu280-menu-accordion-details-arrow" style={{ fontSize: '14px'}}/>
                            </li>
                            <li>
                                <a href=''> Side Small Menu 3</a> <ArrowForward className="sidemenu280-menu-accordion-details-arrow" style={{ fontSize: '14px'}}/>
                            </li>
                        </ul>
                    </AccordionDetails1>
                </Accordion1>
                <Accordion1  className="sidemenu280-menu-accordion" elevation='0' disableGutters expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                    <AccordionSummary1 className="sidemenu280-menu-accordion-summary" expandIcon={<ExpandMore />} style={{ padding: '25px'}}> 
                    <Domain className="sidemenu280-menu-accordion-summary-icon" style={{ fontSize: '22px '}} /> Side Menu 2
                    </AccordionSummary1>
                    <AccordionDetails1 className="sidemenu280-menu-accordion-details">
                        <ul>
                            <li>
                                <a href=''> Side Small Menu 1</a> <ArrowForward className="sidemenu280-menu-accordion-details-arrow" style={{ fontSize: '14px'}}/>
                            </li>
                            <li>
                                <a href=''> Side Small Menu 2</a> <ArrowForward className="sidemenu280-menu-accordion-details-arrow" style={{ fontSize: '14px'}}/>
                            </li>
                            <li>
                                <a href=''> Side Small Menu 3</a> <ArrowForward className="sidemenu280-menu-accordion-details-arrow" style={{ fontSize: '14px'}}/>
                            </li>
                        </ul>
                    </AccordionDetails1>
                </Accordion1>
                <Accordion1  className="sidemenu280-menu-accordion" elevation='0' disableGutters expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                    <AccordionSummary1 className="sidemenu280-menu-accordion-summary" expandIcon={<ExpandMore />} style={{ padding: '25px'}}> 
                    <Domain className="sidemenu280-menu-accordion-summary-icon" style={{ fontSize: '22px '}} /> Side Menu 3
                    </AccordionSummary1>
                    <AccordionDetails1 className="sidemenu280-menu-accordion-details">
                        <ul>
                            <li>
                                <a href=''> Side Small Menu 1</a> <ArrowForward className="sidemenu280-menu-accordion-details-arrow" style={{ fontSize: '14px'}}/>
                            </li>
                            <li>
                                <a href=''> Side Small Menu 2</a> <ArrowForward className="sidemenu280-menu-accordion-details-arrow" style={{ fontSize: '14px'}}/>
                            </li>
                            <li>
                                <a href=''> Side Small Menu 3</a> <ArrowForward className="sidemenu280-menu-accordion-details-arrow" style={{ fontSize: '14px'}}/>
                            </li>
                        </ul>
                    </AccordionDetails1>
                </Accordion1>
                
            </Box>
          </div>
          {/* <Divider orientation='vertical' flexItem /> */}
          {/* 좌측 영역 */}
          <div className="contents">
              {/* 상단 앱바 */}
            <Box className="contents-appbar">
              <label for="ra">
                <MenuOpen className="contents-appbar-menuopen"/>
              </label>
              <h1 className="logo2"> <Link to="/" > Nextree </Link> </h1>
              <Box className="contents-appbar-rightbox">
                <IconButton
                      size="large"
                      onClick={handleMenu}
                  >
                      <AccountCircle className="icon-white" fontSize="large" />
                  </IconButton>
                  <Menu
                      className="menu"
                      elevation="3"
                      id="menu-appbar"
                      anchorEl={accountEl}
                      anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'right',
                      }}
                      keepMounted
                      transformOrigin={{
                      vertical: 'top',
                      horizontal: 'right',
                      }}
                      open={Boolean(accountEl)}
                      onClose={accountClose}
                  >
                      <MenuItem className="menu-item" onClick={accountClose}>Menu 1</MenuItem>
                      <MenuItem className="menu-item" onClick={accountClose}>Menu 2</MenuItem>
                      <Accordion elevation='0' disableGutters >
                          <AccordionSummary className="menu-accordion" expandIcon={<ExpandMore/>}>
                              <Typography>Menu 3</Typography>
                          </AccordionSummary>
                          <AccordionDetails className="menu-accordionDetailds" >
                              <MenuItem className="menu-item-item" onClick={accountClose}> Menu3-1</MenuItem>
                                {/* <Divider className="menu-item-divider" /> */}
                              <MenuItem className="menu-item-item" onClick={accountClose}> Menu3-1</MenuItem>
                          </AccordionDetails>
                      </Accordion>
                      <MenuItem className="menu-item" onClick={accountClose}>Menu 4</MenuItem>
                  </Menu>
              </Box>
            </Box>
            {/* 콘텐츠 영역 */}
            <Box className="contents-area">
                <div className='albumall'>
                    <h3>Album </h3>
                    <div className="album">
                        <input type='radio' name='albumbuttonarrow' id='albumbutton1' className="albumbutton-arrow1" defaultChecked/>
                        <input type='radio' name='albumbuttonarrow' id='albumbutton2' className="albumbutton-arrow2" />
                        <input type='radio' name='albumbuttonarrow' id='albumbutton3' className="albumbutton-arrow3" />
                        <input type='radio' name='albumbuttonarrow' id='albumbutton4' className="albumbutton-arrow4" />
                        <div className="album-image">
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </div>
                        <div className="album-contents">
                            <div className="albumbutton">
                                <div className="albumbutton-rightbutton">
                                    <label for='albumbutton4'>
                                        <ArrowBackIosNew style={{ fontSize: '30px'}}/>
                                    </label>
                                    <label for='albumbutton1'>
                                        <ArrowBackIosNew style={{ fontSize: '30px'}}/>
                                    </label>
                                    <label for='albumbutton2'>
                                        <ArrowBackIosNew style={{ fontSize: '30px'}}/>
                                    </label>
                                    <label for='albumbutton3'>
                                        <ArrowBackIosNew style={{ fontSize: '30px'}}/>
                                    </label>
                                </div>
                                <div className="albumbutton-bottomcircle">
                                    <ul>
                                        <label for='albumbutton1'> <li></li> </label>
                                        <label for='albumbutton2'> <li></li> </label>
                                        <label for='albumbutton3'> <li></li> </label>
                                        <label for='albumbutton4'> <li></li> </label>
                                    </ul>
                                        
                                </div>
                                <div className="albumbutton-leftbutton">
                                    <label for='albumbutton2' >
                                        <ArrowForwardIos style={{ fontSize: '30px'}}/>
                                    </label>
                                    <label for='albumbutton3' >
                                        <ArrowForwardIos style={{ fontSize: '30px'}}/>
                                    </label>
                                    <label for='albumbutton4' >
                                        <ArrowForwardIos style={{ fontSize: '30px'}}/>
                                    </label>
                                    <label for='albumbutton1' >
                                        <ArrowForwardIos style={{ fontSize: '30px'}}/>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="code">
                    <h3> Code </h3>
                    <CodeMirror
                        value={`<div className="album">
<input type='radio' name='albumbuttonarrow' id='albumbutton1' className="albumbutton-arrow1" defaultChecked/>
<input type='radio' name='albumbuttonarrow' id='albumbutton2' className="albumbutton-arrow2" />
<input type='radio' name='albumbuttonarrow' id='albumbutton3' className="albumbutton-arrow3" />
<input type='radio' name='albumbuttonarrow' id='albumbutton4' className="albumbutton-arrow4" />
<div className="album-image">
    <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</div>
<div className="album-contents">
    <div className="albumbutton">
        <div className="albumbutton-rightbutton">
            <label for='albumbutton4'>
                <ArrowBackIosNew style={{ fontSize: '30px'}}/>
            </label>
            <label for='albumbutton1'>
                <ArrowBackIosNew style={{ fontSize: '30px'}}/>
            </label>
            <label for='albumbutton2'>
                <ArrowBackIosNew style={{ fontSize: '30px'}}/>
            </label>
            <label for='albumbutton3'>
                <ArrowBackIosNew style={{ fontSize: '30px'}}/>
            </label>
        </div>
        <div className="albumbutton-bottomcircle">
            <ul>
                <label for='albumbutton1'> <li></li> </label>
                <label for='albumbutton2'> <li></li> </label>
                <label for='albumbutton3'> <li></li> </label>
                <label for='albumbutton4'> <li></li> </label>
            </ul>
                
        </div>
        <div className="albumbutton-leftbutton">
            <label for='albumbutton2' >
                <ArrowForwardIos style={{ fontSize: '30px'}}/>
            </label>
            <label for='albumbutton3' >
                <ArrowForwardIos style={{ fontSize: '30px'}}/>
            </label>
            <label for='albumbutton4' >
                <ArrowForwardIos style={{ fontSize: '30px'}}/>
            </label>
            <label for='albumbutton1' >
                <ArrowForwardIos style={{ fontSize: '30px'}}/>
            </label>
        </div>
    </div>
</div>
</div>`}    
                        theme='dark'
                        extensions={[javascript({ jsx: true })]}
                        onChange={(value, viewUpdate) => {
                            console.log('value:', value);
                        }}
                    />
                </div>
            </Box>
          </div>
        </Box>
      </>
    );
  };
  
  export default Sidemenu;