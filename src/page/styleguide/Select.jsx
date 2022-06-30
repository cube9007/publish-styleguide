import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';

import { 
        Stack,
        Box,
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
        } from "@mui/icons-material";

const theme = createTheme({
    palette: {
        primary: {
        main: '#eb3175',
        contrastText: '#fff',
        },
    },
});
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

function SelectPage() {
  const [age, setAge] = React.useState('');

  const basicSelect = (event) => {
    setAge(event.target.value);
  };

  const [personName, setPersonName] = React.useState([]);

  const BasicMultiSelect = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  return (
    <ThemeProvider theme={theme}>
        <div className="big-div">
            <h1> 
                <Link to="/" > Select </Link>
            </h1>
        </div>
       
        <div className='styleguide-content'>
            <h2 className='styleguide-h2'> 기본 선택 Basic Select </h2>
            <p className='styleguide-p'> 기본 유형은 3가지로 Outlined(default) / filled / standard 가 있습니다. </p>
            <Stack className='guideBox' spacing={2} direction='row' justifyContent='center' alignItems='center'>
                <FormControl style={{ width: '200px' }} >
                    <InputLabel >Age</InputLabel>
                    <Select
                    value={age}
                    label="Age"
                    onChange={basicSelect}
                    >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant='filled' style={{ width: '200px' }}>
                    <InputLabel >Age</InputLabel>
                    <Select
                    value={age}
                    label="Age"
                    onChange={basicSelect}
                    >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <FormControl variant='standard' style={{ width: '200px' }}>
                    <InputLabel >Age</InputLabel>
                    <Select
                    value={age}
                    label="Age"
                    onChange={basicSelect}
                    >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Stack>
            <div className='codemirror' >
                <CodeMirror
                    value={`function SelectPage() {
const [age, setAge] = React.useState('');

const basicSelect = (event) => {
setAge(event.target.value);
};
        
    return (
        <FormControl style={{ width: '200px' }}>
            <InputLabel >Age</InputLabel>
            <Select
                value={age}
                label="Age"
                onChange={basicSelect}
            >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
        </FormControl>
    );
};

export default SelectPage;`}    
                    theme='dark'
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                        console.log('value:', value);
                    }}
                />
            </div>
            
            <br/><br/><br/><br/><br/>
            <h2 className='styleguide-h2'> 사이즈 Size </h2>
            <p className='styleguide-p'> 사이즈 유형은 2가지로 small / medium(default) 가 있습니다. </p>
            <Stack className='guideBox' spacing={2} direction='row' justifyContent='center' alignItems='center'>
                <FormControl style={{ width: '200px' }}  size='small' >
                    <InputLabel >small</InputLabel>
                    <Select
                    value={age}
                    label="small"
                    onChange={basicSelect}
                    >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <FormControl style={{ width: '200px' }}>
                    <InputLabel >medium</InputLabel>
                    <Select
                    value={age}
                    label="medium"
                    onChange={basicSelect}
                    >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Stack>
            <div className='codemirror' >
                <CodeMirror
                    value={`<FormControl style={{ width: '200px' }}  size='small' >
    <InputLabel >Age</InputLabel>
    <Select
    value={age}
    label="Age"
    onChange={basicSelect}
    >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
    </Select>
</FormControl>
<FormControl style={{ width: '200px' }}>
    <InputLabel >Age</InputLabel>
    <Select
    value={age}
    label="Age"
    onChange={basicSelect}
    >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
    </Select>
</FormControl>`}    
                    theme='dark'
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                        console.log('value:', value);
                    }}
                />
            </div>

            <br/><br/><br/><br/><br/>
            <h2 className='styleguide-h2'> 다른 속성 other props </h2>
            <Stack className='guideBox' spacing={2} direction='row' justifyContent='center' alignItems='center'>
                <FormControl disabled style={{ width: '200px' }}>
                    <InputLabel >Age</InputLabel>
                    <Select
                    value={age}
                    label="Age"
                    onChange={basicSelect}
                    >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <FormHelperText>Disabled</FormHelperText>
                </FormControl>
                <FormControl error style={{ width: '200px' }}>
                    <InputLabel >Age</InputLabel>
                    <Select
                    value={age}
                    label="Age"
                    onChange={basicSelect}
                    >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <FormHelperText>Error</FormHelperText>
                </FormControl>
                <FormControl  style={{ width: '200px' }}>
                    <InputLabel >Age</InputLabel>
                    <Select
                    value={age}
                    label="Age"
                    onChange={basicSelect}
                    inputProps={{ readOnly: true }}
                    >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <FormHelperText>Read Only</FormHelperText>
                </FormControl>
                <FormControl required style={{ width: '200px' }}>
                    <InputLabel >Age</InputLabel>
                    <Select
                    value={age}
                    label="Age"
                    onChange={basicSelect}
                    >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    <FormHelperText>Required</FormHelperText>
                </FormControl>
            </Stack>
            <div className='codemirror' >
                <CodeMirror
                    value={`<FormControl disabled style={{ width: '200px' }}>
    <InputLabel >Age</InputLabel>
    <Select
    value={age}
    label="Age"
    onChange={basicSelect}
    >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
    </Select>
    <FormHelperText>Disabled</FormHelperText>
</FormControl>
<FormControl error style={{ width: '200px' }}>
    <InputLabel >Age</InputLabel>
    <Select
    value={age}
    label="Age"
    onChange={basicSelect}
    >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
    </Select>
    <FormHelperText>Error</FormHelperText>
</FormControl>
<FormControl  style={{ width: '200px' }}>
    <InputLabel >Age</InputLabel>
    <Select
    value={age}
    label="Age"
    onChange={basicSelect}
    inputProps={{ readOnly: true }}
    >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
    </Select>
    <FormHelperText>Read Only</FormHelperText>
</FormControl>
<FormControl required style={{ width: '200px' }}>
    <InputLabel >Age</InputLabel>
    <Select
    value={age}
    label="Age"
    onChange={basicSelect}
    >
    <MenuItem value={10}>Ten</MenuItem>
    <MenuItem value={20}>Twenty</MenuItem>
    <MenuItem value={30}>Thirty</MenuItem>
    </Select>
    <FormHelperText>Required</FormHelperText>
</FormControl>`}    
                    theme='dark'
                    height='500px'
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                        console.log('value:', value);
                    }}
                />
            </div>

            <br/><br/><br/><br/><br/>
            <h2 className='styleguide-h2'> 기본 복수 선택 Basic Multi Select </h2>
            <Stack className='guideBox' spacing={2} direction='row' justifyContent='center' alignItems='center'>
                <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel>Name</InputLabel>
                    <Select
                    multiple
                    value={personName}
                    onChange={BasicMultiSelect}
                    input={<OutlinedInput label="Name" />}
                    MenuProps={MenuProps}
                    >
                    {names.map((name) => (
                        <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, personName, theme)}
                        >
                        {name}
                        </MenuItem>
                    ))}
                    </Select>
                </FormControl>
            </Stack>
            <div className='codemirror' >
                <CodeMirror
                    value={`const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
PaperProps: {
    style: {
    maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    width: 250,
    },
},
};

const names = [
'Oliver Hansen',
'Van Henry',
'April Tucker',
'Ralph Hubbard',
'Omar Alexander',
'Carlos Abbott',
'Miriam Wagner',
'Bradley Wilkerson',
'Virginia Andrews',
'Kelly Snyder',
];

function getStyles(name, personName, theme) {
    return {
    fontWeight:
        personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
    };
}
function SelectPage() {
    const [personName, setPersonName] = React.useState([]);

    const BasicMultiSelect = (event) => {
    const {
        target: { value },
    } = event;
    setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
    );
    };
    return (
        <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel>Name</InputLabel>
            <Select
            multiple
            value={personName}
            onChange={BasicMultiSelect}
            input={<OutlinedInput label="Name" />}
            MenuProps={MenuProps}
            >
            {names.map((name) => (
                <MenuItem
                key={name}
                value={name}
                style={getStyles(name, personName, theme)}
                >
                {name}
                </MenuItem>
            ))}
            </Select>
        </FormControl>
    );
};

export default SelectPage;`}    
                    theme='dark'
                    height='500px'
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                        console.log('value:', value);
                    }}
                />
            </div>

            <br/><br/><br/><br/><br/>
            <h2 className='styleguide-h2'> 체크 복수 선택 Check Multi Select </h2>
            <Stack className='guideBox' spacing={2} direction='row' justifyContent='center' alignItems='center'>
                <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel >Tag</InputLabel>
                    <Select
                    multiple
                    value={personName}
                    onChange={BasicMultiSelect}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                    >
                    {names.map((name) => (
                        <MenuItem key={name} value={name}>
                        <Checkbox checked={personName.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                        </MenuItem>
                    ))}
                    </Select>
                </FormControl>
            </Stack>
            <div className='codemirror' >
                <CodeMirror
                    value={`<FormControl sx={{ m: 1, width: 300 }}>
    <InputLabel >Tag</InputLabel>
    <Select
    multiple
    value={personName}
    onChange={BasicMultiSelect}
    input={<OutlinedInput label="Tag" />}
    renderValue={(selected) => selected.join(', ')}
    MenuProps={MenuProps}
    >
    {names.map((name) => (
        <MenuItem key={name} value={name}>
        <Checkbox checked={personName.indexOf(name) > -1} />
        <ListItemText primary={name} />
        </MenuItem>
    ))}
    </Select>
</FormControl>`}    
                    theme='dark'
                    
                    extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                        console.log('value:', value);
                    }}
                />
            </div>

            <br/><br/><br/><br/><br/>
            <h2 className='styleguide-h2'> 칩 복수 선택 Chip Multi Select </h2>
            <Stack className='guideBox' spacing={2} direction='row' justifyContent='center' alignItems='center'>
                <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel>Chip</InputLabel>
                    <Select
                    multiple
                    value={personName}
                    onChange={BasicMultiSelect}
                    input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                            <Chip key={value} label={value} />
                        ))}
                        </Box>
                    )}
                    MenuProps={MenuProps}
                    >
                    {names.map((name) => (
                        <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, personName, theme)}
                        >
                        {name}
                        </MenuItem>
                    ))}
                    </Select>
                </FormControl>
            </Stack>
            <div className='codemirror' >
                <CodeMirror
                    value={`<FormControl sx={{ m: 1, width: 300 }}>
    <InputLabel>Chip</InputLabel>
    <Select
    multiple
    value={personName}
    onChange={BasicMultiSelect}
    input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
    renderValue={(selected) => (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
        {selected.map((value) => (
            <Chip key={value} label={value} />
        ))}
        </Box>
    )}
    MenuProps={MenuProps}
    >
    {names.map((name) => (
        <MenuItem
        key={name}
        value={name}
        style={getStyles(name, personName, theme)}
        >
        {name}
        </MenuItem>
    ))}
    </Select>
</FormControl>`}    
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

export default SelectPage;
