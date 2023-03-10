import { useState } from "react"
import { getId } from "../helpers/getId"

export default function Input({ users, setUsers }) {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")

  const addUser = (email, name) => {
    const newUsers = [...users, { id: getId(), name, email }]
    setUsers(newUsers)
  }
  const handleSubmit = (e) => {
    e.preventDefault() //evita que se recarge la página
    addUser(email, name)
    setEmail("")
    setName("")
  }

  return (
    <div>
      <h2> Ingresar colaborador</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <label htmlFor="email">Correo:</label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          pattern="^[\w][\w+-\.]*@[\w-]+(\.[\w-]+)+$"
        />
        <br />
        <button>Enviar</button>
      </form>
    </div>
  )
}
