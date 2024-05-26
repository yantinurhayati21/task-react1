import "./index.css";

const biodata={
  id:1,
	nama:"Yanti Nurhayati",
	born: "21 November 2002",
	age : "21 Tahun",
	hobbies : ["Sleeping", "Eating" , "Playing"],
  foto:"../public/foto.jpg",
}

export default function App(){
  return(
    <div className="app">   
      <h1 className="title">Tugas 1 Kelompok Galaksi</h1>
      <div className="card">
        <h1>Biodata</h1>
        <img src={biodata.foto} alt="" />
        <p>
          {biodata.nama}
        </p>
        <p>
          {biodata.born}
        </p>
        <p>
          {biodata.age}
        </p> 
        {biodata.hobbies.map((hobby,index)=>(
          <button key={index} className="hoby">
            {hobby}
          </button>      
        ))}   
      </div>
    </div>
  )
}