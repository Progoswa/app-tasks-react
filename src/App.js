import React, {useState} from 'react';
import TareaTable from './components/TareaTable';
import AgregarTarea from './components/AgregarTarea';
import EditarTareas from './components/EditarTarea';
import { v4 as uuidv4 } from 'uuid';

function App() {

  //Data de tareas
  const tareasData = [
    { id: uuidv4(), correo: 'Tania@admin.com', tarea: 'Componente en react', descripcion: 'crear el frontend' },
    { id: uuidv4(), correo: 'Oswaldo@admin.com', tarea: 'Componente en php', descripcion: 'crear el backend' },
    { id: uuidv4(), correo: 'Juan@admin.com', tarea: 'Crear un api', descripcion: 'crear el api v2'  },
  ]

  const [tareas, setTareas] = useState(tareasData)

  const addTarea = (tarea) => {
    tarea.id = uuidv4()
    console.log(tarea)
    setTareas([
      ...tareas,
      tarea
    ])
  }

// Eliminar Tareas
  const deleteTarea = id => {
    setTareas(tareas.filter(tarea => tarea.id !== id))
  }

// Editar Tareas
  const [editing, setEditing] = useState(false)

  const initialFormState = { id: null, correo: '', tarea: '', descripcion: '' }
  const [currentTarea, setCurrentTarea] = useState(initialFormState)

  const editRow = tarea => {
    setEditing(true) 
    setCurrentTarea({ id: tarea.id, correo: tarea.correo, tarea: tarea.tarea, descripcion: tarea.descripcion })
  }

  const updateTarea = (id, updateTarea) => {
    setEditing(false)
    setTareas(tareas.map(tarea => (tarea.id === id ? updateTarea : tarea)))
  }

  return (
    <div className="container">
<br />
<div className="row">
<div className="col">
<div className="card">
  <div className="card-header">
    CRUD DE TAREAS
  </div>
  <div className="card-body">
    
    {editing ? (
          <div>
            <p className="float-right">
            <h5>Editar Tarea</h5>
            </p>
            <br />
            <EditarTareas 
              setEditing={setEditing}
              currentTarea={currentTarea}
              updateTarea={updateTarea}
            />
          </div>
        ) : (
          <div>
            <p className="float-right">
            <h5>Agregar Tarea</h5>
            </p>
            <br />
            
            <AgregarTarea addTarea={addTarea}  />
          </div>
        )}
  </div>
</div>
</div>
   
</div>

<br />

      <div className="row">
          <div className="col">
          <div className="card">
              <div className="card-header">
                VISUALIZACIÓN DE TAREAS
              </div>
              <div className="card-body">
                  <TareaTable tareas={tareas} deleteTarea={deleteTarea} editRow={editRow} />
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}

export default App;

