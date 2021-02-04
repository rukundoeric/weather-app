export const cityWeatherInfo = (city) => `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3069ae2718e40f8dc1998b7250e16f10&units=metric`;
export const weatherIcon = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`;
export const weatherBackground = (background) => `http://openweathermap.org/img/wn/${background}@4x.png`
export const countryFlag = (country) => `https://www.countryflags.io/${country}/flat/64.png`;