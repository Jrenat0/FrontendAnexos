import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import Anexo2 from "../assets/vista_previa_anexo2.jpg";
import FormAuto from "../components/crear-anexo/FormAuto";
import FormManual from "../components/crear-anexo/FormManual";
import { MODES } from "../components/crear-anexo/data-schema";

import { AnexoServices } from "../services/anexoServices";

export default function CrearAnexo() {
    const methods = useForm(); //incializo una variable con los metodos de useForm

    const [mode, setMode] = useState(MODES.M); //inicializo un estado para controlar la pestaña de datos manuales y datos auto.

    const [isDownloading, setIsDownloading] = useState(false); //inicializo un estado para desactivar el boton de generar anexo cuando se esta procesando uno

    const onSubmit = async (data) => {
        try {
            setIsDownloading(true);
            await AnexoServices.createAnexo(data);
            console.log("Documento generado exitosamente");
        } catch (error) {
            console.error("Error al generar el documento:", error);
            alert("Hubo un error al generar el archivo Word.");
        } finally {
            setIsDownloading(false);
        }
    };

    return (
        <FormProvider {...methods}>
            <div className="h-screen bg-gray-100 flex justify-center items-center px-4">
                <form
                    onSubmit={methods.handleSubmit(onSubmit)}
                    className="shadow-2xl h-9/10 w-full flex rounded-2xl">
                    <div className=" w-5/10 bg-white p-4 rounded-l-2xl flex flex-col h-full">
                    
                        <div className="bg-gray-100 py-4 px-4 rounded-xl shrink-0">
                            <span className="font-bold text-blue-500 select-none">
                                1. SELECCIONA UNA PLANTILLA
                            </span>
                            {/* Selector de Plantilla */}
                            <select
                                id="plantilla"
                                name="plantilla"
                                aria-label="Plantilla"
                                className="w-full rounded-md bg-white p-2 text-md shadow-sm">
                                <option value="">
                                    Anexo N°2 - Plan Formativo SENCE
                                </option>
                                <option value="">
                                    Anexo N°4 - Plan Formativo SENCE
                                </option>
                            </select>
                            {/* /Selector de Plantilla */}
                        </div>

                        {/* Selector de form */}
                        {/* <div className="w-full flex justify-end mt-4 mb-2 shrink-0">
                            <button
                                type="button"
                                onClick={() => setMode(MODES.M)}
                                className={`rounded-l-3xl px-6 py-2 font-medium transition-colors cursor-pointer ${mode === MODES.M ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"} `}>
                                Manual
                            </button>
                            <button
                                type="button"
                                onClick={() => setMode(MODES.A)}
                                disabled={isDownloading}
                                className={`rounded-r-3xl px-6 py-2 font-medium transition-colors cursor-pointer ${mode === MODES.A ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"} `}>
                                Automático
                            </button>
                        </div> */}
                        {/* /Selector de form */}

                        {/* Outlet de plantilla */}
                        <div
                            className={`flex-1 h-auto overflow-y-scroll `}>
                            <FormManual/>
                        </div>
                        {/* /Outlet de plantilla */}
                    </div>

                    {/* Preview PDF Anexo */}
                    <div className="w-5/10 bg-gray-200 p-4 rounded-r-2xl flex justify-center items-center overflow-hidden">
                        <img src={Anexo2} alt="" className="max-h-full" />
                    </div>
                    {/* /Preview PDF Anexo */}
                </form>
            </div>
        </FormProvider>
    );
}
