import Home from '../pages/Home.jsx'
import CrearAnexo from '../pages/CrearAnexo.jsx'
import GestionAnexos from '../pages/GestionAnexos.jsx'
import Configuracion from '../pages/Configuracion.jsx'
import App from '../layouts/App.jsx'
import {createBrowserRouter} from 'react-router-dom'

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "crear-anexo",
                element: <CrearAnexo />,
            },
            {
                path: "gestion-anexos",
                element: <GestionAnexos />,
            },
            {
                path: "configuracion",
                element: <Configuracion />,
            },
        ],
    },
]);