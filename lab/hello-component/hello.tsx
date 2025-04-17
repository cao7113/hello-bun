import React, { useState } from 'react';

// 定义组件的 Props 接口
interface HelloComponentProps {
  initialName?: string;
  className?: string;
}

// 创建 Hello 组件
export function HelloComponent({ initialName = 'World', className = '' }: HelloComponentProps) {
  // 使用 useState hook 管理状态
  const [name, setName] = useState(initialName);
  const [count, setCount] = useState(0);

  // 处理点击事件
  const handleClick = () => {
    setCount(count + 1);
  };

  // 处理输入变化
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <div className={`hello ${className}`}>
      <h1>Hello, {name}!</h1>
      <p>You clicked the button {count} times</p>
      
      <div className="controls">
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter your name"
          className="px-4 py-2 border rounded"
        />
        <button 
          onClick={handleClick}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Click me
        </button>
      </div>
    </div>
  );
}

export default HelloComponent;