import React from 'react'
import { Provider } from 'mobx-react'
import store from './store'
import Home from './pages/home'

import './App.less'

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <Home />
      </Provider>
    </div>
  )
}

export default App
