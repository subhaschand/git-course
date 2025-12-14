
import { createContext,useState,useEffect,useContext } from "react";


const MovieContext=createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useMovieContext=()=>useContext(MovieContext)

export const MovieProvider=({children})=>{
  const[favorites,setFavorites]=useState([])

  useEffect(()=>{
    const storedFavs=localStorage.getItem("favorites")

    // eslint-disable-next-line react-hooks/set-state-in-effect
    if(storedFavs) setFavorites(JSON.parse(storedFavs))

  },[])

  useEffect(()=>{

    localStorage.setItem('favorites',JSON.stringify(favorites))
  },[favorites])

  const addToFavorites =(movie)=>{

    setFavorites(p=>[...p,movie])
  }
  const removeFromFavorites =(movieId)=>{

    setFavorites(p=>p.filter(movie=>movie.id!==movieId))

  }
  const isFavorite =(movieId)=>{
    return favorites.some(movie=>movie.id===movieId)
  }

  const value={
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite
  }

  return <MovieContext.Provider value={value}>
    {children}
  </MovieContext.Provider>
}