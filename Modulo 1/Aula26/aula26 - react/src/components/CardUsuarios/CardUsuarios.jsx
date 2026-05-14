import React from 'react'
import './CardUsuarios.css'


const CardUsuario = ({usuario}) => {
    console.log(usuario)
    return (
        <>
            <div className="card mt-3 mb-3" style={{ 'width': '18rem' }} >
                <img style={{ 'height': '200px', 'width': '100%' }} src={usuario.foto} className="card-img-top object-fit-contain" alt="..." />
                <div className="card-body">
                    <h5 className="card-title title-text">{usuario.nome}</h5>
                    <p className="card-text">{usuario.email}</p>
                    <a href="#" className="btn btn-primary">Ver Perfil</a>
                </div>
            </div>

        </>
    )
}

export default CardUsuario