import { useState } from 'react';
import AddModal from 'components/AddModal';
import TaskGrid from 'components/Tasks/TaskGrid';

import { TaskType } from 'types/types';
import { TaskContext } from 'context';
import db from 'db/example.json';

export default function Dashboard(): JSX.Element {
	const [tasks, setTasks] = useState<TaskType[]>(db.tasks);

	return (
		<>
			<TaskContext.Provider value={{ tasks, setTasks }}>
				<TaskGrid />
				<AddModal />
			</TaskContext.Provider>
		</>
	);
}
