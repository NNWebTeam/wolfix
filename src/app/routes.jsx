import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './components/app'

import HomeIndex from './components/index_home'
import UserLogin from './components/user/login'
import UserLogout from './components/user/logout'
import UserRegister from './components/user/register'
import UserProfile from './components/user/profile'
import ResetPassword from './components/user/reset_password'
import requireAuth from './utils/authenticated'
import Error404 from './components/Error404/Error404'
import Band from './components/Band/Band'
import Music from './components/Music/Music'
import Events from './components/Events'
import Contact from './components/Contact/Contact'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomeIndex} />
    <Route path="/login" component={UserLogin} />
    <Route path="/logout" component={UserLogin} onEnter={requireAuth} />
    <Route path="/register" component={UserRegister} />
    <Route path="/reset" component={ResetPassword} />
    <Route path="/profile" component={UserProfile} onEnter={requireAuth} />
    <Route path='/band' component={Band} />
    <Route path='/music' component={Music} />
    <Route path='/events' component={Events} />
    <Route path='/contact' component={Contact} />
    <Route path='*' component={Error404} />
  </Route>
)
