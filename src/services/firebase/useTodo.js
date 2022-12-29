import { useState } from "react";
import { query, orderBy, deleteDoc } from "firebase/firestore";

import {
  doc,
  addDoc,
  collection,
  getDocs,
  getFirestore,
} from "firebase/firestore";

function useTodo() {
  const db = getFirestore();
  const ref = collection(db, "todos");
  const createTodo = (todo) => addDoc(ref, todo);
  const getTodos = () => getDocs(query(ref, orderBy("date", "asc")));
  const deleteTodo = (todo) => deleteDoc(ref, todo);
  return { getTodos, createTodo, deleteTodo };
}

export default useTodo;
