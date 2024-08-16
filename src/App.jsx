import { useState } from 'react'

function App() {
  const [inpvalue, setinpvalue] = useState("");
  const [values, setvalues] = useState([]);

  function onclickhandler() {
    setvalues([...values, inpvalue]);
    setinpvalue("");
  }

  function handledelete(index) {
    const newValues = values.filter((_, i) => i !== index);
    setvalues(newValues);
  }

  return (
    <div>
      <input
        className="border"
        type="text"
        value={inpvalue}
        onChange={(e) => setinpvalue(e.target.value)}
      />
      <button onClick={onclickhandler}>ADD task</button>
      <ul>
        {values.map((value, index) => (
          <li key={index}>
            {value}
            <button
              className="border bg-red-500 ml-2"
              onClick={() => handledelete(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
