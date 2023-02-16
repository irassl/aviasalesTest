import {AnyAction, applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware, {ThunkDispatch} from "redux-thunk";
import {searchIdReducer} from "./sercId-reducer";
import {useDispatch} from "react-redux";
import {TicketsReducer} from "./tikets-reducer";


const rootReducer = combineReducers({
    searchId: searchIdReducer,
    tikets: TicketsReducer

})
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppDispatch = ThunkDispatch<AppRootStateType, unknown, AnyAction>
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>()

// @ts-ignore
window.store = store;