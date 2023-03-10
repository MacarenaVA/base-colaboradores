import React from "react"

const Table = ({ users }) => {
  return (
    <div>
      <h2> Lista de colaboradores</h2>

      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <th>{user.name}</th>
              <th>{user.email}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
