import * as React from 'react';
import { Link } from "react-router-dom";
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
import { Mail, 
        AccountCircle,
        ExpandMore 
        } from "@mui/icons-material";

function Dropdown() {
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <> 
        {/* 상단 메뉴 */}
        <div className="big-div" >
            <Box className="box">
              {/* 넥스트리 로고 */}
                <Box className="box-sbox1">
                    <h1 >
                        <Link to="/" className="logo"> Nextree </Link>
                    </h1>
                </Box>
              {/* 가운데 드롭다운 메뉴 */}
                <Box className="box-sbox2">
                    <p className="box-sbox2-p"><a href=''> Menu 1 </a> </p>
                    <p className="box-sbox2-p"><a href=''> Menu 2 </a></p>
                    <p className="box-sbox2-p"><a href=''> Menu 3 </a></p>
                    <p className="box-sbox2-p"><a href=''> Menu 4 </a></p>
                </Box>
                <div className="box-sbox2-drop">
                    <Box className="box-sbox2-drop-menu">
                      <ul>
                        <li > <a href=''> Small Menu </a> </li>
                        <li className="box-sbox2-drop-menu-noxsmall"> 
                          <a href=''> Small Menu <ExpandMore style={{ fontSize: '10px' }}/> </a>
                          <ul className="box-sbox2-drop-menu-noxsmall-xsmall">
                            <li> <a href=''> Xsmall Menu </a></li>
                            <li> <a href=''> Xsmall Menu </a></li>
                          </ul>
                        </li>
                        <li > <a href=''> Small Menu </a></li>
                      </ul>
                      <ul>
                        <li> <a href=''> Small Menu </a></li>
                        <li className="box-sbox2-drop-menu-noxsmall"> 
                          <a href=''> Small Menu <ExpandMore style={{ fontSize: '10px' }}/> </a>
                          <ul className="box-sbox2-drop-menu-noxsmall-xsmall">
                            <li> <a href=''> Xsmall Menu </a></li>
                            <li> <a href=''> Xsmall Menu </a></li>
                          </ul>
                        </li>
                        <li> <a href=''> Small Menu </a></li>
                      </ul>
                      <ul>
                        <li className="box-sbox2-drop-menu-noxsmall"> 
                          <a href=''> Small Menu <ExpandMore style={{ fontSize: '10px' }}/> </a>
                          <ul className="box-sbox2-drop-menu-noxsmall-xsmall">
                            <li> <a href=''> Xsmall Menu </a></li>
                            <li> <a href=''> Xsmall Menu </a></li>
                          </ul>
                        </li>
                        <li> <a href=''> Small Menu </a></li>
                        <li> <a href=''> Small Menu </a></li>
                      </ul>
                      <ul>
                        <li> <a href=''> Small Menu </a></li>
                        <li> <a href=''> Small Menu </a></li>
                        <li className="box-sbox2-drop-menu-noxsmall"> 
                          <a href=''> Small Menu <ExpandMore style={{ fontSize: '10px' }}/> </a>
                          <ul className="box-sbox2-drop-menu-noxsmall-xsmall">
                            <li> <a href=''> Xsmall Menu </a></li>
                            <li> <a href=''> Xsmall Menu </a></li>
                          </ul>
                        </li>
                      </ul>
                    </Box>
                </div>
              {/* 우측 메뉴 */}
                <Box className="box-sbox3">
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
            </Box>
        </div>
        {/* 콘텐트 영역 */}
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
              <h1> 드롭다운 메뉴입니다.</h1>
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
              <h1> 드롭다운 메뉴입니다.</h1>
            </Box>
          </Box>
        </div>
      </>
    );
  };
  
  export default Dropdown;