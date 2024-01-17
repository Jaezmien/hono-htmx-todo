import { FC } from "hono/jsx"

const TaskForm: FC = () => {
	return (
		<form hx-post="/task" hx-target="this" hx-swap="outerHTML">
			<input
				type="text"
				name="name"
				id="name"
				placeholder="Lorem Ipsum..."
				autocomplete="false"
			/>
			<button type="submit">Add task!</button>
		</form>
	)
}

export default TaskForm
