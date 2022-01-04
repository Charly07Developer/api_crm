import React,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Formulario from '../Components/Formulario';


const Editar = () => {

    const [clienteEditar,setClienteEditar] = useState({});
    const [cargando,setCargando] = useState(true);

    const idEditar = useParams().id;

    useEffect(() => {
        const consultarAPIcliente = async () => {
            try{
                const url = 'http://localhost:4000/clientsdatabase';
                const consulta = await fetch(`${url}/${idEditar}`);
                const respuesta = await consulta.json();
                setClienteEditar(respuesta);                
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
        Object.keys(clienteEditar).length === 0 
            ? <p>No se encontro ningún resultado...</p>
            : <>
                <h2 className='text-4xl font-bold mb-8 uppercase'>Editar cliente</h2>
                <p className='italic mb-8'>Utiliza el siguiente formulario para editar el cliente</p>
                <Formulario 
                    clienteEditar={clienteEditar}
                    cargando={cargando}
                />
              </>
    )
}

export default Editar
