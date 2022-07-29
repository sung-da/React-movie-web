import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCount((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() => {
    console.log("I run only once.");
  }, []);

  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]); // keyword가 변화할 때 코드를 실행, count가 변화할 때는 실행되지 않음

  useEffect(() => {
    console.log("I run when 'count' changes.");
  }, [count]);

  useEffect(() => {
    console.log("I run when keyword & count change");
  }, [keyword, count]);

  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="Search here..."
      />
      <h1>{count}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
