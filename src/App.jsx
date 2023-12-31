import ClimaProvider from "./context/ClimaProvider"

import AppClima from "./components/AppClima"

function App() {

  return (
      <ClimaProvider>
        <header>
          <h1>Buscador de clima por ciudad</h1>
        </header>
        <AppClima/>
      </ClimaProvider>
      
  )
}

export default App
