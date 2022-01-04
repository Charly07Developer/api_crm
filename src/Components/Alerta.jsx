import React from 'react';

const Alerta = ({mensaje}) => {
    return (
        <p className='text-red-500 text-sm italic mt-1 font-semibold'>¡¡ {mensaje} !!</p>
    )
}

export default Alerta
