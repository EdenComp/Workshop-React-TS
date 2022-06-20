import TaskCard from 'components/TaskCard';

import Grid from '@mui/material/Grid';

export default function Dashboard(): JSX.Element {
	return (
		<>
			<Grid container rowSpacing={1} columnSpacing={{ xs: 1 }}>
				{tasks.map((task) => (
					<Grid item xs={3} key={task.id}>
						<TaskCard title={task.title} description={task.description} />
					</Grid>
				))}
			</Grid>
		</>
	);
}

const tasks = [
	{
		id: 1,
		title: 'Task 1',
		description: 'This is a task description',
	},
	{
		id: 2,
		title: 'Task 2',
		description: 'This is another task description',
	},
];
