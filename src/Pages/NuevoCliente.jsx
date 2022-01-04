import React from 'react';
import Formulario from '../Components/Formulario';



const NuevoCliente = () => {


    return (
        <>
            <h2 className='text-4xl font-bold mb-8 uppercase'>Nuevo cliente</h2>
            <p className='italic mb-8'>Rellena el siguiente formulario para agregar un nuevo cliente</p>
            <Formulario />
        </>
    )
};

export default NuevoCliente;