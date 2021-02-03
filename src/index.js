import { form as _ } from './helpers/element';
import Weather from './modules/_weather';
import {
  displayInfo,
  displayNotFound,
  displayLoader,
} from './modules/index';

displayLoader();
_.get().addEventListener('submit', async (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  try {
    const responce = await (await new Weather().find(formData.get('city'), displayLoader)).get();
    displayInfo(responce);
  } catch (err) {
    displayNotFound();
  }
});
