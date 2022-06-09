import { useState } from "react";

function App() {
  
  const [job, setJob] = useState('')
  const [list, setList] = useState(()=>{
    const getJobs = JSON.parse(localStorage.getItem("jobs"))
    return getJobs ?? []
  });
  const [even, setEven] = useState(list)
  const [place, getPlace] = useState('');

  const handlelocostorage =(index)=>{
          const getList = JSON.parse(localStorage.getItem("jobs"))
          getList.splice(index,1);
          setEven(()=>{
              const jsons = JSON.stringify(getList)
              localStorage.setItem("jobs",jsons)
              setList(getList)
          })
  }

  const handleList =()=>{
    if(job === ''){
      getPlace('Vui lòng nhập công việc')
    }else{
    setList(reps => {   
      const saveJob = [...reps, job]
      const jsonJob = JSON.stringify(saveJob)
      localStorage.setItem("jobs",jsonJob)
      return saveJob
    })
    setJob('')
  }
  }
  
  return (
    <div className="App" style={{padding:20}}>
      <input 
      value={job}
      onChange={e=>setJob(e.target.value)} placeholder ={place}/>
      <button onClick={handleList}>add</button>
      <ul>
        <h4>Công việc cần làm hôm nay</h4>
        {list.map((job, index)=>(
          <div key={index} className="container">
              <li className="JobsCss">{job}</li>
              <span onClick={()=>handlelocostorage(index)} style={{cursor: "pointer"}}>x</span>
          </div>
        ))}
      </ul>
    </div>
  )
}


export default App;
