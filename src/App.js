import {useEffect, useState} from "react";
import MovieCard from './MovieCard';
import './app.css';
import SearchIcon from './search.svg'

// b5f6e2c

const API_URL=' http://www.omdbapi.com/?i=tt3896198&apikey=b5f6e2c';
const movie={
    
        "Title": "Amazing Spiderman Syndrome",
        "Year": "2012",
        "imdbID": "tt2586634",
        "Type": "movie",
        "Poster": "N/A"
    
}

const App =()=>{
    const [movies,setMovies] = useState([]);
    const [searchTerm,setsearchTerm] = useState([]);
    const searchMovies = async (title) => {
        const response =await fetch(`${API_URL}&s=${title}`);
        const data =await response.json();
        setMovies(data.Search);
    }
    useEffect(()=>{
        searchMovies('spiderman');

    },[])
    return(
        <div className="app"><h1>MovieLand</h1>
        <div className="search">
            <input 
            placeholder="search for movies"
            value={searchTerm}
            onChange={(e)=>setsearchTerm(e.target.value)}/>
            <img 
            src={SearchIcon}
            alt="search" 
            onClick={()=>searchMovies(searchTerm)}
            />
        </div>
        

        
      {movies?.length > 0 ? (
           <div className="container">
           {movies.map((movie) => (
             <MovieCard movie={ movie } />
           ))}
         </div>
       
      ) : (
        <div className="empty">
         <h2>No movies found</h2>
       </div>
      
       
      )}
       
        </div>
        

    );
}
export default  App;