import { ChangeEvent } from 'react';
import { TextField } from '@mui/material';

type EmailProps = {
	email: string;
	setEmail: (email: string) => void;
};

export default function EmailField({ email, setEmail }: EmailProps) {
	return (
		<TextField
			id="outlined-basic"
			label="Email"
			variant="outlined"
			fullWidth
			value={email}
			onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
			sx={{
				maxWidth: '300px',
			}}
		/>
	);
}
