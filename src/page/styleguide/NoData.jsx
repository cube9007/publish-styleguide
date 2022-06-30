import * as React from 'react';
import { Link } from "react-router-dom";
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, 
        Divider,
        Typography,
        IconButton, 
        TextField,
        Tab,
        Menu, 
        Button,
        ButtonGroup,
        MenuItem, 
        Accordion,
        AccordionSummary,
        AccordionDetails,
        } from "@mui/material";
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import {AccountCircle,
        ExpandMore,
        Person,
        Search,
        Domain,
        ArrowForward,
        ArrowForwardIosSharp,
        MenuOpen,
        FindInPage,
        Notes,
        ImageNotSupported,
        } from "@mui/icons-material";
import { TabContext,
        TabList,
        TabPanel,
        } from '@mui/lab';

const theme = createTheme({
    palette: {
        primary: {
        main: '#eb3175',
        contrastText: '#fff',
        },
    },
});
        
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



function NodataPage() {
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
   
    const [tab, setTab] = React.useState('1');

    const TabChange = (event, newTab) => {
      setTab(newTab);
    };
    
    return (
      <ThemeProvider theme={theme}> 
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
                <Box display='flex' justifyContent='center' alignItems='center' height='150px'>
                    <TextField  style={{ width:'500px'}} variant='outlined' placeholder='검색어를 입력해주세요' />
                    <ButtonGroup>
                        <Button
                            size='small'
                            disableElevation
                            style={{ height: '56px', width:'56px' , marginLeft:'-5px', borderRadius:'0 5px 5px 0' }}
                            variant='contained'
                        >
                            <Search style={{ fontSize: '30px', color: 'white' }} />
                        </Button>
                    </ButtonGroup>
                </Box>
                    <Box p='0 100px' sx={{ width: 'carc(100% - 200px' }}>
                    <TabContext value={tab}>
                        <TabList onChange={TabChange} style={{marginBottom: '-1px'}}>
                            <Tab style={{ border: '1px solid #ccc', width:'150px' }} label="No Data1" value="1" />
                            <Tab style={{ border: '1px solid #ccc', width:'150px', marginLeft:'-1px' }} label="No Data 2" value="2" />
                            <Tab style={{ border: '1px solid #ccc', width:'150px', marginLeft:'-1px' }} label="No Image 1" value="3" />
                            <Tab style={{ border: '1px solid #ccc', width:'150px', marginLeft:'-1px' }} label="No Image 2" value="4" />
                            <Tab style={{ border: '1px solid #ccc', width:'150px', marginLeft:'-1px' }} label="No Image 3" value="5" />
                        </TabList>
                        <Divider />
                        <TabPanel value="1">
                            <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' height='350px'>
                                <Box display='flex' m='20px' alignItems='center' justifyContent='center' border='1px solid #ddd' borderRadius='100px' width='130px' height='130px'>
                                    <Box display='flex' ml='-15px' mt='5px'>
                                        <Box border= '5px solid #999' borderRadius='5px' width='40px' height='40px' />
                                        <Search style={{ fontSize: '45px', color : '#999', backgroundColor: 'white', borderRadius:'30px', marginLeft: '-25px', marginTop: '-20px' }} />
                                        <Notes style={{ fontSize: '35px', color:'#eb3175', marginLeft: '-63px', marginTop: '10px'}} />
                                    </Box>
                                </Box>
                                <h3 style={{ display:'flex' }}> <p style={{ color: '#eb3175' }}> 'NoData' </p> 에 대한 결과가 없습니다.</h3>
                            </Box>
                        </TabPanel>
                        <TabPanel value="2">
                            <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' height='350px'>
                                <Box display='flex' flexDirection='column' m='20px' alignItems='center' justifyContent='center' backgroundColor='#eee' borderRadius='10px' width='130px' height='130px'>
                                    <FindInPage style={{ fontSize: '40px', marginTop:'10px', color: '#999' }}/>
                                    <h6 style={{ color: '#999' }}> No Data </h6>
                                </Box>
                                <h3 style={{ display:'flex' }}> <p style={{ color: '#eb3175' }}> 'NoData' </p> 에 대한 결과가 없습니다.</h3>
                            </Box>
                        </TabPanel>
                        <TabPanel value="3">
                            <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' height='350px'>
                                <Box display='flex' flexDirection='column' m='20px' alignItems='center' justifyContent='center' backgroundColor='#eee' borderRadius='10px' width='130px' height='130px'>
                                    <ImageNotSupported style={{ fontSize: '40px', marginTop:'10px', color: '#999' }}/>
                                    <h6 style={{ color: '#999' }}> No Image </h6>
                                </Box>
                                <h3 style={{ display:'flex' }}> <p style={{ color: '#eb3175' }}> 'NoImage' </p> 에 대한 결과가 없습니다.</h3>
                            </Box>
                        </TabPanel>
                        <TabPanel value="4">
                            <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' height='350px'>
                                <Box display='flex' flexDirection='column' m='20px' alignItems='center' justifyContent='center' backgroundColor='#eee' borderRadius='10px' width='130px' height='130px'>
                                    <Person style={{ fontSize: '40px', marginTop:'10px', color: '#999' }}/>
                                    <h6 style={{ color: '#999' }}> No Image </h6>
                                </Box>
                                <h3 style={{ display:'flex' }}> <p style={{ color: '#eb3175' }}> 'NoImage' </p> 에 대한 결과가 없습니다.</h3>
                            </Box>
                        </TabPanel>
                        <TabPanel value="5">
                            <Box display='flex' flexDirection='column' alignItems='center' justifyContent='center' height='350px'>
                                <Box display='flex' m='20px' alignItems='center' justifyContent='center' border='1px solid #ddd' borderRadius='100px' width='130px' height='130px'>
                                    <Box display='flex' ml='-15px' mt='5px'>
                                        <Box border= '5px solid #999' borderRadius='5px' width='40px' height='40px' />
                                        <Search style={{ fontSize: '45px', color : '#999', backgroundColor: 'white', borderRadius:'30px', marginLeft: '-25px', marginTop: '-20px' }} />
                                        <Person style={{ fontSize: '30px', color:'#eb3175', marginLeft: '-60px', marginTop: '12px'}} />
                                    </Box>
                                </Box>
                                <h3 style={{ display:'flex' }}> <p style={{ color: '#eb3175' }}> 'NoImage' </p> 에 대한 결과가 없습니다.</h3>
                            </Box>
                        </TabPanel>
                    </TabContext>
                </Box>
            </Box>
          </div>
        </Box>
      </ ThemeProvider>
    );
  };
  
  export default NodataPage;