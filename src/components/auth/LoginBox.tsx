import Box from '@mui/material/Box';
import LoginContent from './LoginContent';

export default function LoginBox() {
	return (
		<Box
			justifyContent="center"
			alignItems="center"
			display="flex"
			sx={{
				bgcolor: 'background.paper',
				border: 1,
				borderRadius: '16px',
				position: 'absolute',
				left: '50%',
				top: '50%',
				height: '500px',
				width: '500px',
				transform: 'translate(-50%, -50%)',
			}}
		>
			<LoginContent />
		</Box>
	);
}
