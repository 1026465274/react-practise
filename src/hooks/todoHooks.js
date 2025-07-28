import { useState, useMemo, useRef, useEffect, useCallback } from "react";

export function useTodo() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState();

  const first = useRef(true);

  const uncompleted = useMemo(() => {
    return data.filter((i) => !i.done).length;
  }, [data]);

  const checkItem = useCallback(
    (item, checked) => {
      setData((data) =>
        data.map((i) => item.id === i.id ? { ...item, done: checked } : item 
        )
      );
    },
    []
  );

  const deleteItem = useCallback(
    (item) => {
      setData((data) => data.filter((i) => i.id !== item.id));
    },
    []
  );

  useEffect(() => {
    const todoData = localStorage.getItem("data");

    if (todoData) {
      setData(JSON.parse(todoData));
    }
  }, []);

  useEffect(() => {
    if (first.current) {
      first.current = false;
    } else {
      localStorage.setItem("data", JSON.stringify(data));
    }
  }, [data]);

  return {
    data,
    setData,
    value,
    setValue,
    uncompleted,
    checkItem,
    deleteItem,
  };
}
