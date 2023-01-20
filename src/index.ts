// import { v4 as uuidv4 } from 'uuid';
// const uuid = uuidv4();
// console.log(uuid);

const list = document.querySelector<HTMLUListElement>("#list");
const form = document.getElementById("new-task-form") as HTMLFormElement | null;
const input = document.querySelector<HTMLInputElement>("#new-task-description");

form?.addEventListener("submit", (e) => {
   e.preventDefault();
   const task = input?.value;
   if (task) {
      const li = document.createElement("li");
      li.innerText = task;
      list?.appendChild(li);
   }
});

// Path: src\index.ts