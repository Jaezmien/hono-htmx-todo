export type TaskItem = {
	name: string
	completed: boolean
}

class TaskManager {
	tasks: TaskItem[]

	constructor() {
		this.tasks = []
	}

	getTasks() {
		return this.tasks
	}

	addTask(name: string) {
		this.tasks.push({
			name: name,
			completed: false,
		})
	}

	toggleTask(index: number) {
		this.tasks[index].completed = !this.tasks[index].completed

		return this.tasks[index]
	}
}

export default new TaskManager()
