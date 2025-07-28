import "./App.css";
import { List, Divider, Button, Input } from "antd";
import { useRef } from "react";
import TodoItem from "./components/TodoItem";
import { useTodo } from "./hooks/todoHooks";

function App() {
  const { data, setData, value, setValue, uncompleted, checkItem, deleteItem } =
    useTodo();

  const inputRef = useRef(null);

  const handleAdd = () => {
    console.log(23);
    if (value) {
      setData((item) => [
        ...item,
        {
          id: new Date().getTime(),
          value,
          done: false,
        },
      ]);
      inputRef.current.focus();
      setValue("");
    }
  };

  return (
    <div style={{ width: "500px", height: "500px" }}>
      <Divider orientation="left">代办事项</Divider>
      <List
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item style={{ marginLeft: 12 }}>
            <TodoItem
              item={item}
              checkItem={checkItem}
              deleteItem={deleteItem}
            />
          </List.Item>
        )}
      />
      <Input
        ref={inputRef}
        value={value}
        onChange={(val) => {
          setValue(val.target.value);
        }}
      />

      <div>
        未完成/ 总数
        {uncompleted} / {data.length}
      </div>
      <Button onClick={handleAdd} disabled={!value}>
        添加
      </Button>
    </div>
  );
}

export default App;
