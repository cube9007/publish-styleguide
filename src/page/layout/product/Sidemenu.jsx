import * as React from 'react';
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { Box, 
        Divider,
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
        MenuOpen
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
              <div className="common-box">
                <h3> Contents Box </h3>
                <Box className='common-box2' height='300px'>
                  <Box display='flex' flexGrow='1' justifyContent='center' alignItems='center'>
                    <div className='common-div'>
                      <h1> Image </h1>
                    </div>
                  </Box>
                  <Divider orientation='vertical' flexItem/>
                  <Box display='flex' flexGrow='2' justifyContent='center' alignItems='center'> 
                    <h1> 사이드 메뉴입니다.</h1>
                  </Box>
                </Box>
              </div>
              <div className="common-box">
                <h3> Contents Box </h3>
                <Box className='common-box2' height='300px'>
                  <Box display='flex' flexGrow='1' justifyContent='center' alignItems='center'>
                    <div className='common-div'>
                      <h1> Image </h1>
                    </div>
                  </Box>
                  <Divider orientation='vertical' flexItem/>
                  <Box display='flex' flexGrow='2' justifyContent='center' alignItems='center'> 
                    <h1> 사이드 메뉴입니다.</h1>
                  </Box>
                </Box>
              </div>
            </Box>
          </div>
        </Box>
      </>
    );
  };
  
  export default Sidemenu;