export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

export const addFavorite = (caracter) =>{
    return {type: ADD_FAVORITE, payload: caracter};
}
export const removeFavorite = (id) =>{
    return {type: REMOVE_FAVORITE, payload: id};
}