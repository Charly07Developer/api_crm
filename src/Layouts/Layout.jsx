import React from 'react';
import { Link,Outlet,useLocation } from 'react-router-dom';


const Layout = () => {

    const location = useLocation();

    return (
        <div className='flex'>
            <section className='w-1/4 min-h-screen h-screen bg-cyan-900 py-10 px-8'>
                <h1 className='text-white text-4xl font-bold mb-8'>CRM</h1>
                <nav>
                    <Link
                        className={`block hover:bg-cyan-500 rounded-sm transition text-white uppercase font-bold py-1 px-3 ${location.pathname === '/clientes' && 'text-cyan-400'}`}
                        to="/clientes">Clientes</Link>
                    <Link
                        className={`block hover:bg-cyan-500 rounded-sm transition text-white uppercase font-bold py-1 px-3 ${location.pathname === '/clientes/nuevo' && 'text-cyan-400'}`} 
                        to="/clientes/nuevo">Nuevo cliente</Link>
                </nav>
            </section>
            <section className='w-3/4 min-h-screen h-screen overflow-scroll py-10 px-8'>
                <Outlet />
            </section>
        </div>
    )
};

export default Layout
