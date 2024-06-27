const initialState = {
    mobileListUpdated: [],
    compareMobileArray: [],
    userDetails: null,
}
export default function mobileReducer(state = initialState, action) {
    switch (action.type) {
        case "USER_DETAILS":
            // console.log("USER_DETAILS payload", action.payload);
            return {
                ...state,
                userDetails: action.payload
            }
        case "FETCH_MOBILE_LIST":
            // console.log("action.payload", action.payload);
            return {
                ...state,
                mobileListUpdated: action.payload
            }
        case "ADD_MOBILE":
            // console.log(" ADD_MOBILEadd Mobile")
            return {
                ...state,
                mobileListUpdated: [...state.mobileListUpdated, action.payload]
            }
        case "EDIT_MOBILE":
            console.log(" EDIT mobile reducer", action.payload);
            return {
                ...state,
                mobileListUpdated: state.mobileListUpdated.map((mobile) => {
                    // console.log("EDIT_MOBILE", mobile, action.payload)
                    // return mobile._id == action.payload._id ? action.payload : mobile
                    // console.log("EDIT_MOBILE records", mobile, action.payload, mobile._id == action.payload._id)
                    return mobile._id == action.payload._id ? action.payload : mobile
                })
            }
        case "DELETE_MOBILE":
            console.log("DELETE_MOBILE", action.payload)
            return {
                ...state,
                mobileListUpdated: state.mobileListUpdated.filter((mobile) => {
                    // console.log("mobile.id != action.payload.id", mobile._id, action.payload._id)
                    return mobile._id != action.payload._id
                })
            }
        case "SELECT_MOBILE":
            console.log("Select Mobile reducer", action.payload, action.payloadSelection);
            console.log("compareMobileArray from reducer", state.compareMobileArray)
            if(action.payloadSelection) {
                console.log("product is already there");
                return {
                    ...state,
                    // compareMobileArray: [...state.compareMobileArray, action.payload]
                    compareMobileArray: state.compareMobileArray.filter((mobile)=> {
                        console.log("mobile._id != action.payload._id", mobile._id, action.payload._id);
                        return mobile._id != action.payload._id
                    })
                }
            }
            else {
                console.log("New Product added");
                return {
                    ...state,
                    compareMobileArray: [...state.compareMobileArray, action.payload]
                }
            }
            // return {
            //     ...state,
            //     // compareMobileArray: [...state.compareMobileArray, action.payload]
            //     compareMobileArray: state.compareMobileArray.map((mobile)=> {
            //         console.log("mobile._id != action.payload._id", mobile._id, action.payload._id);
            //         return mobile._id != action.payload._id
            //     })
            // }
        default:
            return state;

    }
}