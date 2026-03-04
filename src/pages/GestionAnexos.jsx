import { useEffect, useState } from "react";
import { AnexoServices } from "../services/anexoServices";

export default function GestionAnexos() {
    // 1. Estado para guardar los datos
    const [anexos, setAnexos] = useState([]);
    // 2. Estado para manejar la carga (opcional pero recomendado)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAnexos = async () => {
            try {
                const data = await AnexoServices.getAnexos();
                setAnexos(data); // Guardamos los datos en el estado
            } catch (error) {
                console.error("Error cargando anexos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAnexos();
    }, []); // El array vacío [] asegura que esto solo corra una vez al montar el componente

    if (loading) return <p>Cargando anexos...</p>;

    return (
        <div className="h-full flex flex-col justify-center items-center">
            <h1 className="text-4xl">Gestión de Anexos</h1>
            
            <div className="mt-4">
                {anexos.length > 0 ? (
                    <ul>
                        {anexos.map((anexo) => (
                            <li key={anexo.id} className="border-b p-2">
                                {anexo.nombrePlantilla || "Anexo sin nombre"}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No hay anexos disponibles.</p>
                )}
            </div>
        </div>
    );
}