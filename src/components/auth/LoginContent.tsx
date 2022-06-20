import { useState } from 'react';
import { Stack } from '@mui/material';
import MonochromePhotosIcon from '@mui/icons-material/MonochromePhotos';

import EmailField from './EmailField';
import PasswordField from './PasswordField';
import ConnectButton from './ConnectButton';

export default function LoginContent() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [show, setShow] = useState(false);

	return (
		<Stack spacing={2} justifyContent="center" alignItems="center">
			<MonochromePhotosIcon fontSize="large" />
			<h1>Login</h1>
			<EmailField email={email} setEmail={setEmail} />
			<PasswordField />
			<ConnectButton />
		</Stack>
	);
}
