import { serve } from "@hono/node-server"
import { serveStatic } from "@hono/node-server/serve-static"
import { Hono } from "hono"
import { Layout } from "./Layout"
import TaskForm from "./TaskForm"
import TaskItem from "./TaskItem"
import TaskItems from "./TaskItems"
import TaskManager from "./TaskManager"

const app = new Hono()

app.post("/task", async (c) => {
	const body = await c.req.parseBody()
	const taskName = body["name"] as string

	if (!taskName?.trim()) {
		c.res.headers.set("HX-Reswap", "none")

		c.status(400)
		return c.text("Invalid")
	}

	TaskManager.addTask(taskName)

	c.res.headers.set("HX-Trigger", "refresh-tasks")
	c.status(200)
	return c.html(<TaskForm />)
})

app.patch("/task/:taskIndex/toggle", async (c) => {
	const index = parseInt(c.req.param("taskIndex"))
	const task = TaskManager.toggleTask(index)

	c.res.headers.set("HX-Trigger", "refresh-tasks")
	return c.html(<TaskItem task={task} index={index} />)
})

app.get("/tasks", (c) => {
	return c.html(<TaskItems />)
})

app.use("/*", serveStatic({ root: "./public" }))

app.get("/", (c) => {
	return c.html(<Layout />)
})

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
	fetch: app.fetch,
	port,
})
