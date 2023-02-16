import {authAPI, searchIdType} from "../api/aviasales-api";
import {Dispatch} from "redux";

export const initialState: searchIdType ={
    searchId:""
}
type InitialStateType = typeof initialState

export const searchIdReducer = (state:InitialStateType =initialState, action:ActionType):searchIdType=>{
    switch (action.type){
        case "SET-SEARCH-ID":
            return {...state, searchId: action.searchId}
        default:
            return  state
    }
}
export const setSearchId =(searchId:string)=>({type:'SET-SEARCH-ID',searchId} as const)
type ActionType = ReturnType<typeof setSearchId>

export const fetchSearchIdTC=()=>{
    return (dispatch: Dispatch)=>{

        authAPI.searchId()
            .then((res)=>{
                dispatch(setSearchId(res.data.searchId))
            })}
}


