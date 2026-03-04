export const ANEXO_FORM_DATA = {
    ejecutor: [
        { id: 'nombre_org_ejecutor', label: 'Nombre Organismo Ejecutor', type: 'text', col: 'col-span-3', 'v': { required: true, maxLength: 30} },
        { id: 'rut_org_ejecutor', label: 'Rut Organismo Ejecutor', type: 'text', col: 'col-span-3', 'v': { required: true, maxLength: 30} },
        { id: 'telefono_org_ejecutor', label: 'Teléfono Organismo Ejecutor', type: 'text', col: 'col-span-3', 'v': { required: true, maxLength: 30} },
        { id: 'dir_org_ejecutor', label: 'Dirección Organismo Ejecutor', type: 'text', col: 'col-span-3', 'v': { required: true, maxLength: 30} },
        { id: 'comuna_org_ejecutor', label: 'Comuna Organismo Ejecutor', type: 'text', col: 'col-span-3', 'v': { required: true, maxLength: 30} },
        { id: 'region_org_ejecutor', label: 'Región Organismo Ejecutor', type: 'text', col: 'col-span-3', 'v': { required: true, maxLength: 30} },
    ],
    requirente: [
        { id: 'nombre_ent_requirente', label: 'Nombre Entidad Requirente', type: 'text', col: 'col-span-6', 'v': { required: true, maxLength: 30} }
    ],
    curso: [
        { id: 'codigo_curso', label: 'Código del Curso(Listado OTIC)', type: 'text', col: 'col-span-2', 'v': { required: true, maxLength: 30} },
        { id: 'nombre_p_f', label: 'Nombre plan formativo', type: 'text', col: 'col-span-2', 'v': { required: true, maxLength: 30} },
        { id: 'codigo_p_f', label: 'Codigo plan formativo', type: 'text', col: 'col-span-2', 'v': { required: true, maxLength: 30} },
        { id: 'nombre_enc_curso', label: 'Nombre del Encargado del curso', type: 'text', col: 'col-span-3', 'v': { required: true, maxLength: 30} },
        { id: 'telefono_enc_curso', label: 'Teléfono del Encargado del curso', type: 'text', col: 'col-span-3', 'v': { required: true, maxLength: 30} },
        { id: 'correo_enc_curso', label: 'Correo del Encargado del curso', type: 'text', col: 'col-span-3', 'v': { required: true, maxLength: 30} },
        { id: 'dir_ejec_curso', label: 'Dirección de Ejecución del curso', type: 'text', col: 'col-span-3', 'v': { required: true, maxLength: 30} },
        { id: 'comuna_ejec_curso', label: 'Comuna de Ejecución del curso', type: 'text', col: 'col-span-3', 'v': { required: true, maxLength: 30} },
        { id: 'region_ejec_curso', label: 'Región de Ejecución del curso', type: 'text', col: 'col-span-3', 'v': { required: true, maxLength: 30} },
        { id: 'tipo_salida_curso', label: 'Tipo de salida (Dependiente o Independiente)', type: 'text', col: 'col-span-3', 'v': { required: true, maxLength: 30} },
        { id: 'cupos_curso', label: 'Cupos del Curso', type: 'text', col: 'col-span-3' },
        { id: 'nombre_inst_habilitante', label: 'Nombre del Instrumento Habilitante', type: 'text', col: 'col-span-3', 'v': { required: true, maxLength: 30} },
        { id: 'nombre_ent_acredita', label: 'Nombre de Entidad Acreditadora', type: 'text', col: 'col-span-3', 'v': { required: true, maxLength: 30} },
    ]
}

export const MODES = {
    M: 'Manual',
    A: 'Automático'
}