import { useState} from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => {setToDo(event.target.value)};
  const onSubmit = (event) => {
    event.preventDefault();
    if(toDo==="")return;
    setToDos((curArr) => {
      const newArr=[toDo, ...curArr];
      console.log(newArr);
      return newArr;
    });
    setToDo("");
  };
  const onLiClick = (event) => {
    const targetId = event.target.id;
    setToDos((curArr)=>{
      let newArr = [];
      for(let i=0; i<curArr.length; i++){
        if(i===parseInt(targetId))continue;
        console.log(i, targetId, curArr[i]);
        newArr = [...newArr, curArr[i]];
      }
      
      return newArr;
    });
  };
  
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do.."
        />
        <button>Add to Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index)=><li key={index} onClick={onLiClick} id={index} >{item}</li>)}
      </ul>
    </div>
  );
}

export default App;