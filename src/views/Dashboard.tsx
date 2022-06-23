import Grid from '@mui/material/Grid';
import TaskCard from 'components/TaskCard';
import db from 'db/example.json';

export default function Dashboard(): JSX.Element {
	return (
		<Grid container rowSpacing={1} columnSpacing={{ xs: 1 }}>
			{db.tasks.map((task) => (
				<Grid item xs={3} key={task.id}>
					<TaskCard title={task.title} description={task.description} />
				</Grid>
			))}
		</Grid>
	);
}
