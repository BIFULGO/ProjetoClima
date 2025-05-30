import React from 'react';
import './Main.css';
import './styles/global.css'
function Main() {
  const city = 'Mogi das Cruzes'; // Sua localização
  const currentWeather = {
    temperature: 27,
    description: 'Sol com algumas nuvens',
    humidity: 70,
    windSpeed: 10,
    icon: sunnyIcon,
  };

  return (
    <main className="main-content">
      <section className="weather-info">
        <h2>Clima Atual em {city}</h2>
        <div className="weather-details">
          <div className="temperature">
            <p>{currentWeather.temperature}°C</p>
            {currentWeather.icon && (
              <img src={currentWeather.icon} alt={currentWeather.description} width="50" height="50" />
            )}
          </div>
          <p className="description">{currentWeather.description}</p>
          <p>Umidade: {currentWeather.humidity}%</p>
          <p>Vento: {currentWeather.windSpeed} km/h</p>
        </div>
      </section>
      <section className="other-features">
        {/* Adicione aqui outros componentes ou elementos */}
        <p>Outras funcionalidades em desenvolvimento...</p>
      </section>
    </main>
  );
}

export default Main;