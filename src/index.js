import axios from 'axios';

const api = (v) => `https://api.openweathermap.org/data/2.5/weather?q=${v}&appid=3069ae2718e40f8dc1998b7250e16f10&units=metric`;

const loadData = async () => {
  const { data } = await axios.get(api('kigali'));
  console.log(data);
};

loadData();
