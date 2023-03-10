import { useState } from "react"
import "./App.css"
import bd from "./bd.json"
import Filter from "./components/Filter"
import Input from "./components/Input"
import Table from "./components/List"

function App() {
  const [users, setUsers] = useState(bd)
  const [filteredUsers, setFilteredUsers] = useState(users)
  return (
    <div>
      <Filter users={users} setFilteredUsers={setFilteredUsers}></Filter>
      <Input users={users} setUsers={setUsers} />
      <Table users={filteredUsers} />
    </div>
  )
}

export default App
