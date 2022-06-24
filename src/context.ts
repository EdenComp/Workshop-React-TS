import { createContext } from 'react';
import { TaskType } from 'types/types';

export const TaskContext = createContext({
	tasks: [] as TaskType[],
	setTasks: (tasks: TaskType[]) => {},
});
