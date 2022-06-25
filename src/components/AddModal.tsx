import { useState, useContext } from 'react';
import { Box, Button, Modal, TextField } from '@mui/material';
import AddButton from 'components/AddButton';
import { TaskContext } from 'context';
import { addTask } from 'utils/addTask';

const style = {
	position: 'absolute' as const,
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
	color: '#000',
	textAlign: 'center',
};

export default function AddModal(): JSX.Element {
	const [open, setOpen] = useState<boolean>(false);
	const { tasks, setTasks } = useContext(TaskContext);
	const [title, setTitle] = useState<string>('');
	const [description, setDescription] = useState<string>('');

	return (
		<>
			<AddButton setOpen={setOpen} />
			<Modal
				open={open}
				onClose={() => setOpen(false)}
				aria-labelledby="add-task-modal"
				aria-describedby="add-task-modal-description"
			>
				<Box sx={style}>
					<TextField
						id="title"
						label="Title"
						variant="filled"
						value={title}
						onChange={(event) => {
							setTitle(event.target.value);
						}}
					/>
					<br />
					<br />
					<TextField
						id="description"
						label="Description"
						variant="filled"
						value={description}
						onChange={(event) => {
							setDescription(event.target.value);
						}}
					/>
					<br />
					<br />
					<Button
						variant="contained"
						color="primary"
						onClick={() => {
							setOpen(false);
							addTask(title, description, tasks, setTasks);
						}}
					>
						Ajouter
					</Button>
				</Box>
			</Modal>
		</>
	);
}
