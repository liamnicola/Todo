import { query, orderBy} from "firebase/firestore";

import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
} from "firebase/firestore";

function useTodo() {
  const db = getFirestore();
  const ref = collection(db, "todos");
  const getTodos = () => getDocs(query(ref, orderBy("date", "asc")));
  const createTodo = (todo) => addDoc(ref, todo);
  return { getTodos, createTodo };
}

export default useTodo;
