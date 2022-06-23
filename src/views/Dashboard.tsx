import { useState } from 'react';
import AddButton from 'components/AddButton';
import TaskGrid from 'components/Tasks/TaskGrid';

import { TaskType } from 'types/types';
import db from 'db/example.json';

export default function Dashboard(): JSX.Element {
	const [tasks, setTasks] = useState<TaskType[]>(db.tasks);

	return (
		<>
			<TaskGrid tasks={tasks} />
			<AddButton tasks={tasks} setTasks={setTasks} />
		</>
	);
}
