import usePacientes from "../hooks/usePacientes";


const Paciente = ({ paciente }) => {

    const { setEdicion, eliminarPaciente } = usePacientes();

    const { email, fecha, nombre, propietario, sintomas, _id } = paciente;

    const formatearFecha = ( fecha ) => {

        const nuevaFecha = new Date(fecha);

        return new Intl.DateTimeFormat('es-MX', {dateStyle: 'long'}).format(nuevaFecha);

    };

    return (
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-7 rounded-xl">

            <p className="font-bold uppercase text-indigo-700 mb-2">Nombre: {''}
                <span className="font-normal normal-case text-black my-2">{nombre}</span>
            </p>

            <p className="font-bold uppercase text-indigo-700 mb-2">Propietario: {''}
                <span className="font-normal normal-case text-black my-2">{propietario}</span>
            </p>
            
            <p className="font-bold uppercase text-indigo-700 mb-2">Email de Contacto: {''}
                <span className="font-normal normal-case text-black my-2">{email}</span>
            </p>

            <p className="font-bold uppercase text-indigo-700 mb-2">Fecha de Alta: {''}
                <span className="font-normal normal-case text-black my-2">{formatearFecha(fecha)}</span>
            </p>

            <p className="font-bold uppercase text-indigo-700 mb-2">Síntomas: {''}
                <span className="font-normal normal-case text-black my-2">{sintomas}</span>
            </p>

            <div className="flex justify-evenly my-5">
                <button
                    type="button"
                    className="py-2 px-8 mt-5 bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold rounded-lg"
                    onClick={ () => setEdicion(paciente)}
                >Editar</button>

                <button
                    type="button"
                    className="py-2 px-8 mt-5 bg-red-600 hover:bg-red-700 text-white uppercase font-bold rounded-lg"
                    onClick={ () => eliminarPaciente(_id)}
                >Eliminar</button>
            </div>
            
        </div>
    );

};

export default Paciente;