import 'bootstrap/dist/css/bootstrap.min.css';
import Headers from './Componnents/Headers';
import {Data} from './data'
import { useState } from 'react';
import MoviesContainer from './Componnents/MoviesContainer';
import AddMovie from './Componnents/AddMovie';

function App() {
  const [movies,setMovies]=useState(Data)
  function addnew(x){
    return setMovies([...movies,x])
  }
  const filter=(search,rat)=>{
   
      setMovies(movies.filter(el=> el.rate>=rat && el.title.toLowerCase().includes(search.toLowerCase()) ))

  }

  return (
    <>
      <Headers filter={filter}/>
      <AddMovie addnew={addnew}/>
      <MoviesContainer movies={movies} />
     
    </>
  );
}

export default App;
