import axios from 'axios';



const loadData = async () => {
  const { data } = await axios.get(api('kigali'));
  console.log(data);
};

loadData();
