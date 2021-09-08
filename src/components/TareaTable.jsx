import React from 'react'

const TareaTable = props => (
  <div className="table-responsive">
      <table className="table">
    <thead>
      <tr>
        <th>Correo</th>
        <th>Tarea</th>
        <th>Descripción</th>
        <th>Opciones</th>
      </tr>
    </thead>
    <tbody>
      {props.tareas.length > 0 ? (
        props.tareas.map(tarea => (
          <tr key={tarea.id}>
            <td>{tarea.correo}</td>
            <td>{tarea.tarea}</td>
            <td>{tarea.descripcion}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(tarea)
                }}
                className="btn btn-warning"
              >
                Editar
              </button>
              <button
                onClick={() => props.deleteTarea(tarea.id)}
                className="btn btn-danger"
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No hay tareas</td>
        </tr>
      )}
    </tbody>
  </table>
  </div>
  
)

export default TareaTable