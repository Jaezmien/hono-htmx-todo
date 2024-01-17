import { FC } from "hono/jsx"
import TaskForm from "./TaskForm"

export const Layout: FC = () => {
	return (
		<html>
			<head>
				<script
					src="https://unpkg.com/htmx.org@1.9.10"
					integrity="sha384-D1Kt99CQMDuVetoL1lrYwg5t+9QdHe7NLX/SoJYkXDFfX37iInKRy5xLSi8nO7UC"
					crossorigin="anonymous"
				></script>
				<link rel="stylesheet" href="style.css" />
			</head>
			<body>
				<div>
					<h1>Hono + HTMX Task List</h1>

					<ul
						hx-get="/tasks"
						hx-trigger="load, refresh-tasks from:body"
						hx-target="this"
						hx-swap="innerHTML"
					></ul>

					<TaskForm />
				</div>
			</body>
		</html>
	)
}
