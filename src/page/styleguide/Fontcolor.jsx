import * as React from 'react';
import { Link } from "react-router-dom";
import { Box, Divider } from "@material-ui/core";

const Fontcolor = () => {
    return (
      <>
        <div className="big-div">
            <h1>
                <Link to="/" > RMS </Link>
            </h1>
        </div>
        <div className="common-box">
          <h3> Font System </h3>
          <Box className='common-box2' height='300px'>
            <Box display='flex' flexGrow='1' justifyContent='center' alignItems='center'>
              <div className='common-div'>
                <h1> 본고딕 </h1>
                <p className='common-p'> Noto Sans KR</p>
              </div>
            </Box>
            <Divider orientation='vertical' flexItem/>
            <Box display='flex' flexGrow='2' justifyContent='center' alignItems='center'> 
              <div>
              <p className='common-p'> [font-size] 👉 12px 14px <b>16px</b> 20px 24px </p>
              <p className='common-p'> [color] 👉 <b>#000</b> #222 #666 #999</p>
              </div>
            </Box>
          </Box>
          <h3> Color System </h3>
          <Box className='common-box3' p='50px 100px'>
            <div className='color-box-3group'> 
              <Box className='color-onebox'>
                <div className='color-div1'/>
                <Box marginLeft='10px'>
                  <p className='common-p2'>primary </p>
                  <p className='common-p2'>#F3702A </p>
                </Box>
              </Box>
              <Box className='color-onebox'>
                <div className='color-div2'/>
                <Box marginLeft='10px'>
                  <p className='common-p2'>secondary </p>
                  <p className='common-p2'>#353535 </p>
                </Box>
              </Box>
              <Box className='color-onebox'>
                <div className='color-div3'/>
                <Box marginLeft='10px'>
                  <p className='common-p2'>error </p>
                  <p className='common-p2'>#ff4949 </p>
                </Box>
              </Box>
            </div>

            <div className='color-box-3group'> 
              <Box className='color-onebox'>
                <div className='color-div4'/>
                <Box marginLeft='10px'>
                  <p className='common-p2'>filled </p>
                  <p className='common-p2'>#fcfcfc </p>
                </Box>
              </Box>
              <Box className='color-onebox'>
                <div className='color-div5'/>
                <Box marginLeft='10px'>
                  <p className='common-p2'>disabled </p>
                  <p className='common-p2'>#e8e8e8</p>
                </Box>
              </Box>
              <Box className='color-onebox'>
                <div className='color-div6'/>
                <Box marginLeft='10px'>
                  <p className='common-p2'>filled_point</p>
                  <p className='common-p2'>#fffbeb </p>
                </Box>
              </Box>
            </div>

            <div className='color-box-3group'> 
              <Box className='color-onebox'>
                <div className='color-div7'/>
                <Box marginLeft='10px'>
                  <p className='common-p2'>button_border </p>
                  <p className='common-p2'>#ccc </p>
                </Box>
              </Box>
              <Box className='color-onebox'>
                <div className='color-div8'/>
                <Box marginLeft='10px'>
                  <p className='common-p2'>input_border </p>
                  <p className='common-p2'>#ddd </p>
                </Box>
              </Box>
              <Box className='color-onebox'>
                <div className='color-div9'/>
                <Box marginLeft='10px'>
                  <p className='common-p2'>input_border_dark </p>
                  <p className='common-p2'>#666 </p>
                </Box>
              </Box>
            </div>

            <div className='color-box-3group'> 
              <Box className='color-onebox'>
                <div className='color-div10'/>
                <Box marginLeft='10px'>
                  <p className='common-p2'>line </p>
                  <p className='common-p2'>#ddd </p>
                </Box>
              </Box>
              <Box className='color-onebox'>
                <div className='color-div11'/>
                <Box marginLeft='10px'>
                  <p className='common-p2'>line_light </p>
                  <p className='common-p2'>#ededed </p>
                </Box>
              </Box>
              <Box className='color-onebox'>
                <div className='color-div12'/>
                <Box marginLeft='10px'>
                  <p className='common-p2'>line_dark </p>
                  <p className='common-p2'>#222 </p>
                </Box>
              </Box>
            </div>
          </Box>
        </div>
      </>
    );
  };
  
  export default Fontcolor;