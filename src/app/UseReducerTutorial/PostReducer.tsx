
export const INITIAL_STATE = {
    loading: false,
    post : {},
    error: false
}

export const ACTION_TYPES = {
    FETCH_START: "FETCH_START",
    FETCH_SUCCESS: "FETCH_SUCCESS",
    FETCH_ERROR: "FETCH_ERROR"

}

export const postReducer = (state, action) => {
    switch(action.type){
        case "FETCH_START":
            return{
                loading: true,
                post:{},
                error: false
            }
        case "FETCH_SUCCESS":
            return{
                ...state,
                loading: false,
                post:action.payload,
            }
        case "FETCH_ERROR":
            return {
                loading: false,
                post:{},
                error:true
            }
        default:
            return state
    }
}
