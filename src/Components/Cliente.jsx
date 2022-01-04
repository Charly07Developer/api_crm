import React from 'react';
import { useNavigate } from 'react-router-dom';



const Cliente = ({cliente,handleEliminar}) => {

    const {nombre,empresa,email,telefono,notas,id} = cliente;

    const navigate = useNavigate();

    return (
        <tr className='border-b hover:bg-gray-100'>
            <td className='pl-2'>{nombre}</td>
            <td className='pl-2 py-3'>
                <p>{telefono}</p>
                <p>{email}</p>
            </td>
            <td className='pl-2'>{empresa}</td>
            <td className='pr-2'>
                <button
                    type='button'
                    className='bg-green-600 hover:bg-green-700 w-full my-2 block text-sm py-1 px-3 cursor-pointer text-white uppercase rounded-sm'
                    onClick={() => navigate({pathname:`infocliente${id}`})}
                >Info</button>
                <button
                    type='button'
                    className='bg-cyan-600 hover:bg-cyan-700 w-full my-2 block text-sm py-1 px-3 cursor-pointer text-white uppercase rounded-sm'
                    onClick={() => navigate({pathname: `editar${id}`})}
                >Editar</button>
                <button
                    type='button'
                    className='bg-red-600 hover:bg-red-700 w-full my-2 block text-sm py-1 px-3 cursor-pointer text-white uppercase rounded-sm'
                    onClick={() => handleEliminar(id)}
                >Eliminar</button>
            </td>
        </tr>
    )
}

export default Cliente;