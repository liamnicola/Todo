import { useState } from "react";
import { query, orderBy} from "firebase/firestore";
import useAuth from "./useAuth"

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
  const getTodos = () => getDocs(query(ref, orderBy("date", "asc")));
  const createTodo = (todo) => addDoc(ref, todo);

  //const getTodos = () => getDocs(query(ref, where("account", "==", currentUser),orderBy("date", "asc")));
  return { getTodos, createTodo };
}

export default useTodo;
