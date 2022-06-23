import React from 'react';
import { TaskType } from 'types/types';

export const addTask = (
	title: string,
	description: string,
	tasks: TaskType[],
	setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>,
) => {
	const id = tasks.length + 1;

	tasks.push({ id, title, description });
	setTasks([...tasks]);
};
