import "./App.css";
import { List, Checkbox, Divider, Button, Input } from "antd";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState();

  const handleAdd = () => {
    if (value) {
      setData((item) => [
        ...item,
        {
          id: new Date().getTime(),
          value,
          done: false,
        },
      ]);
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
            <Checkbox
              checked={item.done}
              onChange={(e) => {
                setData((data) =>
                  data.map((i) => {
                    if (i.value === item.value) {
                      i.done = e.target.checked;
                    }
                    return i;
                  })
                );
              }}
            ></Checkbox>
            <span className={item.done ? "todo-item" : ""}>{item.value}</span>
            {item.done ? <span> (已完成)</span> : <span> (未完成)</span>}
            <a
              style={{ marginLeft: 12 }}
              onClick={() => {
                setData((data) => data.filter((i) => i.id === item.id));
              }}
            >
              删除
            </a>
          </List.Item>
        )}
      />
      <Input
        value={value}
        onChange={(val) => {
          setValue(val.target.value);
        }}
      />
      <Button onClick={handleAdd} disabled={!value}>
        添加
      </Button>
    </div>
  );
}

export default App;
