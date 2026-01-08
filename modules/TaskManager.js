class TaskManager {
    constructor() {
        this.tasks = []
    }

    addTask(text) {
        const newExample = {
            id: Date.now(),
            text: text,
            completed: false,
            createdAt: new Date().toISOString()
        }

        this.tasks.push(newExample)
        
        return newExample;
    }
}