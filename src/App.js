import React from 'react'
import { observer } from 'mobx-react-lite'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { MainPage, SamplePage } from './pages'

const browserHistory = createBrowserHistory()

const App = observer(() => {
  return (
    <Router history={browserHistory}>
      <div className={'text-center'}>
        <Switch>
          <Route exact path={'/'} component={MainPage} />
          <Route path={'/sample'} component={SamplePage} />
        </Switch>
      </div>
    </Router>
  )
})

export default App
