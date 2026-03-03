import { ChevronFirst, ChevronLast } from "lucide-react"
import Asintegra from "../assets/asintegra.png"
import { createContext, useContext, useState } from "react"



const SidebarContext = createContext()

export function Sidebar({ children }) {
    const [expanded, setExpanded] = useState(true)

    return (<aside className="h-screen">
        <nav className="h-full flex flex-col bg-white border-r border-gray-50 shadow-sm max-w-75">
            <div className="p-4 pb-2 flex justify-between items-center">
                <img src={Asintegra} alt="Asintegra Anexos" className={`overflow-hidden transition-all ${expanded ? "w-10" : "w-0"} `} />

                <button onClick={() => setExpanded(curr => !curr)} className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
                    {expanded ? <ChevronFirst /> : <ChevronLast />}
                </button>
            </div>


            <SidebarContext.Provider value={{ expanded }}>
                <ul className="flex-1 px-3">
                    {children}
                </ul>
            </SidebarContext.Provider>

            <div className="border-t border-gray-300 flex py-4 ps-1 pe-3">
                <div className={`
                    flex justify-between items-center
                    overflow-hidden transition-all ${expanded ? "w-full ml-3" : "w-0"}
                    `}>
                    <div className="leading-4">
                        <h4 className="font-semibold whitespace-nowrap">User</h4>
                        <span className="text-xs text-gray-600 whitespace-nowrap">User Email</span>
                    </div>
                </div>
            </div>



        </nav>
    </aside>)
}



export function SidebarItem({ icon, text, active, alert }) {

    const { expanded } = useContext(SidebarContext)
    return (
        <li className={`
            relative flex items-center py-2 px-3 my-1 
            font-medium rounded-md cursor-pointer 
            transition-colors group
            ${active ? "bg-linear-to-tr from-indigo-200 to-indigo-100 text-indigo-800" : "hover:bg-indigo-50 text-gray-600"}
             
            `}>
            {icon}
            <span className={`overflow-hidden transition-all whitespace-nowrap ${expanded ? "w-52 ml-3" : "w-0"}`}>{text}</span>
            {alert && <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? "" : "top-2"}`}></div>}

            {!expanded && <div className={`
                absolute left-full rounded-md px-2 py-1 ml-6 
                bg-indigo-100 text-indigo-800 text-sm 
                invisible opacity-20 -translate-x-3 transition-all 
                group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 whitespace-nowrap`}>{text}</div>}
        </li>
    )
}