import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { v4 as uuidv4 } from 'uuid';
// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }
const info=[
  {
    hobby:"I enjoy playing Soccer",
    id: uuidv4()
  },
  {
    hobby:" I also enjoy algorithmic problem solving",
    id:uuidv4()
  }
]
const divstyle={
  backgroundColor:"white",
  display:"flex",
  flexDirection:"column",
  gap:"10px"
}
const theme=["white","black","pink"]
const counts=0

function TodoList() {
  return (
    <ul>
      {info.map((todo) => (
        // here we are using the already generated id as the key.
        <li key={todo.id}>{todo.hobby}</li>
      ))}
    </ul>
  ) 
}
function ChangeState(){
  const [backgroundColor,setBackgroundColor]=useState(theme[0])
  const [count,setCount]=useState(counts)
  const onButtonClick=(color)=>()=>{
    setBackgroundColor(color)
    setCount(count+1)
  }
  const styles={border:"3px solid",color:backgroundColor}
  return(
    <div style={styles}>
      {theme.map((color) => (
          <button
          type="button"
          key={color}
          onClick={onButtonClick(color)}
        >
          {color},{count}
        </button>
      ))} 
    </div>
  )
  
}
function Contact(props){
  const style={
    color:props.color,
    border:props.border,
    backgroundColor:props.backgroundColor
  }
  
  
  return (
    <button style={style}>{props.text}</button>
  )
}
function App(){   
  return(
      <div>       
          <h1>--- Unnecessary Info About Me ---</h1>
          
             <TodoList />
             <div style={divstyle}><Contact text="Contact Me" color="black" border="3px solid black" backgroundColor="red" />
             <Contact text="Resume" color="black" border="3px solid black" backgroundColor="red" />
             <Contact text="Github" color="black" border="3px solid black" backgroundColor="red" /></div>
             <ChangeState/>
              
      </div>
      
  )
        }

export default App;
