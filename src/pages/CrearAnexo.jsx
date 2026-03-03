import { useState } from "react"
import Anexo2 from '../assets/vista_previa_anexo2.jpg'

const MODES = {
    M: 'Manual',
    A: 'Automático'
}


const formData = {
    ejecutor: [
        { key: 'nombre_organismo_ejecutor', label: 'Nombre Organismo Ejecutor', type: 'text', col: 'col-span-3' },
        { key: 'rut_organismo_ejecutor', label: 'Rut Organismo Ejecutor', type: 'text', col: 'col-span-3' },
        { key: 'telefono_organismo_ejecutor', label: 'Teléfono Organismo Ejecutor', type: 'text', col: 'col-span-3' },
        { key: 'direccion_organismo_ejecutor', label: 'Dirección Organismo Ejecutor', type: 'text', col: 'col-span-3' },
        { key: 'comuna_organismo_ejecutor', label: 'Comuna Organismo Ejecutor', type: 'text', col: 'col-span-3' },
        { key: 'region_organismo_ejecutor', label: 'Región Organismo Ejecutor', type: 'text', col: 'col-span-3' },
    ],
    requirente: [
        { key: 'nombre_entidad_requirente', label: 'Nombre Entidad Requirente', type: 'text', col: 'col-span-6' }
    ],
    curso: [
        { key: 'codigo_curso', label: 'Código del Curso(Listado OTIC)', type: 'text', col: 'col-span-2' },
        { key: 'nombre_plan_formativo', label: 'Nombre plan formativo', type: 'text', col: 'col-span-2' },
        { key: 'codigo_plan_formativo', label: 'Codigo plan formativo', type: 'text', col: 'col-span-2' },
        { key: 'nombre_encargado_curso', label: 'Nombre del Encargado del curso', type: 'text', col: 'col-span-3' },
        { key: 'telefono_encargado_curso', label: 'Teléfono del Encargado del curso', type: 'text', col: 'col-span-3' },
        { key: 'correo_encargado_curso', label: 'Correo del Encargado del curso', type: 'text', col: 'col-span-3' },
        { key: 'direccion_ejecucion_curso', label: 'Dirección de Ejecución del curso', type: 'text', col: 'col-span-3' },
        { key: 'comuna_ejecucion_curso', label: 'Comuna de Ejecución del curso', type: 'text', col: 'col-span-3' },
        { key: 'region_ejecucion_curso', label: 'Región de Ejecución del curso', type: 'text', col: 'col-span-3' },
        { key: 'tipo_salida_curso', label: 'Tipo de salida (Dependiente o Independiente)', type: 'text', col: 'col-span-3' },
        { key: 'cupos_curso', label: 'Cupos del Curso', type: 'text', col: 'col-span-3' },
        { key: 'nombre_instrumento_habilitante', label: 'Nombre del Instrumento Habilitante', type: 'text', col: 'col-span-3' },
        { key: 'nombre_entidad_acreditacion', label: 'Nombre de Entidad Acreditadora', type: 'text', col: 'col-span-3' },
    ]
}


function FormAuto() {
    return (
        <form>
            <div class="col-span-full">
                <label for="archivo" class="block text-md font-medium text-gray-900">Ficha Beca</label>
                <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-25">
                    <div class="text-center">
                        <svg viewBox="0 0 24 24" fill="currentColor" data-slot="icon" aria-hidden="true" class="mx-auto size-12 text-gray-300">
                            <path d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clip-rule="evenodd" fill-rule="evenodd" />
                        </svg>
                        <div class="mt-4 flex text-sm/6 text-gray-600">
                            <label for="archivo" class="relative cursor-pointer rounded-md bg-transparent font-semibold text-blue-500 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-indigo-600 hover:text-indigo-500">
                                <span>Selecciona el archivo</span>
                                <input id="archivo" type="file" name="archivo" class="sr-only" />
                            </label>
                            <p class="pl-1">o arrastralo aquí</p>
                        </div>
                        <p class="text-xs/5 text-gray-600">PDF, DOCX , XSLX de hasta 10MB</p>
                    </div>
                </div>
            </div>


        </form >
    )
}

