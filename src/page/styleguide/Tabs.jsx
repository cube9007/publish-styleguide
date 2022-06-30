import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

import { 
        Box,
        Tab,
        Tabs,
        tabsClasses,
        } from "@mui/material";
        
import {
        Phone,
        Favorite,
        PersonPin,
        } from "@mui/icons-material";
import {
        TabList,
        TabContext,
        TabPanel,
        } from "@mui/lab";
const theme = createTheme({
    palette: {
        primary: {
        main: '#eb3175',
        contrastText: '#fff',
        },
    },
});


function TabPage(props) {
  const [value, setValue] = React.useState('1');

  const basicTab = (event, newValue) => {
    setValue(newValue);
  };
  const [color, setColor] = React.useState('1');
  const basicTab2 = (event, newColor) => {
    setColor(newColor);
  };
  return (
    <ThemeProvider theme={theme}>
        <div className="big-div">
            <h1> 
                <Link to="/" > Tabs </Link>
            </h1>
        </div>
       
        <div className='styleguide-content'>
            <h2 className='styleguide-h2'> 기본 탭 Basic Tab </h2>
            <p className='styleguide-p'> 기본 예시입니다. </p>
            <Box className='guideBox' >
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={basicTab} aria-label="lab API tabs example">
                        <Tab label="기본 탭1" value="1" />
                        <Tab label="기본 탭2" value="2" />
                        <Tab label="기본 탭3" value="3" />
                    </TabList>
                    </Box>
                    <TabPanel value="1">기본 탭 내용 1</TabPanel>
                    <TabPanel value="2">기본 탭 내용 2</TabPanel>
                    <TabPanel value="3">기본 탭 내용 3</TabPanel>
                </TabContext>
            </Box>
            <div className='codemirror' >
                <CodeMirror
                    value={`function TabPage(props) {
    const [value, setValue] = React.useState('1');

    const basicTab = (event, newValue) => {
    setValue(newValue);
    };
    return ( 
        <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <TabList onChange={basicTab} aria-label="lab API tabs example">
                <Tab label="기본 탭1" value="1" />
                <Tab label="기본 탭2" value="2" />
                <Tab label="기본 탭3" value="3" />
            </TabList>
            </Box>
            <TabPanel value="1">기본 탭 내용 1</TabPanel>
            <TabPanel value="2">기본 탭 내용 2</TabPanel>
            <TabPanel value="3">기본 탭 내용 3</TabPanel>
        </TabContext>
    );
};

export default TabPage;`}    
                    theme='dark'
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                        console.log('value:', value);
                    }}
                />
            </div>
            
            <br/><br/><br/><br/><br/>
            <h2 className='styleguide-h2'> 색상 Color </h2>
            <Box className='guideBox'>
                <Tabs
                    value={color}
                    onChange={basicTab2}
                    textColor="primary"
                    indicatorColor="primary"
                    aria-label="primary tabs example"
                >
                    <Tab value="1" label="primary 1" />
                    <Tab value="2" label="primary 2" />
                    <Tab value="3" label="primary 3" />
                </Tabs>
                <Tabs
                    value={color}
                    onChange={basicTab2}
                    textColor="secondary"
                    indicatorColor="secondary"
                    aria-label="secondary tabs example"
                >
                    <Tab value="1" label="Secondary 1" />
                    <Tab value="2" label="Secondary 2" />
                    <Tab value="3" label="Secondary 3" />
                </Tabs>
            </Box>
            <div className='codemirror' >
                <CodeMirror
                    value={`<Tabs
    value={color}
    onChange={basicTab2}
    textColor="secondary"
    indicatorColor="secondary"
    aria-label="secondary tabs example"
>
    <Tab value="one" label="Item One" />
    <Tab value="two" label="Item Two" />
    <Tab value="three" label="Item Three" />
</Tabs>`}    
                    theme='dark'
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                        console.log('value:', value);
                    }}
                />
            </div>

            <br/><br/><br/><br/><br/>
            <h2 className='styleguide-h2'> 비활성화 Disabled </h2>
            <Box className='guideBox' justifyContent='center' display='flex'>
                <Box borderBottom='1px solid #ccc'>
                    <Tabs
                        value={color}
                        onChange={basicTab2}
                        textColor="primary"
                        indicatorColor="primary"
                        aria-label="primary tabs example"
                    >
                        <Tab value="1" label="Active" />
                        <Tab value="2" label="Disable" disabled/>
                        <Tab value="3" label="Active" />
                    </Tabs>
                </Box>
            </Box>
            <div className='codemirror' >
                <CodeMirror
                    value={`<Tab value="1" label="Active" />
<Tab value="2" label="Disable" disabled/>
<Tab value="3" label="Active" />`}    
                    theme='dark'
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                        console.log('value:', value);
                    }}
                />
            </div>

            <br/><br/><br/><br/><br/>
            <h2 className='styleguide-h2'> 전체 넓이 Fullwidth </h2>
            <Box className='guideBox' justifyContent='center' display='flex'>
                <Box borderBottom='1px solid #ccc' width='100%'>
                    <Tabs
                        variant='fullWidth'
                        value={color}
                        onChange={basicTab2}
                        textColor="primary"
                        indicatorColor="primary"
                        aria-label="primary tabs example"
                    >
                        <Tab value="1" label="FullWidth 1" />
                        <Tab value="2" label="FullWidth 2" />
                        <Tab value="3" label="FullWidth 3" />
                    </Tabs>
                </Box>
            </Box>
            <div className='codemirror' >
                <CodeMirror
                    value={`<Tabs
    variant='fullWidth'
    value={color}
    onChange={basicTab2}
    textColor="primary"
    indicatorColor="primary"
    aria-label="primary tabs example"
>
    <Tab value="1" label="FullWidth 1" />
    <Tab value="2" label="FullWidth 2" />
    <Tab value="3" label="FullWidth 3" />
</Tabs>`}    
                    theme='dark'
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                        console.log('value:', value);
                    }}
                />
            </div>
            
            <br/><br/><br/><br/><br/>
            <h2 className='styleguide-h2'> 전체 넓이 Fullwidth </h2>
            <Box className='guideBoxCenter' justifyContent='center' display='flex'>
                <Box borderBottom='1px solid #ccc' width='100%'>
                    <Tabs
                        variant='scrollable'
                        scrollButtons='auto'
                        value={color}
                        onChange={basicTab2}
                        textColor="primary"
                        indicatorColor="primary"
                        aria-label="primary tabs example"
                        sx={{
                            [`& .${tabsClasses.scrollButtons}`]: {
                              '&.Mui-disabled': { opacity: 0.3 },
                            },
                        }}
                    >
                        <Tab value="1" label="Scroll Button 1" />
                        <Tab value="2" label="Scroll Button 2" />
                        <Tab value="3" label="Scroll Button 3" />
                        <Tab value="4" label="Scroll Button 4" />
                        <Tab value="5" label="Scroll Button 5" />
                        <Tab value="6" label="Scroll Button 6" />
                        <Tab value="7" label="Scroll Button 7" />
                    </Tabs>
                </Box>
                
            </Box>
            <p className='styleguide-p'> shift + 드래그 해보세요 </p>
            <Box className='guideBoxCenter' justifyContent='center' display='flex'>
                <Box borderBottom='1px solid #ccc' width='100%'>
                    <Tabs
                        variant='scrollable'
                        scrollButtons={false}
                        value={color}
                        onChange={basicTab2}
                        textColor="primary"
                        indicatorColor="primary"
                        
                    >
                        <Tab value="1" label="Scroll Button 1" />
                        <Tab value="2" label="Scroll Button 2" />
                        <Tab value="3" label="Scroll Button 3" />
                        <Tab value="4" label="Scroll Button 4" />
                        <Tab value="5" label="Scroll Button 5" />
                        <Tab value="6" label="Scroll Button 6" />
                        <Tab value="7" label="Scroll Button 7" />
                    </Tabs>
                </Box>
            </Box>
            <div className='codemirror' >
                <CodeMirror
                    value={`<Tabs
    variant='scrollable'
    scrollButtons='auto'
    value={color}
    onChange={basicTab2}
    textColor="primary"
    indicatorColor="primary"
    aria-label="primary tabs example"
    sx={{
        [& .{tabsClasses.scrollButtons}]: {
            '&.Mui-disabled': { opacity: 0.3 },
        },
    }}
>
    <Tab value="1" label="Scroll Button 1" />
    <Tab value="2" label="Scroll Button 2" />
    <Tab value="3" label="Scroll Button 3" />
    <Tab value="4" label="Scroll Button 4" />
    <Tab value="5" label="Scroll Button 5" />
    <Tab value="6" label="Scroll Button 6" />
</Tabs>`}    
                    theme='dark'
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                        console.log('value:', value);
                    }}
                />
            </div>

            <br/><br/><br/><br/><br/>
            <h2 className='styleguide-h2'> 수직 모드 Vertical </h2>
            <Box className='guideBox' display='flex'>
                <TabContext value={value}>
                    <Box sx={{ borderRight: '1px solid #ccc' }}>
                        <TabList orientation='vertical' onChange={basicTab} aria-label="lab API tabs example">
                            <Tab label="Item One" value="1" />
                            <Tab label="Item Two" value="2" />
                            <Tab label="Item Three" value="3" />
                        </TabList>
                    </Box>
                    <TabPanel value="1" >
                        ITEM 1
                    </TabPanel>
                    <TabPanel value="2">
                        ITEM 2
                    </TabPanel>
                    <TabPanel value="3">
                        ITEM 3
                    </TabPanel>
                </TabContext>
            </Box>
            
            <div className='codemirror' >
                <CodeMirror
                    value={`<TabContext value={value}>
    <Box sx={{ borderRight: '1px solid #ccc' }}>
        <TabList orientation='vertical' onChange={basicTab} aria-label="lab API tabs example">
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
        </TabList>
    </Box>
    <TabPanel value="1" >
        ITEM 1
    </TabPanel>
    <TabPanel value="2">
        ITEM 2
    </TabPanel>
    <TabPanel value="3">
        ITEM 3
    </TabPanel>
</TabContext>`}    
                    theme='dark'
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                        console.log('value:', value);
                    }}
                />
            </div>

            <br/><br/><br/><br/><br/>
            <h2 className='styleguide-h2'> 아이콘 탭 Icon Tab </h2>
            <Box className='guideBoxCenter' display='flex'>
                <Tabs value={color} onChange={basicTab2} aria-label="icon tabs example">
                    <Tab value="1" icon={<Phone />} aria-label="phone" />
                    <Tab value="2" icon={<Favorite />} aria-label="favorite" />
                    <Tab value="3" icon={<PersonPin />} aria-label="person" />
                </Tabs>
            </Box>
            
            <div className='codemirror' >
                <CodeMirror
                    value={` <Tabs value={color} onChange={basicTab2} aria-label="icon tabs example">
    <Tab value="1" icon={<Phone />} aria-label="phone" />
    <Tab value="2" icon={<Favorite />} aria-label="favorite" />
    <Tab value="3" icon={<PersonPin />} aria-label="person" />
</Tabs>`}    
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

export default TabPage;