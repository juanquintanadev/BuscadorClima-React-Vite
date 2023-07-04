/* eslint-disable react/prop-types */
import axios from "axios";
import { createContext, useState } from "react";

export const ClimaContext = createContext();

function ClimaProvider({children}) {

    const [datos, setDatos] = useState({
        ciudad: '',
        pais: '',
    })

    const [resultado, setResultado] = useState({})
    const [cargando, setCargando] = useState(false)
    const [alerta, setAlerta] = useState('')

    const handleDatos = (name, value) => {
        setDatos({
            ...datos,
            [name]: value
        })
    }

    const consultarClima = async datosBusqueda => {
        setCargando(true)
        try {
            const {ciudad, pais} = datosBusqueda
            const appId = import.meta.env.VITE_API_KEY

            // esta respuesta obtenemos la lat y long con esto hacemos otra consulta a la api del clima
            const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},{},${pais}&limit=1&appid=${appId}`

            const {data} = await axios(url)
            const {lat, lon} = data[0]

            const urlClima = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`

            // requerimos los datos de la consulta anterior para realizar la consulta nueva
            const {data : dactaClima} = await axios(urlClima)

            setResultado(dactaClima)

        } catch (error) {
            setAlerta('No se encuentra la ciudad que seleccionaron')
            setTimeout(() => {
                setAlerta('')
            }, 3000);
        } finally {
            setCargando(false)
        }
    }

    return (
        <ClimaContext.Provider
            value={{
                datos,
                handleDatos,
                consultarClima,
                resultado,
                cargando,
                alerta,
                setAlerta
            }}
        >
            {children}
        </ClimaContext.Provider>
    )
}

export default ClimaProvider