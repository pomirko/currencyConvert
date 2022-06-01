import { useState, useEffect } from 'react';

import { getBaseRate, getExchange, getReverseExchange } from './service';
import './App.scss';

function App() {
  const [baseRate, setBaseRate] = useState({USD: "--", PLN: '--', EUR: '--'})
  const [typeCurrency, setTypeCurrency] = useState({from: 'UAH', to: 'UAH'})
  const [amountTo, setAmountTo] = useState({amountTo: ''})
  const [amountFrom, setAmountFrom] = useState({amountFrom: ''})
  useEffect(()=> {
    getBaseRate(setBaseRate);
  },[])

  function setAmount(value) {
    value === '' && setAmountTo({amountTo: ''})
    setAmountFrom({...amountFrom, amountFrom: value})
    getExchange(typeCurrency.from, typeCurrency.to, value, amountTo, setAmountTo)
  }

  function setResult(value) {
    value === '' && setAmountFrom({amountFrom: ''})
    setAmountTo({...amountTo, amountTo: value})
    getReverseExchange(typeCurrency.from, typeCurrency.to, value, amountFrom, setAmountFrom)
  }

  function setTypeFrom(type) {
    setTypeCurrency({...typeCurrency, from: type})
    getExchange(type, typeCurrency.to, amountFrom.amountFrom, amountTo, setAmountTo)
  }

  function setTypeTo(type) {
    setTypeCurrency({...typeCurrency, to: type})
    getReverseExchange(typeCurrency.from, type, amountTo.amountTo, amountFrom, setAmountFrom)
  }

  return (
    <div className="App">
      <section
        className='wrapper'
      >
        <section className='container'>
          <header
            className='header'
          >
            Exchange
          </header>
          <section 
            className='currency-container'
          >
            <section 
              className='currency'
            >
              <span>
                USD
              </span>
              <span 
                className='coefficient'
              >
                {baseRate.USD}
              </span>
            </section>
            <section 
              className='currency'
            >
              <span>
                EUR
              </span>
              <span
                className='coefficient'
              >
                {baseRate.EUR}
              </span>
            </section>
            <section 
              className='currency'
            >
              <span>
                PLN
              </span>
              <span
                className='coefficient'
              >
                {baseRate.PLN}
              </span>
            </section>
          </section>
          <section className='exchange-container'>
            <section className='exchange-from'>
              <span>
                From:
              </span>
              <section>
                <select 
                  className='currency-select' 
                  onChange={(select) => setTypeFrom(select.target.value)}
                >
                  <option 
                    value="UAH"
                  >
                    UAH
                  </option>
                  <option 
                    value="USD"
                  >
                    USD
                  </option>
                  <option 
                    value="EUR"
                  >
                    EUR
                  </option>
                  <option 
                    value="PLN"
                  >
                    PLN
                  </option>
                </select>
              </section>
              <input 
                type='text'
                className='input'
                placeholder='Enter your value'
                value={amountFrom.amountFrom}
                onChange={(event) => setAmount(event.target.value)}
              />
            </section>
            <section 
              className='exchange-from'
            >
            <span>
                To:
              </span>
              <section>
                <select 
                  className='currency-select' 
                  onChange={(select) => setTypeTo(select.target.value)}
                >
                  <option 
                    value="UAH"
                  >
                    UAH
                  </option>
                  <option 
                    value="USD"
                  >
                    USD
                  </option>
                  <option 
                    value="EUR"
                  >
                    EUR
                  </option>
                  <option 
                    value="PLN"
                  >
                    PLN
                  </option>
                </select>
              </section>
              <input 
                type='text'
                className='input' 
                placeholder='Enter your value'
                value={amountTo.amountTo}
                onChange={(event) => setResult(event.target.value)}
              />
            </section>
          </section>
        </section>
      </section>
    </div>
  );
}

export default App;
