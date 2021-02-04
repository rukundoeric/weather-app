import { form as _, checkbox as __ } from './helpers/element';
import Weather from './modules/_weather';
import {
  displayInfo,
  displayNotFound,
  displayLoader,
} from './modules/index';

const weather = new Weather();

displayLoader();
_.get().addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  try {
    const responce = await (await weather.find(formData.get('city'), displayLoader)).get();
    displayInfo(responce);
  } catch (err) {
    displayNotFound();
  }
});

__.get().addEventListener('change', async ({ target: { checked } }) => {
  displayInfo(weather.get(), checked);
});
