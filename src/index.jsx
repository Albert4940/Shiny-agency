import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Header from './components/Header'
import Error from './components/Error'
import Footer from './components/Footer'
import Freelance from './pages/Freelances'
import Result from './pages/Results'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import {ThemeProvider, SurveyProvider} from './utils/context/'
import GlobalStyle from './utils/style/GlobalStyle'
ReactDOM.render(
  <React.StrictMode>
    <Router>
     <ThemeProvider>
     <SurveyProvider>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/survey/:questionNumber">
          <Survey />
        </Route>
        <Route path="/freelances">
          <Freelance />
        </Route>
       
          <Route path="/results">
            <Result />
          </Route>
       
        <Route>
          <Error />
        </Route>
      </Switch>
      <Footer />
      </SurveyProvider>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
