import { useContext } from 'react';
import Grid from '@mui/material/Grid';

import TaskCard from 'components/Tasks/TaskCard';
import { TaskContext } from 'context';

export default function TaskGrid(): JSX.Element {
	const { tasks } = useContext(TaskContext);

	return (
		<Grid container rowSpacing={1} columnSpacing={{ xs: 1 }}>
			{tasks.map((task) => (
				<Grid item xs={3} key={task.id}>
					<TaskCard title={task.title} description={task.description} />
				</Grid>
			))}
		</Grid>
	);
}
