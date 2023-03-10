import { useEffect, useState } from "react"

export default function Filter({ users, setFilteredUsers }) {
  const [currentFilter, setCurrentFilter] = useState("")
  const handleChange = (e) => setCurrentFilter(e.target.value)

  useEffect(() => {
    const regex = new RegExp(currentFilter, "i")
    const filteredusers = users.filter((user) => regex.test(user.name))
    setFilteredUsers(filteredusers)
  }, [currentFilter, users])
  return (
    <form>
      <h1>Buscador de colaboradores</h1>
      <input type="text" onChange={handleChange} />
    </form>
  )
}
