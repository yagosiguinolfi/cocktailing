import api from '../services/api'

// Buscando usuários do github
api.get(`search.php?s=${params}`)
      .then((response) => doSomething(response.data))
      .catch((err) => {
        console.error("Ops! Ocorreu um erro... " + err);
     });
