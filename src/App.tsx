import React from 'react';
import logo from './asserts/logo.svg';
import './App.css';
import avia from './asserts/avialogo.svg';

function App() {
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
                  <div className='filter2_element filter2_low-price'>Самый дешевый</div>
                  <div className='filter2_element filter2_faster'>Самый быстрый</div>
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
              </div>

          </div>
      </div>

    </div>
  );
}

export default App;
