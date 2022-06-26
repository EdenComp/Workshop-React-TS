import { createContext } from 'react';
import { TaskType } from 'types/types';

export const TaskContext = createContext({
	tasks: [] as TaskType[],
	setTasks: (tasks: TaskType[]) => {}, // eslint-disable-line @typescript-eslint/no-unused-vars
});
