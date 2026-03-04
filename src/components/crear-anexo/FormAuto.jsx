export default function FormAuto() {
    return (
        <div className="col-span-full">
            <label
                htmlFor="archivo"
                className="block text-md font-medium text-gray-900">
                Ficha Beca
            </label>
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-25">
                <div className="text-center">
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        data-slot="icon"
                        aria-hidden="true"
                        className="mx-auto size-12 text-gray-300">
                        <path
                            d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                        />
                    </svg>
                    <div className="mt-4 flex text-sm/6 text-gray-600">
                        <label
                            htmlFor="archivo"
                            className="relative cursor-pointer rounded-md bg-transparent font-semibold text-blue-500 focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-indigo-600 hover:text-indigo-500">
                            <span>Selecciona el archivo</span>
                            <input
                                id="archivo"
                                type="file"
                                name="archivo"
                                className="sr-only"
                            />
                        </label>
                        <p className="pl-1">o arrastralo aquí</p>
                    </div>
                    <p className="text-xs/5 text-gray-600">
                        PDF, DOCX , XSLX de hasta 10MB
                    </p>
                </div>
            </div>
        </div>
    );
}
