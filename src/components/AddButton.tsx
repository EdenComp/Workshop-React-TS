import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';

type AddButtonProps = {
	setOpen: (open: boolean) => void;
};

export default function AddButton({ setOpen }: AddButtonProps): JSX.Element {
	return (
		<IconButton
			color="primary"
			aria-label="Add a task"
			component="span"
			style={{ position: 'absolute', right: '10px', bottom: '10px' }}
			onClick={() => setOpen(true)}
		>
			<AddCircleIcon fontSize="large" />
		</IconButton>
	);
}
