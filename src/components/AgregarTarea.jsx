import React from 'react';
import { useForm } from 'react-hook-form'

const AgregarTarea = (props) => {

    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data, e) => {
        data.id = null
        console.log(data)
        props.addTarea(data)
        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
            <label for="exampleInputEmail1">Correo</label>
            <input 
                className="form-control"
                type="mail" 
                name="correo"
                ref={register({required: {value: true, message: 'Valor requerido'}})}
                />
                <div>
                    {errors?.correo?.message}
                </div>
            </div>
            <div className="form-group">
            <label for="exampleInputEmail1">Tarea</label>
            <input 
                className="form-control"
                type="text" 
                name="tarea"
                ref={register({required: {value: true, message: 'Valor requerido'}})}
                />
            <div>
                {errors?.tarea?.message}
            </div>
            </div>
            <div className="form-group">
            <label for="exampleInputEmail1">Descripción</label>
            <input 
                className="form-control"
                type="text" 
                name="descripcion" 
                ref={register({required: {value: true, message: 'Valor requerido'}})}
                />
            <div>
                {errors?.descripcion?.message}
            </div>
            </div>
            <p className="float-right">
            <button className="btn btn-primary" type="submit">Agregar nueva tarea</button>
            </p>
            
        </form>
    );
}
 
export default AgregarTarea;