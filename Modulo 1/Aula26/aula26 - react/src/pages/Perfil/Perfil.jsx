import React, { use } from 'react'
import usuariosObj from '../../dados/usuarios'
import './Perfil.css'

function Perfil({ usuario }) {
    console.log(usuario)

    useEffect(() => {
        fetch
     }, [])




    return (
        <>
            <div className='row'>
                <div className='col-4'>
                    <img style={{'height': '200px', 'width': '100%' }} src={usuariosObj[0].foto} className="card-img-top object-fit-contain" alt="..." />
                </div>
                <div className='col-8'>
                    <h1 className='fs-1 fw-bold'>Perfil</h1>
                    <p>{usuariosObj[0].name}</p>
                    <p>{usuariosObj[0].foto}</p>

                </div>
            </div>
        </>
    )
}
