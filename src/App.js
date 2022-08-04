import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setCount((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);

  useEffect(() => {
    console.log("I run only once.");
  }, []); // dependency가 없기 때문에 처음에 한번만 실행

  useEffect(() => {
    console.log("I run when 'keyword' changes.");
  }, [keyword]); // keyword가 변화할 때만 코드를 실행

  useEffect(() => {
    console.log("I run when 'count' changes.");
  }, [count]); // count가 변화할 때만 코드를 실행

  useEffect(() => {
    console.log("I run when keyword & count change");
  }, [keyword, count]); // keyword와 count 둘 다 지켜보다가 변할 때 코드 실행

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
