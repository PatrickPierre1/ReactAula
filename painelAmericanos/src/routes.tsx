import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Product from './pages/Product';
import PageExampleState from './pages/PageExampleState';
import Usuarios from './pages/Usuarios';
import NotFound from './pages/NotFound';

export const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={<Login />}
                />
                <Route
                    path='/dashboard'
                    element={<Dashboard />}
                />
                <Route
                    path='/usuarios'
                    element={<Usuarios />}
                />

                <Route
                    path="*"
                    element={<NotFound />} />

                <Route
                    path='/produto/:id'
                    element={<Product />}
                />
                <Route
                    path='/example'
                    element={<PageExampleState />}
                />
            </Routes>
        </BrowserRouter>
    )
}