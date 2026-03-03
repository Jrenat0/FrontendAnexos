
import './App.css'
import { Sidebar, SidebarItem } from '../components/Sidebar'
import { Outlet, Link, useLocation } from "react-router-dom";
import { Home, Plus, ClipboardList, Settings } from 'lucide-react'



function App() {

  const location = useLocation();
  return (
    <>
      <div className="flex">
        <Sidebar>
          <Link to={"/"}><SidebarItem icon={<Home />} text="Dashboard" active={location.pathname === "/"} /></Link>
          <Link to={"/crear-anexo"}><SidebarItem icon={<Plus />} text="Crear Anexo" active={location.pathname === "/crear-anexo"} /></Link>
          <Link to={"/gestion-anexos"}><SidebarItem icon={<ClipboardList />} text="Gestionar Anexos" active={location.pathname === "/gestion-anexos"} /></Link>
          <Link to={"/configuracion"}><SidebarItem icon={<Settings />} text="Configuracion" active={location.pathname === "/configuracion"} /></Link>
        </Sidebar>

        <main className='grow'>
          <Outlet/>
        </main>

      </div>
    </>
  )
}

export default App
