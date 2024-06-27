export const USER_DETAILS = (users) => {
    return {
        type: "USER_DETAILS",
        payload: users
    }
}
export const FETCH_MOBILE_LIST = (mobile) => {
    return {
        type: "FETCH_MOBILE_LIST",
        payload: mobile
    }
}
export const SELECT_MOBILE = (mobile) => {
    return {
        type: "SELECT_MOBILE",
        payload: mobile
    }
}
export const ADD_MOBILE = (mobile) => {
    return {
        type: "ADD_MOBILE",
        payload: mobile
    }
}
export const EDIT_MOBILE = (mobile) => {
    return {
        type: "EDIT_MOBILE",
        payload: mobile
    }
}
export const DELETE_MOBILE = (mobile) => {
    return {
        type: "DELETE_MOBILE",
        payload: mobile
    }
}