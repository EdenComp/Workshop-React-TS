import React from 'react';

import { Box, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar(): JSX.Element {
	const [search, setSearch] = React.useState('');

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSearch(event.target.value);
	};

	return (
		<Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
			<SearchIcon />
			<TextField id="appbar-search-field" label="Research" variant="standard" />
		</Box>
	);
}
