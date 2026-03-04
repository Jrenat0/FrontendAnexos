import FormInput from "./FormInput";
import { ANEXO_FORM_DATA } from "./data-schema.js";

export default function FormManual() {
    return (
        <div>
            <div className="space-y-12">
                <div className="pb-5">
                    <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-6">
                        <span className="col-span-6 text-lg font-medium">
                            1. Identificacion del Ejecutor
                        </span>
                        {ANEXO_FORM_DATA.ejecutor.map((e,index) => {
                            return (
                                <FormInput
                                    key={index}
                                    id={e.id}
                                    label={e.label}
                                    type={e.type}
                                    col={e.col}

                                />
                            );
                        })}

                        <span className="col-span-6 text-lg font-medium">
                            2. Identificacion del Requirente
                        </span>
                        {ANEXO_FORM_DATA.requirente.map((r, index) => {
                            return (
                                <FormInput
                                    key={index}
                                    id={r.id}
                                    label={r.label}
                                    type={r.type}
                                    col={r.col}

                                />
                            );
                        })}
                        <span className="col-span-6 text-lg font-medium">
                            3. Identificacion del Curso
                        </span>
                        {ANEXO_FORM_DATA.curso.map((c, index) => {
                            return (
                                <FormInput
                                    key={index}
                                    id={c.id}
                                    label={c.label}
                                    type={c.type}
                                    col={c.col}

                                />
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="gap-x-6">
                <button
                    type="submit"
                    className="rounded-full cursor-pointer px-3 py-2 w-full bg-blue-500 hover:bg-blue-600 transition-all font-semibold text-white shadow-xs ">
                    Rellenar Anexo
                </button>
            </div>
        </div>
    );
}
