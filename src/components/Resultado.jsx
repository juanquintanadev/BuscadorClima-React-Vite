import useClima from "../hooks/useClima"

function Resultado() {

    const {resultado} = useClima()

    const {name, main} = resultado

    // grados kelvin
    const kelvin = 273.15

    return (
        <div className="contenedor clima">
            <h2 className="heading">{name}</h2>
            <p  className="temperatura">Temperatura: <span>{ parseInt(main.temp - kelvin)} &#x2103;</span></p>
            <div className="temp_min_max">
                <p>Max: <span>{parseInt(main.temp_max - kelvin)} &#x2103;</span></p>
                <p>Min: <span>{parseInt(main.temp_max - kelvin)} &#x2103;</span></p>
            </div>
            
        </div>
    )
}

export default Resultado