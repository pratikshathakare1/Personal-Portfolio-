import { useEffect, useState } from "react";
import { getProjects, addProject } from "./services/projectService";

function App() {

  const [projects, setProjects] = useState([]);
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");

  const loadProjects = () =>{
    getProjects().then(res => setProjects(res.data));
  }

  useEffect(() => {
    loadProjects();
  }, []);

  const submitProject = () =>{
    addProject({title,description}).then(()=>{
      loadProjects();
      setTitle("");
      setDescription("");
    });
  }

  return (
    <div style={{padding:"20px"}}>

      <h1>My Portfolio</h1>

      <input placeholder="Title"
        value={title}
        onChange={e=>setTitle(e.target.value)}
      />

      <br/><br/>

      <textarea placeholder="Description"
        value={description}
        onChange={e=>setDescription(e.target.value)}
      />

      <br/><br/>

      <button onClick={submitProject}>Add Project</button>

      <hr/>

      {projects.map(p => (
        <div key={p.id}>
          <h3>{p.title}</h3>
          <p>{p.description}</p>
        </div>
      ))}

    </div>
  );
}

export default App;
