import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Layout from './Layouts/Layout';
import Clientes from './Pages/Clientes';
import NuevoCliente from './Pages/NuevoCliente';
import ClienteInfo from './Pages/ClienteInfo';
import Editar from './Pages/Editar';

function App() {

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/clientes" element={<Layout />}>
          <Route index element={<Clientes />} />
          <Route path="nuevo" element={<NuevoCliente />} />
          <Route path="infocliente:id" element={<ClienteInfo />} />
          <Route path="editar:id" element={<Editar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
