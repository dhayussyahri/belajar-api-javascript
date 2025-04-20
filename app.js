// const req = new XMLHttpRequest();

// req.onload = function () {
//    const data = JSON.parse(this.responseText);
//    console.log(data);
// };

// req.onerror = function () {
//    console.log('error', this);
// };

// req.open('GET', 'https://swapi.dev/api/people/1');
// req.send;

//////////////////////////////////////////////////////////
// Melakukan Request Dengan Fetch

// fetch('https://swapi.dev/api/people/1')
//    .then((res) => {
//       if (!res.ok) {
//          throw Error('could not fetch  the data for that resource')
//       }
//       return res.json();
//    })
//    .then((data) => {
//       console.log('json', data);

//    })
//       .catch((err) => {
//          console.log('error', err);
//    })

// const loadPeople = async () => {
//    const res = await fetch('https://swapi.dev/api/people/1');
//    const data = await res.json();
//    console.log(data);
// };
// loadPeople();
// axios
//    .get('https://swapi.dev/api/people/id')
//    .then((res) => {
//       console.log(res.data);
//    })
//    .catch((err) => {
//       console.log(err);
//       alert(err.massage);
//    })

const getPeople = async (id) => {
   try {
      const res = await axios.get(`https://swapi.dev/api/people/${id}`);
      console(res.data);
   } catch (error) {
      console.log(error);
      console.log(error.message);
      console.log(error.response.status);
      console.log(error.response.data);
   }
};