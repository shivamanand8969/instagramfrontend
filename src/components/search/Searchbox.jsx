import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

// Example users list for search
const users = [
    { label: 'John Doe' },
    { label: 'Jane Smith' },
    { label: 'Alice Johnson' },
    { label: 'Bob Brown' },
    { label: 'Charlie Davis' },
    { label: 'Diana Prince' },
    { label: 'Bruce Wayne' },
    { label: 'Clark Kent' },
    { label: 'Wade Wilson' },
    { label: 'Peter Parker' },
];

export default function SearchBox() {
    return (
        <Autocomplete
            disablePortal
            options={users}
            sx={{ width: '100%' }}
            renderInput={(params) => <TextField {...params} label="Search Users" />}
        />
    );
}
