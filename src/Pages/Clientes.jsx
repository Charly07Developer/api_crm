import React,{useState,useEffect} from 'react';
import Cliente from '../Components/Cliente';


const Clientes = () => {

    const [clientes,setClientes] = useState([]);

    useEffect(() => {
        const consultarAPIclientes = async () => {
            try{
                const url = 'http://localhost:4000/clientsdatabase';
                const consulta = await fetch(url);
                const respuesta = await consulta.json();
                setClientes(respuesta)
            }catch(error){
                console.log(error);
            };
        };
        consultarAPIclientes();
    }, [] );

    async function handleEliminar(id){
        try{
            const url = 'http://localhost:4000/clientsdatabase';
            await fetch(`${url}/${id}`,{
                method: 'DELETE',
            });
            const arrayNuevo = clientes.filter((cliente) => {
                return cliente.id !== id;
            });
            setClientes(arrayNuevo);
        }catch(error){
            console.log(error)
        };
    };

    return (
        <>
            <h2 className='text-4xl font-bold mb-8 uppercase'>clientes</h2>
            {clientes.length === 0
                ? <p className='italic mb-8'>No tienes ningún cliente guardado aún</p>
                : (
                    <>
                        <p className='italic mb-8'>Listado de todos tus clientes</p>
                        <table className='table-auto w-full rounded-sm shadow bg-white'>
                            <thead className='text-left bg-cyan-600'>
                                <tr>
                                    <th className='px-2 py-1 text-white'>Nombre</th>
                                    <th className='px-2 py-1 text-white'>Contacto</th>
                                    <th className='px-2 py-1 text-white'>Empresa</th>
                                    <th className='text-center pr-2 py-1 text-white'>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {clientes.map((cliente) => (
                                    <Cliente 
                                        key={cliente.id}
                                        cliente={cliente}
                                        handleEliminar={handleEliminar}
                                    />
                                ))}
                            </tbody>
                        </table>
                    </>
                  )
            }
            
            
        </>
    )
};

export default Clientes;