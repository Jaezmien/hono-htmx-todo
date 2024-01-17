import { FC } from "hono/jsx"
import TaskItem from "./TaskItem"
import TaskManager from "./TaskManager"

const TaskItems: FC = () => {
	const tasks = TaskManager.tasks

	if (tasks.length === 0) {
		return <p class="no-tasks">You don't have any tasks! :(</p>
	}

	return (
		<>
			{tasks.map((t, i) => {
				return <TaskItem task={t} index={i}></TaskItem>
			})}
		</>
	)
}

export default TaskItems
