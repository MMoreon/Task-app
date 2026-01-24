class TaskManager {
    constructor(){
        this.lastId = 0;
        this.tasks = []
    }
    addTask(textTask){
        const task = {
            id: ++this.lastId,
            text: textTask,
            completed: false,
            createdAt: new Date()
        };

        this.tasks.push(task)

        return task
    }
}