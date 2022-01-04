import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../Components/Spinner';

const ClienteInfo = () => {

    const idCliente = useParams().id;

    const [clienteInfo,setClienteInfo] = useState({});
    const [cargando,setCargando] = useState(true);

    useState(() => {
        const consultarAPIcliente = async () => {
            try{
                const url = 'http://localhost:4000/clientsdatabase';
                const consulta = await fetch(`${url}/${idCliente}`);
                const respuesta = await consulta.json();
                setClienteInfo(respuesta);
            }catch(error){
                console.log(error)
            };
            setTimeout(() => {
                setCargando(!cargando);
            }, 1000);
            
        };
        consultarAPIcliente();
    }, [] );


    return (
        cargando 
            ? <Spinner />
            : 
                Object.keys(clienteInfo).length === 0
                    ? <p>No hay ningún resultado...</p>
                    : (
                        <div>
                            <h2 className='text-4xl font-bold mb-8 uppercase'>CLIENTE</h2>
                            <p className='italic mb-8'>Información detallada del cliente</p>
                            <div className='bg-white p-4 rounded-sm shadow-sm'>
                                <h2 className='text-xl text-cyan-400 font-bold border-b mb-3 pb-1 uppercase'>{clienteInfo.nombre}</h2>
                                <p><span className='font-bold'>Empresa: </span>{clienteInfo.empresa}</p>
                                <p><span className='font-bold'>Email: </span>{clienteInfo.email}</p>
                                <p><span className='font-bold'>Teléfono: </span>{clienteInfo.telefono}</p>
                                <p><span className='font-bold'>Notas: </span>{clienteInfo.notas}</p>
                            </div>
                        </div>
                    )
    )
}

export default ClienteInfo
