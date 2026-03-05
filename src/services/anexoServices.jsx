import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

const apiClient = axios.create({
    baseURL: `${API_URL}/anexos`,
    headers: {
        'Content-Type': 'application/json'
    }
})

export const AnexoServices = {
    getAnexos: async () => {
        const res = await apiClient.get("/");
        return res.data;
    },

    createAnexo: async (data) => {
        const res = await apiClient.post("/dAnexo", data, {
            responseType: "blob", //Hay que especificar el tipo de respuesta, para que axios no la vuelva json y se corrompa el .docx
        });

        // inicializo un link invisible para forzar la descarga del anexo creado.
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement("a");
        link.href = url;

        // Le doy nombre al archivo generado
        link.setAttribute("download", `Anexo_${data.codigo_curso}|${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}.docx`);

        document.body.appendChild(link);
        link.click(); //Simulamos un click para que la descarga se haga automaticamente

        // Limpieza del link
        link.parentNode.removeChild(link);
        window.URL.revokeObjectURL(url);

        return res; //Devuelvo la respuesta para manejar si se completa o no 
    },
};
