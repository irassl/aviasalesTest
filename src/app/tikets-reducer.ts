import {authAPI, packTickets, Ticket} from "../api/aviasales-api";
import {Dispatch} from "redux";

//{tickets: Array(413), stop: false}
export const initialState: packTickets ={
    tickets: [],
    stop: null
}
type InitialStateType = typeof initialState

export const TicketsReducer = (state:InitialStateType =initialState, action:ActionType):packTickets=>{
    switch (action.type){
        case "NULL-TICKETS":
            return {...state, stop: null}
        case "SET-TICKETS":
            return <packTickets>{...state, tickets: [...action.tickets,...state.tickets], stop: action.stop}
        default:
            return  state
    }
}
export const nullTicket=()=>({type:'NULL-TICKETS'} as const)
export const setPackTicket= (tickets:Array<Ticket>, stop:boolean)=>({type: 'SET-TICKETS',tickets,stop} as const)
type ActionType =  ReturnType<typeof nullTicket> | ReturnType<typeof setPackTicket>

// todo change naming
export const setPackTicketTC = (searchId: string) => {
    return (dispatch: Dispatch) => {
            authAPI.packTickets(searchId)
                .then((res) => {
                    dispatch(setPackTicket(res.data.tickets, res.data.stop))
                }).catch(()=>{
                dispatch(nullTicket())
            })
    }
}