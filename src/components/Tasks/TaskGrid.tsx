import Grid from '@mui/material/Grid';

import TaskCard from 'components/Tasks/TaskCard';
import { TaskType } from 'types/types';

type TaskGridProps = {
	tasks: TaskType[];
};

export default function TaskGrid({ tasks }: TaskGridProps): JSX.Element {
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
