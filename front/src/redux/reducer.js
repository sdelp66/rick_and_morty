import { ADD_FAVORITE, FILTER, REMOVE_FAVORITE, ORDER } from "./actions";

const initialState = {
    allCharacters: [],
    myFavorites: []
};

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_FAVORITE:

        console.log("payload>>>" , payload);
            return {
                ...state,
                myFavorites:[...state.myFavorites,payload],
                allCharacters:[...state.myFavorites,payload]
            }
        case REMOVE_FAVORITE:
            return {myFavorites: state.myFavorites.map((caracter) => {
                    return caracter.id!== payload.id;
                })
            }
        case FILTER:
            return {...state,
                myFavorites: state.allCharacters.filter((char) =>char.gender === payload )
            }
        case ORDER:
            return {...state,
                myFavorites: payload === "Ascendente" ?
                 [...state.allCharacters.sort((a,b) => a.id-b.id)]:
                 [...state.allCharacters.sort((a,b) => b.id-a.id)]}
        default:
            return {...state};
    }

};

export default reducer;

