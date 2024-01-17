import { FC } from "hono/jsx"
import { TaskItem } from "./TaskManager"

interface TaskItemProps {
	task: TaskItem
	index: number
}

const TaskItem: FC<TaskItemProps> = (props) => {
	const { task, index } = props
	return (
		<li
			hx-patch={`/task/${index}/toggle`}
			hx-target="this"
			hx-swap="innerHTML"
			hx-trigger="click"
			class={["task-item", task.completed ? "task-completed" : ""].join(
				" "
			)}
		>
			{task.name}
		</li>
	)
}

export default TaskItem
