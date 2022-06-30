import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { styled } from '@mui/material/styles';

import { 
        Box,
        Stack,
        Card,
        CardHeader,
        CardMedia,
        Collapse,
        Avatar,
        IconButton,
        CardActions,
        CardContent,
        Button,
        Typography,
        TextField, 
        } from "@mui/material";
        
import {AccountCircle,
        Favorite,
        Share,
        SkipNext,
        SkipPrevious,
        PlayArrow,
        ExpandMore,
        MoreVert,
        } from "@mui/icons-material";


const theme = createTheme({
    palette: {
        primary: {
        main: '#eb3175',
        contrastText: '#fff',
        },
    },
});

const ExpandMoreContent = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

function CardPage() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  return (
    <ThemeProvider theme={theme}>
        <div className="big-div">
            <h1> 
                <Link to="/" > Card </Link>
            </h1>
        </div>
        <div className='styleguide-content'>
            <h2 className='styleguide-h2'> 기본 카드 Basic Card </h2>
            <p className='styleguide-p'> 기본적인 카드 구성입니다. </p>
            <div className='guideBoxCenter' style={{ backgroundColor: '#eee' }}>
                <Card sx={{ Width: 275 }}>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Nextree Card
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        월급 2배 강화권
                        </Typography>
                        <Typography variant="body2" style={{ display: 'flex', flexWrap: 'wrap', width: 275, color: '#222' }}>
                            넥스트리 수석 이상의 직급이 사용하면, 월급이 2배로 강화됩니다. 유효기간은 1달이며 카드 사용시 카드 1장이 소모됩니다.
                        </Typography>
                    </CardContent>
                    <CardActions style={{ display:'flex', justifyContent:'space-between'}} >
                        <Button size="small">더 알아보기</Button>
                        <Button size="small">사용하기</Button>
                    </CardActions>
                </Card>
            </div>
            <div className='codemirror' >
                <CodeMirror
                    value={`<Card sx={{ Width: 275 }}>
    <CardContent>
        <Typography variant="h5" component="div">
            Nextree Card
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        월급 2배 강화권
        </Typography>
        <Typography variant="body2" style={{ display: 'flex', flexWrap: 'wrap', width: 275, color: '#222' }}>
            넥스트리 수석 이상의 직급이 사용하면, 월급이 2배로 강화됩니다. 유효기간은 1달이며 카드 사용시 카드 1장이 소모됩니다.
        </Typography>
    </CardContent>
    <CardActions style={{ display:'flex', justifyContent:'space-between'}} >
        <Button size="small">더 알아보기</Button>
        <Button size="small">사용하기</Button>
    </CardActions>
</Card>`}    
                    theme='dark'
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                        console.log('value:', value);
                    }}
                />
            </div>

            <br/><br/><br/><br/><br/>
            <h2 className='styleguide-h2'> 아웃 라인 Outlined </h2>
            <div className='guideBoxCenter' style={{ backgroundColor: '#eee' }}>
                <Card sx={{ Width: 275 }} variant='outlined' >
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Nextree Card
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        월급 2배 강화권
                        </Typography>
                        <Typography variant="body2" style={{ display: 'flex', flexWrap: 'wrap', width: 275, color: '#222' }}>
                            넥스트리 수석 이상의 직급이 사용하면, 월급이 2배로 강화됩니다. 유효기간은 1달이며 카드 사용시 카드 1장이 소모됩니다.
                        </Typography>
                    </CardContent>
                    <CardActions style={{ display:'flex', justifyContent:'space-between'}} >
                        <Button size="small">더 알아보기</Button>
                        <Button size="small">사용하기</Button>
                    </CardActions>
                </Card>
            </div>
            <div className='codemirror' >
                <CodeMirror
                    value={`<Card variant='outlined' >`}    
                    theme='dark'
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                        console.log('value:', value);
                    }}
                />
            </div>

            <br/><br/><br/><br/><br/>
            <h2 className='styleguide-h2'> 확장 카드 ExpandMore Card </h2>
            <p className='styleguide-p'> 아래 확장 버튼을 눌러 세부사항을 볼 수 있습니다. </p>
            <div className='guideBoxCenter' style={{ backgroundColor: '#eee' }}>
                <Card sx={{ maxWidth: 345 }}>
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
                        이것은 넥스트리 VVIP만 소지할 수 있는 카드입니다. 이 카드를 소지할 경우 넥스트리 식사권이 무료 제공되며, 각종 넥스트리의 복지 혜택을 무료로 즐기실 수 있습니다.
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                        <Favorite />
                        </IconButton>
                        <IconButton aria-label="share">
                        <Share />
                        </IconButton>
                        <ExpandMoreContent
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                        >
                            <ExpandMore />
                        </ExpandMoreContent>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                        <Typography paragraph>기타 혜택:</Typography>
                        <Typography paragraph>
                            👍 대표님과 데이트를 신청할 수 있습니다.
                        </Typography>
                        <Typography paragraph>
                            👍  모든 직원 정보를 확인할 수 있으며 관리할 수 있습니다.
                        </Typography>
                        <Typography paragraph>
                            👍 원하는 근무 형태를 선택할 수 있습니다. 사무실 근무 / 재택근무 / 휴가
                        </Typography>
                        <Typography>
                            👍 사무실 내 원하는 자리에서 일할 수 있으며, 점심시간이 무제한입니다.
                        </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            </div>
            <div className='codemirror' >
                <CodeMirror
                    value={`<Card sx={{ maxWidth: 345 }}>
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
        이것은 넥스트리 VVIP만 소지할 수 있는 카드입니다. 이 카드를 소지할 경우 넥스트리 식사권이 무료 제공되며, 
        각종 넥스트리의 복지 혜택을 무료로 즐기실 수 있습니다.
        </Typography>
    </CardContent>
    <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Favorite />
        </IconButton>
        <IconButton aria-label="share">
        <Share />
        </IconButton>
        <ExpandMoreContent
        expand={expanded}
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more"
        >
            <ExpandMore />
        </ExpandMoreContent>
    </CardActions>
    <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography paragraph>기타 혜택:</Typography>
        <Typography paragraph>
            👍 대표님과 데이트를 신청할 수 있습니다.
        </Typography>
        <Typography paragraph>
            👍  모든 직원 정보를 확인할 수 있으며 관리할 수 있습니다.
        </Typography>
        <Typography paragraph>
            👍 원하는 근무 형태를 선택할 수 있습니다. 사무실 근무 / 재택근무 / 휴가
        </Typography>
        <Typography>
            👍 사무실 내 원하는 자리에서 일할 수 있으며, 점심시간이 무제한입니다.
        </Typography>
        </CardContent>
    </Collapse>
</Card>`}    
                    theme='dark'
                    height='500px'
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                        console.log('value:', value);
                    }}
                />
            </div>
            
            <br/><br/><br/><br/><br/>
            <h2 className='styleguide-h2'> 미디어 Media </h2>
            <p className='styleguide-p'> 기본적인 카드 구성에 이미지가 추가된 카드입니다. </p>
            <div className='guideBoxCenter' style={{ backgroundColor: '#eee' }}>
                <Card sx={{ Width: 275 }}>
                    <CardMedia className='CardMedia_Image1'>

                    </CardMedia>
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Platinum Nextree Card
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            월급 3배 강화권
                        </Typography>
                        <Typography variant="body2" style={{ display: 'flex', flexWrap: 'wrap', width: 275, color: '#222' }}>
                            넥스트리 수석 이상의 직급이 사용하면, 월급이 2배로 강화됩니다. 유효기간은 1달이며 카드 사용시 카드 1장이 소모됩니다.
                        </Typography>
                    </CardContent>
                    <CardActions style={{ display:'flex', justifyContent:'space-between'}} >
                        <Button size="small">더 알아보기</Button>
                        <Button size="small">사용하기</Button>
                    </CardActions>
                </Card>
            </div>
            <div className='codemirror' >
                <CodeMirror
                    value={`<CardMedia className='CardMedia_Image1'>

</CardMedia>`}    
                    theme='dark'
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                        console.log('value:', value);
                    }}
                />
            </div>

            <br/><br/><br/><br/><br/>
            <h2 className='styleguide-h2'> 컨트롤 UI Controls </h2>
            <p className='styleguide-p'> 기본적인 카드 구성에 이미지가 추가된 카드입니다. </p>
            <div className='guideBoxCenter' style={{ backgroundColor: '#eee' }}>
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
            </div>
            <div className='codemirror' >
                <CodeMirror
                    value={`<Card sx={{ display: 'flex' }}>
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
</Card>`}    
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

export default CardPage;