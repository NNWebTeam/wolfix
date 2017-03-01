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

import WolfNews from './components/WolfNews/WolfNews'
import Druk3D from './components/Druk3D/Druk3D'
import Portfolio from './components/Portfolio/Portfolio'
import Onas from './components/Onas/Onas'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomeIndex} />
    <Route path="/login" component={UserLogin} />
    <Route path="/logout" component={UserLogin} onEnter={requireAuth} />
    <Route path="/register" component={UserRegister} />
    <Route path="/reset" component={ResetPassword} />
    <Route path="/profile" component={UserProfile} onEnter={requireAuth} />

    <Route path="/wolf-news" component={WolfNews} />
    <Route path="/druk-3d" component={Druk3D} />
    <Route path="/portfolio" component={Portfolio} />
    <Route path="/o-nas" component={Onas} />

    <Route path='*' component={() => <div>Error 404</div>} />
  </Route>
)
