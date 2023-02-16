import React, {useCallback, useEffect, useState} from 'react';
import logo from './asserts/logo.svg';
import './App.css';
import avia from './asserts/avialogo.svg';
import { useSelector} from "react-redux";
import {AppRootStateType, useAppDispatch} from "./app/store";
import {Ticket} from "./api/aviasales-api";
import {fetchSearchIdTC} from "./app/sercId-reducer";
import {setPackTicketTC} from "./app/tikets-reducer";

import format from "date-fns/format";
import add from "date-fns/add";

function App() {
    //const[searchId,setSearchId]= useState()
    //const [tickets,setTickets]= useState([])
  //  const[stop,setStop] =useState(false)

    const LOW_PRICE= 'low-price'
    const FASTER= 'faster'
    const[sortTickets,setSortTickets] = useState<Array<Ticket>>([])

    const searchId = useSelector<AppRootStateType,string>((state)=> state.searchId.searchId)
    const tickets = useSelector<AppRootStateType,Array<Ticket>>((state)=>state.tikets.tickets)
    const stop = useSelector<AppRootStateType,boolean | null>((state)=>state.tikets.stop)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchSearchIdTC())
    }, [])

    useEffect(() => {
        if (searchId && !stop) {
            dispatch(setPackTicketTC(searchId))
        }
    }, [searchId,tickets,stop])

    useEffect(()=>{
        if(stop=== true){

            setSortTickets(tickets.splice(0,4))
        }
    },[stop])
    function getBoardingTime(seconds: number) {
        const hours = (seconds / 360) ^ 0;
        const minutes = ((seconds - hours * 360) / 60) ^ 0;

        const str = `${
            hours === 0 ? "" : hours < 10 ? "0" + hours + "ч" : hours + "ч"
        } ${
            minutes === 0 ? "" : minutes < 10 ? "0" + minutes + " м" : minutes + " м"
        }`;

        return str;
    }
    function getTimeOnFly(date: string, second: number) {
        let result = add(new Date(date), {
            seconds: second
        });
        return `${format(new Date(date), "HH:mm")} : ${format(
            new Date(result),
            "HH:mm"
        )}`;
    }
    function declOfNum(number: number) {
        switch (number) {
            case 0:
                return "Прямой";
            case 1:
                return "1 пересадка";
            case 2:
                return "2 пересадки";
            case 3:
                return "3 пересадки";
            case 4:
                return "4 пересадки";

            default:
                return number;
        }
    }

    const sorterHandler = useCallback(()=>{

    },[])

  return (
    <div className="App">
      <div className='app-wrapper'>
          <div className='header'><img src={logo} alt='logo'/></div>
          <div className='main'>
              <div className='dummi'>
              <div className='sidebar'>
                  <h3>Количество пересадок</h3>
                  <form>
                      <label>
                          <input type="checkbox"  className="input visually-hidden"/>
                          <span className="checker"> </span>
                          Все
                      </label>
                      <label>
                          <input type="checkbox"  className="input visually-hidden"/>
                          <span className="checker"> </span>
                          Без пересадок
                      </label>
                      <label>
                          <input type="checkbox"  className="input visually-hidden"/>
                          <span className="checker"> </span>
                          1 пересадка
                      </label>
                      <label>
                          <input type="checkbox"  className="input visually-hidden"/>
                          <span className="checker"> </span>
                          2 пересадка
                      </label>
                      <label>
                          <input type="checkbox"  className="input visually-hidden"/>
                          <span className="checker"> </span>
                          3 пересадка
                      </label>
                  </form>
              </div>
              </div>
              <div className='filter2'>
                  <div className='filter2_element filter2_low-price' onClick={()=>{}}>Самый дешевый</div>
                  <div className='filter2_element filter2_faster' onClick={()=>{}}>Самый быстрый</div>
              </div>
              <div className='tickets'>
                  <div className='ticket'>
                  <div className='ticket_header'>
                      <div className='ticket_price'> 13 400 P</div>
                      <div className='ticket_logo'>
                          <img src={avia} alt='avia'/>
                      </div>
                  </div>
                  <div className='ticket_data-wrapper'>
                      <div className='ticket_data'>
                          <div className='ticket_data-item'>
                              <p className='ticket_data-item_grey'>MOW-HKT</p>
                              <p>10:45-08:00</p>
                          </div>
                          <div className='ticket_data-item'>
                              <p className='ticket_data-item_grey'>MOW-HKT</p>
                              <p>10:45-08:00</p>
                          </div>
                          <div className='ticket_data-item'>
                              <p className='ticket_data-item_grey'>MOW-HKT</p>
                              <p>10:45-08:00</p>
                          </div>
                      </div>
                      <div className='ticket_data'>
                          <div className='ticket_data-item'>
                              <p className='ticket_data-item_grey'>MOW-HKT</p>
                              <p>10:45-08:00</p>
                          </div>
                          <div className='ticket_data-item'>
                              <p className='ticket_data-item_grey'>MOW-HKT</p>
                              <p>10:45-08:00</p>
                          </div>
                          <div className='ticket_data-item'>
                              <p className='ticket_data-item_grey'>MOW-HKT</p>
                              <p>10:45-08:00</p>
                          </div>
                      </div>
                  </div>
                  </div>
                  {sortTickets.map((ticket)=>(
                      <div className='ticket' >
                          <div className='ticket_header'>
                              <div className='ticket_price'>{ticket.price}</div>
                              <div className='ticket_logo'>
                                  <img src={`//pics.avs.io/99/36/${ticket.carrier}.png`} alt='avia'/>
                              </div>
                          </div>
                          <div className='ticket_data-wrapper'>
                              {ticket.segments.map((segment,key)=>
                                  <div className='ticket_data'>
                                      <div className='ticket_data-item'>
                                          <p className='ticket_data-item_grey'>{segment.origin} - {segment.destination}</p>

                                          <p>{getTimeOnFly(segment.date,segment.duration)}</p>

                                      </div>
                                      <div className='ticket_data-item'>
                                          <p className='ticket_data-item_grey'>В пути</p>
                                          <p>{getBoardingTime(segment.duration) }</p>
                                      </div>
                                      <div className='ticket_data-item'>
                                          <p className='ticket_data-item_grey'>{ declOfNum(segment.stops.length)} </p>
                                          <p>{segment.stops.join(', ')}</p>
                                      </div>
                                  </div>
                              )}


                          </div>
                      </div>
                  ))}
              </div>

          </div>
      </div>

    </div>
  );
}

export default App;
