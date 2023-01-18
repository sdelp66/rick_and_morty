import axios from "axios";

export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const FILTER = 'FILTER';
export const ORDER = 'ORDER';
export const RESET = 'RESET'



export const addFavorite = (caracter) =>{
    return (dispatch) => {
        axios.post(`http://localhost:3001/rickandmorty/fav`, caracter)
        .then((v) => v.data)
        .then((d) => {
        dispatch({
          type: ADD_FAVORITE,
          payload: d,
        });
      });
  };
}
export const removeFavorite = (id) =>{
    return (dispatch) => {
        axios.delete(`http://localhost:3001/rickandmorty/fav`, id)
        .then((v) => v.data)
        .then((d) => {
        dispatch({
          type: REMOVE_FAVORITE,
          payload: d,
        });
      });
  };
}

export const filterCards = (genero) => {
    return {type: FILTER, payload: genero};
}

export const orderCards = (id) => {
    return {type: ORDER, payload: id};
}

export const reset = () => {
    return {
        type: RESET,
      };
}