function FormManual() {
    return (
        <form>
            <div className="space-y-12">
                <div className="pb-12">
                    <div className="grid grid-cols-1 gap-x-4 gap-y-2 sm:grid-cols-6">
                        <span className="col-span-6 text-lg font-medium">1. Identificacion del Ejecutor</span>
                        {
                            formData.ejecutor.map((e) => {
                                return (<FormInput key={e.key} label={e.label} type={e.type} col={e.col} />)
                            })
                        }

                        <span className="col-span-6 text-lg font-medium">2. Identificacion del Requirente</span>
                        {
                            formData.requirente.map((r) => {
                                return (<FormInput key={r.key} label={r.label} type={r.type} col={r.col} />)
                            })
                        }
                        <span className="col-span-6 text-lg font-medium">3. Identificacion del Curso</span>
                        {
                            formData.curso.map((c) => {
                                return (<FormInput key={c.key} label={c.label} type={c.type} col={c.col} />)
                            })
                        }
                    </div>
                </div>
            </div>
            {/* <div className="gap-x-6">
                <button type="submit" className="rounded-full cursor-pointer px-3 py-2 w-full bg-blue-500 hover:bg-blue-600 transition-all font-semibold text-white shadow-xs ">Rellenar Anexo</button>
            </div> */}
        </form>
    )
}


function FormInput({ key, label, type, col }) {
    return (
        <div className={`${col}`}>
            <label htmlFor={key} className="text-sm font-medium text-gray-600">{label}</label>
            <input id={key} type={type} name={key} className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-600 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500 sm:text-sm/6" />
        </div>
    )
}

export default function CrearAnexo() {

    const [mode, setMode] = useState(MODES.M)

    return (
        <div className="h-screen bg-gray-100 flex justify-center items-center px-4">

            <div className="shadow-2xl h-9/10 w-full flex rounded-2xl">
                <div className=" w-5/10 bg-white p-4 rounded-l-2xl flex flex-col h-full">

                    <div className="bg-gray-100 py-4 px-4 rounded-xl shrink-0">
                        <span className="font-bold text-blue-500 select-none">1. SELECCIONA UNA PLANTILLA</span>
                        <select id="plantilla" name="plantilla" aria-label="Plantilla" className="w-full rounded-md bg-white p-2 text-md shadow-sm">
                            <option value="">Anexo N°2 - Plan Formativo SENCE</option>
                            <option value="">Anexo N°4 - Plan Formativo SENCE</option>
                        </select>
                    </div>

                    <div className="w-full flex justify-end mt-4 mb-2 shrink-0">
                        <button
                            onClick={() => setMode(MODES.M)}
                            className={`rounded-l-3xl px-6 py-2 font-medium transition-colors cursor-pointer ${mode === MODES.M ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"} `}
                        >
                            Manual
                        </button>
                        <button
                            onClick={() => setMode(MODES.A)}
                            className={`rounded-r-3xl px-6 py-2 font-medium transition-colors cursor-pointer ${mode === MODES.A ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"} `}
                        >
                            Automático
                        </button>
                    </div>

                    <div className={`flex-1 max-h-160 ${mode === MODES.M ? 'overflow-y-scroll' : 'overflow-hidden'}`}>
                        {mode === MODES.M ? <FormManual /> : <FormAuto />}
                    </div>

                    <div className="pt-2 border-t border-gray-100 shrink-0">
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 cursor-pointer rounded-full transition-colors shadow-lg">
                            Rellenar Anexo
                        </button>
                    </div>

                </div>

                <div className="w-5/10 bg-gray-200 p-4 rounded-r-2xl flex justify-center items-center overflow-hidden">
                    <img src={Anexo2} alt="" className="max-h-full" />
                </div>
            </div>
        </div>
    )
}


