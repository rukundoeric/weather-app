/* eslint-disable camelcase */
import { countryFlag, weatherIcon } from '../helpers/apis';
import { sunrise as toSunriseLT, sunset as toSunsetLT } from '../helpers/time';
import {
  c_city_name,
  c_c_flag,
  c_c_value,
  c_c_icon,
  c_others,
  c_times,
  not_found,
  w_c_info,
  loader
} from '../helpers/element';

export const displayInfo = ({
  name,
  main: { feels_like, humidity, temp },
  sys: { country, sunrise, sunset },
  weather,
}) => {
  const { description, icon } = weather[0];

  c_city_name.setText(`${name}, ${country}`);
  c_c_flag.get().src = countryFlag(country);

  c_c_value.setText(`${temp}°C`);
  c_c_icon.get().src = weatherIcon(icon);

  c_others.setText(`Feels Like ${feels_like}°C | ${description} | Humidity ${humidity}%`);
  c_times.setText(`Sunrise: ${toSunriseLT(sunrise)} | LSunset: ${toSunsetLT(sunset)}`);
};

export const displayNotFound = () => {
  w_c_info.hide();
  loader.hide();
  not_found.show();
};

export const displayLoader = () => {
  w_c_info.hide();
  not_found.hide();
  loader.show();
};