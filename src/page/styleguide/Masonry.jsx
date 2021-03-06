import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { styled } from '@mui/material/styles';
import { motion,
        useAnimationFrame,
        } from 'framer-motion';
import { 
        Stack,
        Paper,
        Box,
        Card,
        CardContent,
        CardHeader,
        Avatar,

        Typography,
        IconButton,
        CardMedia,
        Button,
        CardActions,
        MenuItem,
        InputLabel,
        FormControl,
        Select,
        OutlinedInput,
        FormHelperText,
        ListItemText,
        Checkbox,
        Chip,
        } from "@mui/material";
        
import {
        SkipNext,
        SkipPrevious,
        PlayArrow,
        MoreVert,
        Favorite,
        Share,
        
        } from "@mui/icons-material";
import Masonry from '@mui/lab/Masonry';

const theme = createTheme({
    palette: {
        primary: {
        main: '#eb3175',
        contrastText: '#fff',
        },
    },
});
const heights = [150, 60, 90, 70, 110, 150, 130, 80, 80, 90, 100, 150, 60, 70, 80];

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  border: '1px solid #ccc',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

function MasonryPage() {
    
  return (
    <ThemeProvider theme={theme}>
        <div className="big-div">
            <h1> 
                <Link to="/" > Masonry </Link>
            </h1>
        </div>
       
        <div className='styleguide-content'>
            <h2 className='styleguide-h2'> Basic Masonry </h2>
            <Stack className='guideBox' spacing={2} direction='row' justifyContent='center' alignItems='center'>
                <Masonry columns={4} spacing={2}>
                    {heights.map((height, index) => (
                    <Item key={index} sx={{ height }}>
                        {index + 1}
                    </Item>
                    ))}
                </Masonry>
            </Stack>
            <div className='codemirror' >
                <CodeMirror
                    value={`const heights = [150, 60, 90, 70, 110, 150, 130, 80, 80, 90, 100, 150, 60, 70, 80];

const Item = styled(Paper)(({ theme }) => ({
...theme.typography.body2,
color: theme.palette.text.secondary,
border: '1px solid black',
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
}));

function MasonryPage() {
    return (
        <Masonry columns={4} spacing={2}>
            {heights.map((height, index) => (
            <Item key={index} sx={{ height }}>
                {index + 1}
            </Item>
            ))}
        </Masonry>
    );
};

export default MasonryPage;`}    
                    theme='dark'
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                        console.log('value:', value);
                    }}
                />
            </div>
            
            <br/><br/><br/><br/><br/>
            <h2 className='styleguide-h2'> Card with Masonry </h2>
            <div  className='guideBox' spacing={2} justifyContent='center' >
                <Masonry columns={3} spacing={3} style={{ paddingTop:'20px'}}>
                    <motion.div
                        initial={{ opacity: 0, 
                            y: 0,
                        }}
                        whileInView={{ opacity: 1,
                            y: -20,
                            transition: {
                            type: "spring",
                            bounce: 0.4,
                            duration: 5,
                            }
                        }}
                        viewport={{ amount : true }}
                    >
                        <Card sx={{ display: 'flex' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h5">
                                        Live From Space
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        Mac Miller
                                    </Typography>
                                </CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                    <IconButton aria-label="previous">
                                        {theme.direction === 'rtl' ? <SkipNext /> : <SkipPrevious />}
                                    </IconButton>
                                    <IconButton aria-label="play/pause">
                                        <PlayArrow sx={{ height: 38, width: 38 }} />
                                    </IconButton>
                                    <IconButton aria-label="next">
                                        {theme.direction === 'rtl' ? <SkipPrevious /> : <SkipNext />}
                                    </IconButton>
                                </Box>
                            </Box>
                            <CardMedia className='CardMedia_Image2' />
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, 
                            y: 0,
                        }}
                        whileInView={{ opacity: 1,
                            y: -20,
                            transition: {
                            type: "spring",
                            bounce: 0.4,
                            duration: 5,
                            }
                        }}
                        viewport={{ amount : true }}
                    >
                        <Card >
                            <CardHeader
                                avatar={
                                <Avatar sx={{ bgcolor: '#eb3175' }} aria-label="recipe">
                                    N
                                </Avatar>
                                }
                                action={
                                <IconButton aria-label="settings">
                                    <MoreVert />
                                </IconButton>
                                }
                                title="Nextree Card"
                                subheader="September 14, 2022"
                            />
                            <CardMedia className='CardMedia_Nextree'>
                                
                            </CardMedia>
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                ????????? ???????????? VVIP??? ????????? ??? ?????? ???????????????. ??? ????????? ????????? ?????? ???????????? ???????????? ?????? ????????????, 
                                ?????? ??????????????? ?????? ????????? ????????? ????????? ??? ????????????.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                <Favorite />
                                </IconButton>
                                <IconButton aria-label="share">
                                <Share />
                                </IconButton>
                                
                            </CardActions>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, 
                            y: 0,
                        }}
                        whileInView={{ opacity: 1,
                            y: -20,
                            transition: {
                            type: "spring",
                            bounce: 0.4,
                            duration: 5,
                            }
                        }}
                        viewport={{ amount : true }}
                    >
                        <Card sx={{ Width: 275 }}>
                            <CardMedia className='CardMedia_Image1'>

                            </CardMedia>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Platinum Nextree Card
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    ?????? 3??? ?????????
                                </Typography>
                                <Typography variant="body2" style={{ display: 'flex', flexWrap: 'wrap', width: 275, color: '#222' }}>
                                    ???????????? ?????? ????????? ????????? ????????????, ????????? 2?????? ???????????????. ??????????????? 1????????? ?????? ????????? ?????? 1?????? ???????????????.
                                </Typography>
                            </CardContent>
                            <CardActions style={{ display:'flex', justifyContent:'space-between'}} >
                                <Button size="small">??? ????????????</Button>
                                <Button size="small">????????????</Button>
                            </CardActions>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, 
                            y: 0,
                        }}
                        whileInView={{ opacity: 1,
                            y: -20,
                            transition: {
                            type: "spring",
                            bounce: 0.4,
                            duration: 5,
                            }
                        }}
                        viewport={{ amount : true }}
                    >
                        <Card sx={{ Width: 275 }}>
                            <CardMedia className='CardMedia_Image1'>

                            </CardMedia>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Platinum Nextree Card
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    ?????? 3??? ?????????
                                </Typography>
                                <Typography variant="body2" style={{ display: 'flex', flexWrap: 'wrap', width: 275, color: '#222' }}>
                                    ???????????? ?????? ????????? ????????? ????????????, ????????? 2?????? ???????????????. ??????????????? 1????????? ?????? ????????? ?????? 1?????? ???????????????.
                                </Typography>
                            </CardContent>
                            <CardActions style={{ display:'flex', justifyContent:'space-between'}} >
                                <Button size="small">??? ????????????</Button>
                                <Button size="small">????????????</Button>
                            </CardActions>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, 
                            y: 0,
                        }}
                        whileInView={{ opacity: 1,
                            y: -20,
                            transition: {
                            type: "spring",
                            bounce: 0.4,
                            duration: 5,
                            }
                        }}
                        viewport={{ amount : true }}
                    >
                        <Card sx={{ display: 'flex' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h5">
                                        Live From Space
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        Mac Miller
                                    </Typography>
                                </CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                    <IconButton aria-label="previous">
                                        {theme.direction === 'rtl' ? <SkipNext /> : <SkipPrevious />}
                                    </IconButton>
                                    <IconButton aria-label="play/pause">
                                        <PlayArrow sx={{ height: 38, width: 38 }} />
                                    </IconButton>
                                    <IconButton aria-label="next">
                                        {theme.direction === 'rtl' ? <SkipPrevious /> : <SkipNext />}
                                    </IconButton>
                                </Box>
                            </Box>
                            <CardMedia className='CardMedia_Image2' />
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, 
                            y: 0,
                        }}
                        whileInView={{ opacity: 1,
                            y: -20,
                            transition: {
                            type: "spring",
                            bounce: 0.4,
                            duration: 5,
                            }
                        }}
                        viewport={{ amount : true }}
                    >
                        <Card sx={{ Width: 275 }}>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Nextree Card
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                ?????? 2??? ?????????
                                </Typography>
                                <Typography variant="body2" style={{ display: 'flex', flexWrap: 'wrap', width: 275, color: '#222' }}>
                                    ???????????? ?????? ????????? ????????? ????????????, ????????? 2?????? ???????????????. ??????????????? 1????????? ?????? ????????? ?????? 1?????? ???????????????.
                                </Typography>
                            </CardContent>
                            <CardActions style={{ display:'flex', justifyContent:'space-between'}} >
                                <Button size="small">??? ????????????</Button>
                                <Button size="small">????????????</Button>
                            </CardActions>
                        </Card>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, 
                            y: 0,
                        }}
                        whileInView={{ opacity: 1,
                            y: -20,
                            transition: {
                            type: "spring",
                            bounce: 0.4,
                            duration: 5,
                            }
                        }}
                        viewport={{ amount : true }}
                    >
                        <Card >
                            <CardHeader
                                avatar={
                                <Avatar sx={{ bgcolor: '#eb3175' }} aria-label="recipe">
                                    N
                                </Avatar>
                                }
                                action={
                                <IconButton aria-label="settings">
                                    <MoreVert />
                                </IconButton>
                                }
                                title="Nextree Card"
                                subheader="September 14, 2022"
                            />
                            <CardMedia className='CardMedia_Nextree'>
                                
                            </CardMedia>
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                ????????? ???????????? VVIP??? ????????? ??? ?????? ???????????????. ??? ????????? ????????? ?????? ???????????? ???????????? ?????? ????????????, 
                                ?????? ??????????????? ?????? ????????? ????????? ????????? ??? ????????????.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                <Favorite />
                                </IconButton>
                                <IconButton aria-label="share">
                                <Share />
                                </IconButton>
                                
                            </CardActions>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, 
                            y: 0,
                        }}
                        whileInView={{ opacity: 1,
                            y: -20,
                            transition: {
                            type: "spring",
                            bounce: 0.4,
                            duration: 5,
                            }
                        }}
                        viewport={{ amount : true }}
                    >
                        <Card sx={{ Width: 275 }}>
                            <CardMedia className='CardMedia_Image1'>

                            </CardMedia>
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Platinum Nextree Card
                                </Typography>
                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    ?????? 3??? ?????????
                                </Typography>
                                <Typography variant="body2" style={{ display: 'flex', flexWrap: 'wrap', width: 275, color: '#222' }}>
                                    ???????????? ?????? ????????? ????????? ????????????, ????????? 2?????? ???????????????. ??????????????? 1????????? ?????? ????????? ?????? 1?????? ???????????????.
                                </Typography>
                            </CardContent>
                            <CardActions style={{ display:'flex', justifyContent:'space-between'}} >
                                <Button size="small">??? ????????????</Button>
                                <Button size="small">????????????</Button>
                            </CardActions>
                        </Card>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, 
                            y: 0,
                        }}
                        whileInView={{ opacity: 1,
                            y: -20,
                            transition: {
                            type: "spring",
                            bounce: 0.4,
                            duration: 5,
                            }
                        }}
                        viewport={{ amount : true }}
                    >
                        <Card sx={{ display: 'flex' }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <CardContent sx={{ flex: '1 0 auto' }}>
                                    <Typography component="div" variant="h5">
                                        Live From Space
                                    </Typography>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">
                                        Mac Miller
                                    </Typography>
                                </CardContent>
                                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                    <IconButton aria-label="previous">
                                        {theme.direction === 'rtl' ? <SkipNext /> : <SkipPrevious />}
                                    </IconButton>
                                    <IconButton aria-label="play/pause">
                                        <PlayArrow sx={{ height: 38, width: 38 }} />
                                    </IconButton>
                                    <IconButton aria-label="next">
                                        {theme.direction === 'rtl' ? <SkipPrevious /> : <SkipNext />}
                                    </IconButton>
                                </Box>
                            </Box>
                            <CardMedia className='CardMedia_Image2' />
                        </Card>
                    </motion.div>
                </Masonry>
            </div >
            <div className='codemirror' >
                <CodeMirror
                    value={`<Masonry columns={3} spacing={3}>
    <Card sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                    Live From Space
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    Mac Miller
                </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                <IconButton aria-label="previous">
                    {theme.direction === 'rtl' ? <SkipNext /> : <SkipPrevious />}
                </IconButton>
                <IconButton aria-label="play/pause">
                    <PlayArrow sx={{ height: 38, width: 38 }} />
                </IconButton>
                <IconButton aria-label="next">
                    {theme.direction === 'rtl' ? <SkipPrevious /> : <SkipNext />}
                </IconButton>
            </Box>
        </Box>
        <CardMedia className='CardMedia_Image2' />
    </Card>

    <Card >
        <CardHeader
            avatar={
            <Avatar sx={{ bgcolor: '#eb3175' }} aria-label="recipe">
                N
            </Avatar>
            }
            action={
            <IconButton aria-label="settings">
                <MoreVert />
            </IconButton>
            }
            title="Nextree Card"
            subheader="September 14, 2022"
        />
        <CardMedia className='CardMedia_Nextree'>
            
        </CardMedia>
        <CardContent>
            <Typography variant="body2" color="text.secondary">
            ????????? ???????????? VVIP??? ????????? ??? ?????? ???????????????. ??? ????????? ????????? ?????? ???????????? ???????????? ?????? ????????????, 
            ?????? ??????????????? ?????? ????????? ????????? ????????? ??? ????????????.
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
            <Favorite />
            </IconButton>
            <IconButton aria-label="share">
            <Share />
            </IconButton>
            
        </CardActions>
        
    </Card>
    
    <Card sx={{ Width: 275 }}>
        <CardMedia className='CardMedia_Image1'>

        </CardMedia>
        <CardContent>
            <Typography variant="h5" component="div">
                Platinum Nextree Card
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                ?????? 3??? ?????????
            </Typography>
            <Typography variant="body2" style={{ display: 'flex', flexWrap: 'wrap', width: 275, color: '#222' }}>
                ???????????? ?????? ????????? ????????? ????????????, ????????? 2?????? ???????????????. ??????????????? 1????????? ?????? ????????? ?????? 1?????? ???????????????.
            </Typography>
        </CardContent>
        <CardActions style={{ display:'flex', justifyContent:'space-between'}} >
            <Button size="small">??? ????????????</Button>
            <Button size="small">????????????</Button>
        </CardActions>
    </Card>

    <Card sx={{ Width: 275 }}>
        <CardMedia className='CardMedia_Image1'>

        </CardMedia>
        <CardContent>
            <Typography variant="h5" component="div">
                Platinum Nextree Card
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                ?????? 3??? ?????????
            </Typography>
            <Typography variant="body2" style={{ display: 'flex', flexWrap: 'wrap', width: 275, color: '#222' }}>
                ???????????? ?????? ????????? ????????? ????????????, ????????? 2?????? ???????????????. ??????????????? 1????????? ?????? ????????? ?????? 1?????? ???????????????.
            </Typography>
        </CardContent>
        <CardActions style={{ display:'flex', justifyContent:'space-between'}} >
            <Button size="small">??? ????????????</Button>
            <Button size="small">????????????</Button>
        </CardActions>
    </Card>


    <Card sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                    Live From Space
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    Mac Miller
                </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                <IconButton aria-label="previous">
                    {theme.direction === 'rtl' ? <SkipNext /> : <SkipPrevious />}
                </IconButton>
                <IconButton aria-label="play/pause">
                    <PlayArrow sx={{ height: 38, width: 38 }} />
                </IconButton>
                <IconButton aria-label="next">
                    {theme.direction === 'rtl' ? <SkipPrevious /> : <SkipNext />}
                </IconButton>
            </Box>
        </Box>
        <CardMedia className='CardMedia_Image2' />
    </Card>

    <Card sx={{ Width: 275 }}>
        <CardContent>
            <Typography variant="h5" component="div">
                Nextree Card
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
            ?????? 2??? ?????????
            </Typography>
            <Typography variant="body2" style={{ display: 'flex', flexWrap: 'wrap', width: 275, color: '#222' }}>
                ???????????? ?????? ????????? ????????? ????????????, ????????? 2?????? ???????????????. ??????????????? 1????????? ?????? ????????? ?????? 1?????? ???????????????.
            </Typography>
        </CardContent>
        <CardActions style={{ display:'flex', justifyContent:'space-between'}} >
            <Button size="small">??? ????????????</Button>
            <Button size="small">????????????</Button>
        </CardActions>
    </Card>
    
    <Card >
        <CardHeader
            avatar={
            <Avatar sx={{ bgcolor: '#eb3175' }} aria-label="recipe">
                N
            </Avatar>
            }
            action={
            <IconButton aria-label="settings">
                <MoreVert />
            </IconButton>
            }
            title="Nextree Card"
            subheader="September 14, 2022"
        />
        <CardMedia className='CardMedia_Nextree'>
            
        </CardMedia>
        <CardContent>
            <Typography variant="body2" color="text.secondary">
            ????????? ???????????? VVIP??? ????????? ??? ?????? ???????????????. ??? ????????? ????????? ?????? ???????????? ???????????? ?????? ????????????, 
            ?????? ??????????????? ?????? ????????? ????????? ????????? ??? ????????????.
            </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
            <Favorite />
            </IconButton>
            <IconButton aria-label="share">
            <Share />
            </IconButton>
            
        </CardActions>
    </Card>

    <Card sx={{ Width: 275 }}>
        <CardMedia className='CardMedia_Image1'>

        </CardMedia>
        <CardContent>
            <Typography variant="h5" component="div">
                Platinum Nextree Card
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                ?????? 3??? ?????????
            </Typography>
            <Typography variant="body2" style={{ display: 'flex', flexWrap: 'wrap', width: 275, color: '#222' }}>
                ???????????? ?????? ????????? ????????? ????????????, ????????? 2?????? ???????????????. ??????????????? 1????????? ?????? ????????? ?????? 1?????? ???????????????.
            </Typography>
        </CardContent>
        <CardActions style={{ display:'flex', justifyContent:'space-between'}} >
            <Button size="small">??? ????????????</Button>
            <Button size="small">????????????</Button>
        </CardActions>
    </Card>

    <Card sx={{ display: 'flex' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                    Live From Space
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    Mac Miller
                </Typography>
            </CardContent>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                <IconButton aria-label="previous">
                    {theme.direction === 'rtl' ? <SkipNext /> : <SkipPrevious />}
                </IconButton>
                <IconButton aria-label="play/pause">
                    <PlayArrow sx={{ height: 38, width: 38 }} />
                </IconButton>
                <IconButton aria-label="next">
                    {theme.direction === 'rtl' ? <SkipPrevious /> : <SkipNext />}
                </IconButton>
            </Box>
        </Box>
        <CardMedia className='CardMedia_Image2' />
    </Card>
</Masonry>`}    
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
};

export default MasonryPage;
