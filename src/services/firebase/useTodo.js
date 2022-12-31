import { useState } from "react";
import { query, orderBy } from "firebase/firestore";

import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  deleteDoc,
} from "firebase/firestore";

function useTodo() {
  const db = getFirestore();
  const ref = collection(db, "todos");
  const createTodo = (todo) => addDoc(ref, todo);
  const getTodos = () => getDocs(query(ref, orderBy("date", "asc")));
  return { getTodos, createTodo };
}

export default useTodo;
