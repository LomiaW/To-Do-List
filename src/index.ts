import { v4 as uuidv4 } from 'uuid';

const list = document.querySelector<HTMLUListElement>("#list");
const form = document.getElementById("new-task-form") as HTMLFormElement | null;
const input = document.querySelector<HTMLInputElement>("#new-task-description");

form?.addEventListener("submit", (e) => {
   e.preventDefault();

   if (input?.value) {

      const task = {
         id: uuidv4(),
         description: input.value,
         completed: false,
         createAt: new Date()
      }

      const li = document.createElement("li");
      li.innerHTML = `
         <input type="checkbox" class="checkbox">
         <span>${task.description}</span>
         <button class="delete">Remove</button>
      `;
      li.setAttribute("data-id", task.id);
      list?.appendChild(li);

   } else {
      alert("Please enter a task");
   }
});



// Path: src\index.ts