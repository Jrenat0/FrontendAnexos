import InfoCard from "../components/home/InfoCard";
import { AlertTriangle, Folder, List, Plus, Users } from "lucide-react";

const CARDS = [
    {
        label: "Total Anexos",
        color: "bg-blue-600",
        content: "2",
        icon: <Folder color="white" size={60} className="my-4" />,
    },
    {
        label: "Creados hoy",
        color: "bg-green-800",
        content: "3",
        icon: <Plus color="white" size={60} className="my-4" />,
    },
    {
        label: "Pendientes",
        color: "bg-yellow-500 ",
        content: "1",
        icon: <AlertTriangle color="white" size={60} className="my-4" />,
    },
    {
        label: "Usuarios",
        color: "bg-cyan-500",
        content: "1",
        icon: <Users color="white" size={60} className="my-4" />,
    },
];

export default function Home() {
    return (
        <div className="bg-gray-100 h-screen p-10 flex flex-col">
            {/* InfoCards */}
            <div className="grid grid-cols-4  gap-x-8" id="InfoCards">
                {CARDS.map((c) => {
                    return (
                        <InfoCard
                            label={c.label}
                            color={c.color}
                            content={c.content}
                            icon={c.icon}
                        />
                    );
                })}
            </div>
            {/* /InfoCards */}

            <div className="flex grow gap-x-8">
                <div className="h-full w-3/10 my-8" id="Accesos">
                    <div className=" bg-white rounded-xl p-6 shadow-md">
                        <span className="text-xl font-normal">
                            Accesos Rapidos
                        </span>

                        <ul className="my-2 gap-y-2 flex flex-col">
                            <li className="bg-gray-100 h-20 rounded-md flex items-center cursor-pointer transition-all hover:bg-gray-200 hover:scale-102">
                                <div className="w-2/10 flex items-center justify-center">
                                    <div className="bg-blue-500 rounded-lg p-2">
                                        <List size={25} color="white" />
                                    </div>
                                </div>
                                <div className="w-8/10  flex flex-col">
                                    <span className="text-md font-medium leading-4">
                                        Listado de Anexos
                                    </span>
                                </div>
                            </li>

                            <li className="bg-gray-100 h-20 rounded-md flex items-center cursor-pointer transition-all hover:bg-gray-200 hover:scale-102">
                                <div className="w-2/10 flex items-center justify-center">
                                    <div className="bg-green-500 rounded-lg p-2">
                                        <Plus size={25} color="white" />
                                    </div>
                                </div>
                                <div className="w-8/10  flex flex-col">
                                    <span className="text-md font-medium leading-4">
                                        Crear Anexo
                                    </span>
                                </div>
                            </li>

                            <li className="bg-gray-100 h-20 rounded-md flex items-center cursor-pointer transition-all hover:bg-gray-200 hover:scale-102">
                                <div className="w-2/10 flex items-center justify-center">
                                    <div className="bg-gray-500 rounded-lg p-2">
                                        <Plus size={25} color="white" />
                                    </div>
                                </div>
                                <div className="w-8/10  flex flex-col">
                                    <span className="text-md font-medium leading-4">
                                        Configuracion
                                    </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="grow mt-8">
                    <AnexosTable/>
                </div>
            </div>
        </div>
    );
}

export function AnexosTable() {
    return (
        <div class="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default border-gray-200 rounded-xl bg-white">
            <table class="w-full text-sm text-left rtl:text-right text-body">
                <thead class="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-gray-300 border-default">
                    <tr>
                        <th scope="col" class="px-6 py-3 font-medium">
                            Ejecutor
                        </th>
                        <th scope="col" class="px-6 py-3 font-medium">
                            Fecha
                        </th>
                        <th scope="col" class="px-6 py-3 font-medium">
                            Estado
                        </th>
                        <th scope="col" class="px-6 py-3 font-medium">
                            Acciones
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-neutral-primary border-b border-gray-300 border-default">
                        <th
                            scope="row"
                            class="px-6 py-4 font-medium text-heading whitespace-nowrap">
                            Sociedad Capacitacion
                        </th>
                        <td class="px-6 py-4">04 mar 2026</td>
                        <td class="px-6 py-4">Generado</td>
                        <td class="px-6 py-4">Botones</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}
