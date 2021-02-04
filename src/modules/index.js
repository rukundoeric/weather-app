/* eslint-disable camelcase */
import { countryFlag, weatherIcon, weatherBackground } from '../helpers/apis';
import { sunrise as toSunriseLT, sunset as toSunsetLT } from '../helpers/time';
import temperature from '../helpers/temp';
import {
  c_city_name,
  c_c_flag,
  c_c_value,
  c_c_icon,
  c_others,
  c_times,
  not_found,
  w_c_info,
  loader,
  body,
} from '../helpers/element';

export const displayInfo = ({
  name,
  main: { feels_like, humidity, temp },
  sys: { country, sunrise, sunset },
  weather,
}, isF) => {
  const { description, icon } = weather[0];

  c_city_name.setText(`${name}, ${country}`);
  c_c_flag.get().src = countryFlag(country);

  c_c_value.setText(temperature(temp, isF));
  c_c_icon.get().src = weatherIcon(icon);

  c_others.setText(`Feels Like ${temperature(feels_like, isF)} | ${description} | Humidity ${humidity}%`);
  c_times.setText(`Sunrise: ${toSunriseLT(sunrise)} | Sunset: ${toSunsetLT(sunset)}`);

  body.get().style.backgroundImage = `url('${weatherBackground(icon)}')`;

  loader.hide();
  not_found.hide();
  w_c_info.show('block');
};

export const displayNotFound = () => {
  w_c_info.hide();
  loader.hide();
  not_found.show('flex');
};

export const displayLoader = () => {
  w_c_info.hide();
  not_found.hide();
  loader.show('flex');
};