import { useFormContext } from "react-hook-form";

export default function FormInput({ id, label, type, col }) {
    const { register } = useFormContext();
    return (
        <div className={`relative ${col}`}>
            <input
                id={id}
                type={type}
                {...register(id)}
                placeholder=" "
                className="
      peer block w-full rounded-md bg-white 
      px-3 py-3 text-base text-black 
      outline-1 -outline-offset-1 outline-gray-300 
      placeholder-transparent
      focus:outline-2 focus:-outline-offset-2 
      focus:outline-blue-500 sm:text-md
      leading-none"
            />

            <label
                htmlFor={id}
                className="
                    absolute left-2 top-3 z-10 origin-left transition-all duration-200
                    text-gray-500 bg-white px-1
                    peer-focus:top-0 peer-focus:-translate-y-2.5 peer-focus:text-blue-500 peer-focus:text-xs
                    peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:-translate-y-2.5 peer-not-placeholder-shown:text-xs
                    overflow-x-hidden text-nowrap
            ">
                {label}
            </label>
        </div>
    );
}
