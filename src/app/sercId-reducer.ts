import {MeType} from "../api/aviasales-api";


const initialState: MeType ={
    searchId:"423zf"
}
type InitialStateType = typeof initialState

export const initialReducer = (state:InitialStateType =initialState, action:ActionType):MeType=>{
    switch (action.type){
        case "init/SET-SEARCH-ID":
            return {...state,searchId: action.searchId}
        default:
            return  state
    }
}
export const setSearchId =(searchId:string)=>({type:'init/SET-SEARCH-ID',searchId} as const)

type ActionType = ReturnType<typeof setSearchId>