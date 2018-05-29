import {
    ADD_PLACE,
    DELETE_PLACE
} from "../actions/actionTypes";

const initialState = {
    places: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PLACE:
            return {
                ...state,
                places: state.places.concat({
                    key: Math.random(),
                    name: action.placeName,
                    image: {
                        uri:
                            "https://i.ndtvimg.com/i/2016-08/gateway-of-india-night_650x400_51472559336.jpg"
                    }
                })
            };
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(place => {
                    return place.key !== action.placeKey;
                }),
            };
        default:
            return state;
    }
};

export default reducer;