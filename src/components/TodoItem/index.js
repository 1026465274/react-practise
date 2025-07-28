import { Checkbox } from "antd";

function TodoItem({ item, checkItem, deleteItem }) {
  return (
    <>
      <Checkbox
        checked={item.done}
        onChange={(e) => {
          checkItem(item, e.target.checked);
        }}
      ></Checkbox>
      <span className={item.done ? "todo-item" : ""}>{item.value}</span>
      {item.done ? <span> (已完成)</span> : <span> (未完成)</span>}
      <a
        href="#"
        style={{ marginLeft: 12 }}
        onClick={() => {
          deleteItem(item);
        }}
      >
        删除
      </a>
    </>
  );
}

export default TodoItem;
