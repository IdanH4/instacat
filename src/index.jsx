import React from 'react'
import ReactDOM from 'react-dom/client'


import { BrowserRouter as Router, HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'


import { store } from './store/store'
import { RootCmp } from './RootCmp'

import './assets/styles/main.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<Provider store={store}>
		<HashRouter>
			<RootCmp />
		</HashRouter>
	</Provider>
)
