import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

import {ToggleButton,
        ToggleButtonGroup,
        } from "@mui/material";
        
import {FormatAlignLeft,
        FormatAlignCenter,
        FormatAlignRight,
        FormatAlignJustify,
        FormatBold,
        FormatItalic,
        FormatUnderlined,
        FormatColorFill,
        ArrowDropDown,
        ViewQuilt,
        ViewModule,
        ViewList,
        Check,
        } from "@mui/icons-material";

const theme = createTheme({
    palette: {
        primary: {
        main: '#eb3175',
        contrastText: '#fff',
        },
    },
});

function ToggleButtons() {
  const [exclusive, setExclusive] = React.useState('left');

  const handleExclusive = (event, newExclusive) => {
    setExclusive(newExclusive);
  };

  const [multiple, setMultiple] = React.useState(() => ['bold']);

  const handleMultiple = (event, newMultiple) => {
    setMultiple(newMultiple);
  };

  const [toggleColor, setToggleColor] = React.useState('desc1');

  const HandleToggleColor = (event, newToggleColor) => {
    setToggleColor(newToggleColor);
  };

  const [toggleVertical, setToggleVertical] = React.useState('desc1');

  const HandleToggleVertical = (event, newToggleVertical) => {
    setToggleVertical(newToggleVertical);
  };

  const [selected, setSelected] = React.useState(false);

  return (
    <ThemeProvider theme={theme}>
        <div className="big-div">
            <h1 > 
                <Link to="/" > Toggle Button </Link>
            </h1>
        </div>
        <div className='styleguide-content'>
            <h2 className='styleguide-h2'> 독점 선택 Exclusive selection </h2>
            <p className='styleguide-p' > 한 옵션을 선택하면 다른 옵션이 해제됩니다. </p>
            <div className='guideBoxCenter'>
                <ToggleButtonGroup
                    value={exclusive}
                    exclusive
                    onChange={handleExclusive}
                    >
                    <ToggleButton value="left" aria-label="left aligned">
                        <FormatAlignLeft />
                    </ToggleButton>
                    <ToggleButton value="center" aria-label="centered">
                        <FormatAlignCenter />
                    </ToggleButton>
                    <ToggleButton value="right" aria-label="right aligned">
                        <FormatAlignRight />
                    </ToggleButton>
                    <ToggleButton value="justify" aria-label="justified" disabled>
                        <FormatAlignJustify />
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
            <div className='codemirror' >
                <CodeMirror
                    value={`function ToggleButtons() {
    const [exclusive, setExclusive] = React.useState('left');

    const handleExclusive = (event, newExclusive) => {
        setExclusive(newExclusive);
    };
    return (
        <ToggleButtonGroup
            value={exclusive}
            exclusive
            onChange={handleExclusive}
            >
            <ToggleButton value="left" aria-label="left aligned">
                <FormatAlignLeft />
            </ToggleButton>
            <ToggleButton value="center" aria-label="centered">
                <FormatAlignCenter />
            </ToggleButton>
            <ToggleButton value="right" aria-label="right aligned">
                <FormatAlignRight />
            </ToggleButton>
            <ToggleButton value="justify" aria-label="justified" disabled>
                <FormatAlignJustify />
            </ToggleButton>
        </ToggleButtonGroup>
    );
};`}    
                    theme='dark'
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                        console.log('value:', value);
                    }}
                />
            </div>

            <br /><br /><br /><br /><br />
            <h2 className='styleguide-h2'> 다중 선택 Multiple selection </h2>
            <p className='styleguide-p' > 옵션에서 여러 옵션을 선택할 수 있습니다. </p>
            <div className='guideBoxCenter'>
                <ToggleButtonGroup
                    value={multiple}
                    onChange={handleMultiple}
                    aria-label="text formatting"
                    >
                    <ToggleButton value="bold" aria-label="bold">
                        <FormatBold />
                    </ToggleButton>
                    <ToggleButton value="italic" aria-label="italic">
                        <FormatItalic />
                    </ToggleButton>
                    <ToggleButton value="underlined" aria-label="underlined">
                        <FormatUnderlined />
                    </ToggleButton>
                    <ToggleButton value="color" aria-label="color" disabled>
                        <FormatColorFill />
                        <ArrowDropDown />
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
            <div className='codemirror' >
                <CodeMirror
                    value={`function ToggleButtons() {
    const [multiple, setMultiple] = React.useState(() => ['bold']);
    
    const handleMultiple = (event, newMultiple) => {
        setMultiple(newMultiple);
    };
    
    return (
        <ToggleButtonGroup
            value={multiple}
            onChange={handleMultiple}
            aria-label="text formatting"
            >
            <ToggleButton value="bold" aria-label="bold">
                <FormatBold />
            </ToggleButton>
            <ToggleButton value="italic" aria-label="italic">
                <FormatItalic />
            </ToggleButton>
            <ToggleButton value="underlined" aria-label="underlined">
                <FormatUnderlined />
            </ToggleButton>
            <ToggleButton value="color" aria-label="color" disabled>
                <FormatColorFill />
                <ArrowDropDown />
            </ToggleButton>
        </ToggleButtonGroup>
    );
};

export default ToggleButtons;`}    
                    theme='dark'
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                        console.log('value:', value);
                    }}
                />
            </div>

            <br /><br /><br /><br /><br />
            <h2 className='styleguide-h2'> 사이즈 Size </h2>
            <p className='styleguide-p' > 작은 버튼 = small / 기본 값 = medium / 큰 버튼 = large </p>
            <div className='guideBoxCenter'>
                <ToggleButtonGroup
                    className="toggleButtonGroup"
                    size='small'
                    value={exclusive}
                    exclusive
                    onChange={handleExclusive}
                    >
                    <ToggleButton value="left" aria-label="left aligned">
                        <FormatAlignLeft />
                    </ToggleButton>
                    <ToggleButton value="center" aria-label="centered">
                        <FormatAlignCenter />
                    </ToggleButton>
                    <ToggleButton value="right" aria-label="right aligned">
                        <FormatAlignRight />
                    </ToggleButton>
                    <ToggleButton value="justify" aria-label="justified" disabled>
                        <FormatAlignJustify />
                    </ToggleButton>
                </ToggleButtonGroup>
                <ToggleButtonGroup
                    className="toggleButtonGroup"
                    value={exclusive}
                    exclusive
                    onChange={handleExclusive}
                    >
                    <ToggleButton value="left" aria-label="left aligned">
                        <FormatAlignLeft />
                    </ToggleButton>
                    <ToggleButton value="center" aria-label="centered">
                        <FormatAlignCenter />
                    </ToggleButton>
                    <ToggleButton value="right" aria-label="right aligned">
                        <FormatAlignRight />
                    </ToggleButton>
                    <ToggleButton value="justify" aria-label="justified" disabled>
                        <FormatAlignJustify />
                    </ToggleButton>
                </ToggleButtonGroup>
                <ToggleButtonGroup
                    size='large'
                    value={exclusive}
                    exclusive
                    onChange={handleExclusive}
                    >
                    <ToggleButton value="left" aria-label="left aligned">
                        <FormatAlignLeft />
                    </ToggleButton>
                    <ToggleButton value="center" aria-label="centered">
                        <FormatAlignCenter />
                    </ToggleButton>
                    <ToggleButton value="right" aria-label="right aligned">
                        <FormatAlignRight />
                    </ToggleButton>
                    <ToggleButton value="justify" aria-label="justified" disabled>
                        <FormatAlignJustify />
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
            <div className='codemirror' >
                <CodeMirror
                    value={`<ToggleButtonGroup size='small' > ''' </ToggleButtonGroup>
<ToggleButtonGroup > ''' </ToggleButtonGroup>
<ToggleButtonGroup size='large' > ''' </ToggleButtonGroup>`}    
                    theme='dark'
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                        console.log('value:', value);
                    }}
                />
            </div>

            <br /><br /><br /><br /><br />
            <h2 className='styleguide-h2'> 색상 Color </h2>
            <div className='guideBoxCenter'>
            <ToggleButtonGroup
                color="primary"
                value={toggleColor}
                exclusive
                onChange={HandleToggleColor}
            >
                <ToggleButton value="desc1">Toggle1</ToggleButton>
                <ToggleButton value="desc2">Toggle2</ToggleButton>
                <ToggleButton value="desc3">Toggle3</ToggleButton>
            </ToggleButtonGroup>
            </div>
            <div className='codemirror' >
                <CodeMirror
                    value={`<ToggleButtonGroup
    color="primary"
    value={toggleColor}
    exclusive
    onChange={HandleToggleColor}
>
    <ToggleButton value="desc1">Toggle1</ToggleButton>
    <ToggleButton value="desc2">Toggle2</ToggleButton>
    <ToggleButton value="desc3">Toggle3</ToggleButton>
</ToggleButtonGroup>`}    
                    theme='dark'
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                        console.log('value:', value);
                    }}
                />
            </div>

            <br /><br /><br /><br /><br />
            <h2 className='styleguide-h2'> 수직 버튼 Vertical Button </h2>
            <p className='styleguide-p' > orientation="vertical"을 이용해 수직으로 토글 버튼을 만들 수 있습니다. </p>
            <div className='guideBoxCenter'>
                <ToggleButtonGroup
                    orientation="vertical"
                    value={toggleVertical}
                    exclusive
                    onChange={HandleToggleVertical}
                    >
                    <ToggleButton value="list" aria-label="list">
                        <ViewList />
                    </ToggleButton>
                    <ToggleButton value="module" aria-label="module">
                        <ViewModule />
                    </ToggleButton>
                    <ToggleButton value="quilt" aria-label="quilt">
                        <ViewQuilt />
                    </ToggleButton>
                </ToggleButtonGroup>
            </div>
            <div className='codemirror' >
                <CodeMirror
                    value={`<ToggleButtonGroup
    orientation="vertical"
    value={toggleVertical}
    exclusive
    onChange={HandleToggleVertical}
    >
    <ToggleButton value="list" aria-label="list">
        <ViewList />
    </ToggleButton>
    <ToggleButton value="module" aria-label="module">
        <ViewModule />
    </ToggleButton>
    <ToggleButton value="quilt" aria-label="quilt">
        <ViewQuilt />
    </ToggleButton>
</ToggleButtonGroup>`}    
                    theme='dark'
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                        console.log('value:', value);
                    }}
                />
            </div>

            <br /><br /><br /><br /><br />
            <h2 className='styleguide-h2'> 독립형 토글 버튼 Stand Alone Toggle Button </h2>
            <div className='guideBoxCenter'>
                <ToggleButton
                    value="check"
                    color='primary'
                    selected={selected}
                    onChange={() => {
                        setSelected(!selected);
                    }}
                >
                    <Check />
                </ToggleButton>
            </div>
            <div className='codemirror' >
                <CodeMirror
                    value={`<ToggleButton
    value="check"
    selected={selected}
    color='primary'
    onChange={() => {
        setSelected(!selected);
    }}
>
    <CheckIcon />
</ToggleButton>`}    
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

export default ToggleButtons;
