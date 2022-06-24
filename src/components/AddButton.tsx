import { useContext } from 'react';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { TaskContext } from 'context';
import { addTask } from 'utils/addTask';

export default function AddButton(): JSX.Element {
	const { tasks, setTasks } = useContext(TaskContext);

	return (
		<IconButton
			color="primary"
			aria-label="Add a task"
			component="span"
			style={{ position: 'absolute', right: '10px', bottom: '10px' }}
			onClick={() => addTask('Task 42', 'Ma description', tasks, setTasks)}
		>
			<AddCircleIcon fontSize="large" />
		</IconButton>
	);
}
