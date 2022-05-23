import SearchIcon from '@mui/icons-material/Search';
import {Box, TextField} from '@mui/material';

import * as React from 'react';

export default function SearchBar () : JSX.Element
{
    const [search, setSearch] = React.useState('');

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    return (
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <SearchIcon />
            <TextField id="appbar-search-field" label="Research" variant="standard" />
        </Box>
    )
}