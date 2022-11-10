import {useState} from "react"

function Form(){
  const [nombre, setNombre] = useState("")
  return(
    <>
      <h1>Formulario</h1>
      <form>
        <input 
        type="text"
        value={nombre}
        onChange={(e)=>{
          setNombre(e.target.value);
        }}
        ></input>
      </form>
      <button onClick={(e) => {
        e.preventDefault()
        alert(`el mensaje recibido es ${nombre}`)
      }}>Enviar</button>
      <section>{nombre}</section>
    </>
  )
}

export default Form