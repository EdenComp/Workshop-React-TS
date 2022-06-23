import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { TaskType } from 'types/types';
import { addTask } from 'utils/addTask';

type AddButtonProps = {
	tasks: TaskType[];
	setTasks: (tasks: TaskType[]) => void;
};

export default function AddButton({ tasks, setTasks }: AddButtonProps): JSX.Element {
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
