import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
  <header>
    🌦️ Portal do Clima
  </header>

  <main>
    <h1>Previsão do Tempo </h1>

    <div class="container">
      <div class="card">
        <h2>São Paulo</h2>
        <p>🌡️ Temperatura: 27°C</p>
        <p>🌥️ Condição: Parcialmente nublado</p>
        <p>💧 Umidade: 70%</p>
        <p>💨 Vento: 18 km/h</p>
      </div>

      <div class="card">
        <h2>Rio de Janeiro</h2>
        <p>🌡️ Temperatura: 31°C</p>
        <p>☀️ Condição: Ensolarado</p>
        <p>💧 Umidade: 60%</p>
        <p>💨 Vento: 12 km/h</p>
      </div>

      <div class="card">
        <h2>Curitiba</h2>
        <p>🌡️ Temperatura: 20°C</p>
        <p>🌧️ Condição: Chuva leve</p>
        <p>💧 Umidade: 85%</p>
        <p>💨 Vento: 22 km/h</p>
      </div>

      <div class="card">
        <h2>Curitiba</h2>
        <p>🌡️ Temperatura: 20°C</p>
        <p>🌧️ Condição: Chuva leve</p>
        <p>💧 Umidade: 85%</p>
        <p>💨 Vento: 22 km/h</p>
      </div>

      <div class="card">
        <h2>Fortaleza</h2>
        <p>🌡️ Temperatura: 32°C</p>
        <p>🌤️ Condição: Sol com nuvens</p>
        <p>💧 Umidade: 65%</p>
        <p>💨 Vento: 20 km/h</p>
      </div>

      <div class="card">
        <h2>Porto Alegre</h2>
        <p>🌡️ Temperatura: 24°C</p>
        <p>🌫️ Condição: Neblina</p>
        <p>💧 Umidade: 78%</p>
        <p>💨 Vento: 10 km/h</p>
      </div>

    </div>
  </main>

  <footer>
    © 2025 Portal do Clima — Dados simulados para fins educativos.
  </footer>
    </>
  )
}

export default App
