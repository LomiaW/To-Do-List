import { v4 as uuidv4 } from 'uuid';

// declare a type for a task
type Task = {
   id: string;
   description: string;
   completed: boolean;
   createAt: Date
}

const list = document.querySelector<HTMLUListElement>("#list");
const form = document.getElementById("new-task-form") as HTMLFormElement | null;
const input = document.querySelector<HTMLInputElement>("#new-task-description");
const tasks: Task[] = loadTasks();
tasks.forEach(addNewTask);

form?.addEventListener("submit", (e) => {
   e.preventDefault();

   if (input?.value) {

      const task: Task = {
         id: uuidv4(),
         description: input.value,
         completed: false,
         createAt: new Date()
      }
      tasks.push(task); // add the task to the array
      addNewTask(task); // add the task to the list
      input.value = ""; // clear the input

   } else {
      alert("Please enter a task");
   }
});

function addNewTask(task: Task) {
   const li = document.createElement("li");
   const label = document.createElement("label");
   const checkbox = document.createElement("input");
   checkbox.type = "checkbox";
   checkbox.checked = task.completed;
   checkbox.addEventListener("change", () => {
      task.completed = checkbox.checked;
      saveTasks();
   });

   label.append(checkbox, task.description);
   li.append(label);
   list?.appendChild(li);
}

function saveTasks() {
   localStorage.setItem("TASKS", JSON.stringify(tasks));
}

function loadTasks() {
   const taskJSON = localStorage.getItem("TASKS");
   if (taskJSON == null) return [];
   return JSON.parse(taskJSON);
}

// Path: src\index.ts