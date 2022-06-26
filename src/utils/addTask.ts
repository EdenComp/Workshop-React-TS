import { TaskType } from 'types/types';

export const addTask = (
	title: string,
	description: string,
	tasks: TaskType[],
	setTasks: (tasks: TaskType[]) => void,
) => {
	const id = tasks.length + 1;

	tasks.push({ id, title, description });
	setTasks([...tasks]);
};
