
import useClima from "../hooks/useClima"

import Formulario from "./Formulario"
import Resultado from "./Resultado"
import Spinner from "./Spinner"

function AppClima() {

  const {resultado, cargando} = useClima()

  return (
    <>
        <main className="dos-columnas">
            <Formulario/>
            
            {!cargando ? resultado?.name && <Resultado/> : <Spinner/>}
            
        </main>
    </>
  )
}

export default AppClima