
import useClima from "../hooks/useClima"

function Formulario() {

  const {alerta, setAlerta, datos, handleDatos, consultarClima} = useClima()

  const handleSubmit = e => {
    e.preventDefault()

    if(Object.values(datos).includes('')) {
      setAlerta('Todos los campos son obligatiorios')
      setTimeout(() => {
        setAlerta('')
      }, 3000);
      return
    }
    
    consultarClima(datos)
  }

  return (
    <div className="contenedor">
      {alerta && <p>{alerta}</p>}
      <form onSubmit={handleSubmit} className="form">
        <div className="campo">
          <label htmlFor="ciudad">Cuidad</label>
          <input
            onChange={e => handleDatos(e.target.name, e.target.value)}
            type="text" 
            placeholder="Ingrese ciudad a buscar" 
            name="ciudad" 
            id="ciudad" 
          />
        </div>
        <div className="campo">
          <label htmlFor="pais">Pais</label>
          <select onChange={e => handleDatos(e.target.name, e.target.value)} name="pais" id="pais">
            <option value="">--Selecione Pais--</option>
            <option value="AR">Argentina</option>
            <option value="MX">Mexico</option>
            <option value="US">Estados Unidos</option>
            <option value="CO">Colombia</option>
            <option value="CR">Costa Rica</option>
            <option value="ES">España</option>
          </select>
        </div>
        <input 
          type="submit" 
          value='Consultar Clima'
        />
      </form>
    </div>
  )
}

export default Formulario