import Form from "./components/Form";
import Header from "./components/Header";
import Type from "./components/Type";
import { useState } from 'react';

function App() {

  const types = [
    {
      name: 'Filmes'
    },
    {
      name: 'Séries'
    },
    {
      name: 'Animes'
    },
    {
      name: 'Jogos'
    }
  ]

  const [films, setFilms] = useState([]);

  const newFilm = (film) => {
    setFilms([...films, film]) 
  }

  return (
    <div className="App">
     <Header />
     <Form types={types.map(type => type.name)} filmSave={film => newFilm(film)}/>
     {types.map(type => <Type
     key={type.name}
     name={type.name}
     films={films.filter(film => film.type === type.name)}
     />)}
    </div>
  );
}

export default App;
