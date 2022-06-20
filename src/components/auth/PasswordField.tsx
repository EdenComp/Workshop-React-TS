import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

export default function PasswordField() {
	const show = false;

	return (
		<FormControl variant="outlined" sx={{ maxWidth: '300px' }}>
			<InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
			<OutlinedInput
				id="outlined-adornment-password"
				type={show ? 'text' : 'password'}
				endAdornment={
					<InputAdornment position="end">
						<IconButton aria-label="toggle password visibility" edge="end">
							{show ? <Visibility /> : <VisibilityOff />}
						</IconButton>
					</InputAdornment>
				}
				label="Password"
			/>
		</FormControl>
	);
}
