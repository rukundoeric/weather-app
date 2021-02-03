/* eslint-disable camelcase */
export default class Element {
  find(value) {
    this.elm = document.querySelector(value);
    return this;
  }

  get() {
    return this.elm;
  }

  hide() {
    this.elm.style.display = 'none';
    return this;
  }

  show() {
    this.elm.style.display = 'flex';
    return this;
  }
}

export const c_city_name = new Element().find('#c-city-name');
export const c_c_flag = new Element().find('#c-c-flag');

export const c_c_value = new Element().find('#c-c-value');
export const c_c_icon = new Element().find('#c-c-icon');

export const c_others = new Element().find('#c-others');
export const c_times = new Element().find('#c-times');

export const not_found = new Element().find('#not-found');
export const w_c_info = new Element().find('#w-c-info');
export const loader = new Element().find('#loader');
