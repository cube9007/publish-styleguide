import * as React from 'react';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';
import { Box, 
         Divider,
         Typography,
         IconButton, 
         Badge, 
         Menu, 
         MenuItem, 
         Accordion, 
         AccordionSummary, 
         AccordionDetails,
        } from "@mui/material";
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { Mail, 
         AccountCircle,
         ExpandMore,
         Widgets,
         Domain,
         ArrowForward,
         ArrowForwardIosSharp,
         MenuBook,
         Bookmark,
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
    
const theme = createTheme({
        palette: {
                primary: {
                main: '#eb3175',
                contrastText: '#fff',
                },
        },
        });

function NormalLayout() {

        const [expanded, setExpanded] = React.useState(false);

        const handleChange = (panel) => (event, isExpanded) => {
            setExpanded(isExpanded ? panel : false);
        };
        const [anchorEl, setAnchorEl] = React.useState(null);
    
        const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
        };
    
        const handleClose = () => {
        setAnchorEl(null);
        };

        return (
        <ThemeProvider theme={theme}>
            <div className="topbar">
                <Box className="box-sbox1-layout">
                    <h1 >
                        <Link to="/" className="logo"> Nextree </Link>
                    </h1>
                </Box>
                <Box className="box-sbox2">
                    <label for='nmlayout1'>
                    <p className="nmlayoutmenu"><a > Menu 1 </a></p>
                    </label>
                    <label for='nmlayout2'>
                    <p className="nmlayoutmenu"><a > Menu 2 </a></p>
                    </label>
                    <label for='nmlayout3'>
                    <p className="nmlayoutmenu"><a > Menu 3 </a></p>
                    </label>
                    <label for='nmlayout4'>
                    <p className="nmlayoutmenu"><a > Menu 4 </a></p>
                    </label>
                </Box>
                <Box className="box-sbox3-layout">
                    <IconButton className="icon-button" size="large">
                        <Badge badgeContent={4} color="error">
                            <Mail className="icon-white" />
                        </Badge>
                    </IconButton>
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
                        anchorEl={anchorEl}
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem className="menu-item" onClick={handleClose}>Menu 1</MenuItem>
                        <MenuItem className="menu-item" onClick={handleClose}>Menu 2</MenuItem>
                        <Accordion elevation='0' disableGutters  >
                            <AccordionSummary className="menu-accordion" expandIcon={<ExpandMore/>}>
                                <Typography>Menu 3</Typography>
                            </AccordionSummary>
                            <AccordionDetails className="menu-accordionDetailds" >
                                <MenuItem className="menu-item-item" onClick={handleClose}> Menu3-1</MenuItem>
                                    {/* <Divider className="menu-item-divider" /> */}
                                <MenuItem className="menu-item-item" onClick={handleClose}> Menu3-1</MenuItem>
                            </AccordionDetails>
                        </Accordion>
                        <MenuItem className="menu-item" onClick={handleClose}>Menu 4</MenuItem>
                    </Menu>
                </Box>
            </div>
            <div className='nmlayout-contents'>
                <div className='nmlayout-contents-sidemenu1'>
                    <input type='radio' id='nmlayout1' name='nmlayoutradio' className='nmlayout-radio'/>
                    <div className="sidemenu280-menu-layout">
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
                    </div>
                </div>
                <div className='nmlayout-contents-sidemenu2'>
                    <input type='radio' id='nmlayout2' name='nmlayoutradio' className='nmlayout-radio'/>
                    <div className="sidemenu280-menu-layout">
                        <Accordion1 className="sidemenu280-menu-accordion" elevation='0' disableGutters expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary1 className="sidemenu280-menu-accordion-summary" expandIcon={<ExpandMore />} style={{ padding: '25px'}} > 
                            <Widgets className="sidemenu280-menu-accordion-summary-icon" style={{ fontSize: '22px '}} /> Side Menu 4
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
                            <Widgets className="sidemenu280-menu-accordion-summary-icon" style={{ fontSize: '22px '}} /> Side Menu 5
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
                            <Widgets className="sidemenu280-menu-accordion-summary-icon" style={{ fontSize: '22px '}} /> Side Menu 6
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
                    </div>
                </div>
                <div className='nmlayout-contents-sidemenu3'>
                    <input type='radio' id='nmlayout3' name='nmlayoutradio' className='nmlayout-radio'/>
                    <div className="sidemenu280-menu-layout">
                        <Accordion1 className="sidemenu280-menu-accordion" elevation='0' disableGutters expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary1 className="sidemenu280-menu-accordion-summary" expandIcon={<ExpandMore />} style={{ padding: '25px'}} > 
                            <MenuBook className="sidemenu280-menu-accordion-summary-icon" style={{ fontSize: '22px '}} /> Side Menu 7
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
                            <MenuBook className="sidemenu280-menu-accordion-summary-icon" style={{ fontSize: '22px '}} /> Side Menu 8
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
                            <MenuBook className="sidemenu280-menu-accordion-summary-icon" style={{ fontSize: '22px '}} /> Side Menu 9
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
                    </div>
                </div>
                <div className='nmlayout-contents-sidemenu4'>
                    <input type='radio' id='nmlayout4' name='nmlayoutradio' className='nmlayout-radio'/>
                    <div className="sidemenu280-menu-layout">
                        <Accordion1 className="sidemenu280-menu-accordion" elevation='0' disableGutters expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                            <AccordionSummary1 className="sidemenu280-menu-accordion-summary" expandIcon={<ExpandMore />} style={{ padding: '25px'}} > 
                            <Bookmark className="sidemenu280-menu-accordion-summary-icon" style={{ fontSize: '22px '}} /> Side Menu 10
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
                            <Bookmark className="sidemenu280-menu-accordion-summary-icon" style={{ fontSize: '22px '}} /> Side Menu 11
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
                            <Bookmark className="sidemenu280-menu-accordion-summary-icon" style={{ fontSize: '22px '}} /> Side Menu 12
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
                    </div>
                </div>
                <Box className="nmlayout-contents-area">
                    <input type='radio' id='nmlayout5' name='nmlayoutradio' className='nmlayout-radio'/>
                    <label for='nmlayout5'>
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
                    </label>
                </Box>
            </div>
        </ThemeProvider>
    );
  };
  
  export default NormalLayout;