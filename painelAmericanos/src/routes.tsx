import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Product from './pages/Product';

export const Rotas = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={ <Login/> }
                />
                <Route
                    path='/dashboard'
                    element={ <Dashboard/> }
                />
                <Route
                    path='/produto/:id'
                    element={ <Product/> }
                />
            </Routes>
        </BrowserRouter>
    )
}