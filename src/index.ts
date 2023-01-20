// import { v4 as uuidv4 } from 'uuid';
// const uuid = uuidv4();
// console.log(uuid);

const list = document.querySelector<HTMLUListElement>("#list");
const form = document.getElementById("new-task-form") as HTMLFormElement | null;
const input = document.querySelector<HTMLInputElement>("#new-task-description");