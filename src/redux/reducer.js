import { ADD_FAVORITE, REMOVE_FAVORITE } from "./actions";

const initialState = {
    myFavorites: [],
};

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_FAVORITE:

        console.log("payload>>>" , payload);
            return {myFavorites:[...state.myFavorites, payload]
            }
        case REMOVE_FAVORITE:
            return {myFavorites: state.myFavorites.map((caracter) => {
                    return caracter.id!== payload.id;
                })
            }
        default:
            return {...state};
    }

};

export default reducer;

