// from left to right : logo insta, Instagram, search bar, menu déroulant avec profil
import React from 'react';

import { AppBar, Box, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';
import { MonochromePhotos, AccountCircle } from '@mui/icons-material';

import SearchBar from 'components/SearchBar';

const userMenu = ['Edit profile', 'Logout'];

export default function TopBar(): JSX.Element {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorEl(null);
	};

	return (
		<Box
			sx={{
				backgroundColor: '#673ab7',
				flexGrow: 1,
			}}
		>
			<AppBar position="static" sx={{ backgroundColor: '#8561c5' }}>
				<Toolbar>
					{/* <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="app-icon"> */}
					<MonochromePhotos fontSize="large" />
					{/* </IconButton> */}
					<Typography variant="h6" component="div" noWrap sx={{ flexGrow: 1, fontWeight: 700 }}>
						InstaCram
					</Typography>
					<SearchBar />
					<Box sx={{ flexGrow: 1 }} />
					<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
						<Tooltip title="Open settings">
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<AccountCircle fontSize="large" />
							</IconButton>
						</Tooltip>
						<Menu
							id="appbar-user-menu"
							sx={{ mt: '50px' }}
							anchorEl={anchorEl}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorEl)}
							onClose={handleCloseUserMenu}
						>
							{userMenu.map((item) => (
								<MenuItem key={item} onClick={handleCloseUserMenu}>
									<Typography textAlign="center">{item}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</AppBar>
		</Box>
	);
}
