import React from 'react'
import usuariosObj from '../../dados/usuarios'
import './ListarUsuarios.css'
import CardUsuario from '../CardUsuarios/CardUsuarios'


const ListarUsuarios = () => {
    console.log(usuariosObj)

    return (
        <>
            <div className='container'>
                <div className='row'>
                    {usuariosObj.map((usuario) => (
                        <div key={usuario.id} className='col-4'>
                            <CardUsuario usuario={usuario}/>
                        </div>
                    ))}
                </div>
            </div>

        </>
    )
}

export default ListarUsuarios