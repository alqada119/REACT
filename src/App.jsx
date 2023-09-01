import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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
function App(){
  const welcome=[
    {
      name:'ahmed',
      age:'21',
      hobbies:'not react',
      langauges:'arabic,english'
    }
  ]
    
  return(
      <div>
        
        <ul>
          <h1>Unnecessary Info About Me</h1>
           {welcome.map(function ele(eles,index){
            return <ul><li>{eles.name}</li><li>{eles.age}</li><li>{eles.hobbies}</li></ul>
          })}
          </ul>
      </div>
      
  )
        }

export default App;
