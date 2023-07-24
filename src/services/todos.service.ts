export async function getTodos() {
  return fetch("https://dummyjson.com/todos").then((result) => result.json());
}
