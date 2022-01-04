import React from 'react';
import { useNavigate } from 'react-router-dom';
import {Formik,Form,Field} from 'formik';
import * as Yup from 'yup';
import Alerta from './Alerta';
import Spinner from './Spinner';


const Formulario = ({clienteEditar,cargando}) => {

    const navigate = useNavigate();

    const clienteSchema = Yup.object().shape({
        nombre: Yup
                .string()
                .required('El campo de nombre es obligatorio'),
        empresa: Yup
                .string()
                .required('El campo de empresa es obligatorio'),
        email: Yup
                .string()
                .email('Email no válido')
                .required('El campo de email es obligatorio'),
        telefono: Yup
                .number().typeError('Teléfono no válido')
                .integer('Teléfono no válido')
                .positive('Teléfono no válido')
                .required('El campo de teléfono es obligatorio'),
        notas: Yup
                .string()
                .required('El campo de notas es obligatorio'),
    })


    const handleSubmit = async (values) => {
        try{
            const url = 'http://localhost:4000/clientsdatabase';
            if(clienteEditar.id){
                await fetch(`${url}/${clienteEditar.id}`,{
                    method: 'PUT',
                    body: JSON.stringify(values),
                    headers: {
                        'Content-Type':'application/json'
                    }
                });                
            }else{
                await fetch(url,{
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type':'application/json'
                }
            });
            };
            navigate({pathname:'/clientes'});
        }catch(error){
            console.log(error);
        };
    };


    return (
        cargando 
            ? <Spinner /> 
            : (
                <div className='p-6 bg-white w-2/3 rounded-sm shadow'>
                    <h2 className='text-cyan-400 uppercase font-bold text-xl mb-4'>{Object.keys(clienteEditar).length === 0 ? 'Agrega un nuevo cliente' : 'Edita el cliente'}</h2>
                    <Formik
                        
                        initialValues={{
                            nombre: clienteEditar.nombre ? clienteEditar.nombre : '',
                            empresa: clienteEditar.empresa ? clienteEditar.empresa : '',
                            email: clienteEditar.email ? clienteEditar.email : '',
                            telefono: clienteEditar.telefono ? clienteEditar.telefono : '',
                            notas: clienteEditar.notas ? clienteEditar.notas : '',
                        }}
                        enableReinitialize={true}
                        onSubmit={async (values,{resetForm}) => {
                            await handleSubmit(values);
                            resetForm();
                        }}
                        validationSchema={clienteSchema}
                    >
                    {({errors,touched}) => {

                        return(
                            <Form>
                                <div>
                                    <label
                                        className='uppercase font-bold text-xs block mb-1'
                                        htmlFor="nombre">Nombre</label>
                                    <Field
                                        type="text"
                                        id="nombre"
                                        name="nombre"
                                        className="rounded w-full border border-gray-200 py-1 px-2 outline-none placeholder:text-gray-200 focus:border-cyan-400"
                                        placeholder="Nombre y apellidos del cliente"
                                    />
                                    {errors.nombre && touched.nombre && <Alerta mensaje={errors.nombre} />}
                                </div>
                                <div>
                                    <label
                                        className='uppercase font-bold text-xs block mb-1 mt-5'
                                        htmlFor="empresa">Empresa</label>
                                    <Field
                                        type="text"
                                        id="empresa"
                                        name="empresa"
                                        className="rounded w-full border border-gray-200 py-1 px-2 outline-none placeholder:text-gray-200 focus:border-cyan-400"
                                        placeholder="Razón social..."
                                    />
                                    {errors.empresa && touched.empresa && <Alerta mensaje={errors.empresa} />}
                                </div>
                                <div>
                                    <label
                                        className='uppercase font-bold text-xs block mb-1 mt-5'
                                        htmlFor="email">Email</label>
                                    <Field
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="rounded w-full border border-gray-200 py-1 px-2 outline-none placeholder:text-gray-200 focus:border-cyan-400"
                                        placeholder="ejemplo@ejemplo.com"
                                    />
                                    {errors.email && touched.email && <Alerta mensaje={errors.email} />}
                                </div>
                                <div>
                                    <label
                                        className='uppercase font-bold text-xs block mb-1 mt-5'
                                        htmlFor="telefono">Teléfono</label>
                                    <Field
                                        type="tel"
                                        id="telefono"
                                        name="telefono"
                                        className="rounded w-full border border-gray-200 py-1 px-2 outline-none placeholder:text-gray-200 focus:border-cyan-400"
                                        placeholder="Nº Fijo/Movil..."
                                    />
                                    {errors.telefono && touched.telefono && <Alerta mensaje={errors.telefono} />}
                                </div>
                                <div>
                                    <label
                                        className='uppercase font-bold text-xs block mb-1 mt-5'
                                        htmlFor="notas">Notas</label>
                                    <Field
                                        as="textarea"
                                        type="text"
                                        id="notas"
                                        name="notas"
                                        className="rounded w-full border border-gray-200 py-1 px-2 outline-none placeholder:text-gray-200 focus:border-cyan-400 h-40 resize-none"
                                    />
                                    {errors.notas && touched.notas && <Alerta mensaje={errors.notas} />}   
                                </div>
                                <input
                                    type="submit"
                                    value={Object.keys(clienteEditar).length === 0 ? 'Guardar' : 'Editar'}
                                    className='mt-5 w-full py-2 cursor-pointer transition bg-cyan-400 hover:bg-cyan-500 text-white font-bold uppercase rounded-sm'
                                />
                            </Form>                
                        )
                    }}
                    </Formik>
                </div>
            )
    )
};

Formulario.defaultProps = {
    clienteEditar: {},
    cargando: false
}

export default Formulario
