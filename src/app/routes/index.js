import React from 'react'
import {Route, IndexRoute} from 'react-router'
import App from './App'
import Home from './Home'

// firebase
import UserLogin from '../components/user/login'
import UserLogout from '../components/user/logout'
import UserRegister from '../components/user/register'
import UserProfile from '../components/user/profile'
import ResetPassword from '../components/user/reset_password'
import requireAuth from '../utils/authenticated'

import WolfNews from './WolfNews'
import Druk3D from './Druk3D'
import Portfolio from './Portfolio'
import Onas from './Onas'
import OnasInfo from './OnasInfo'
import WolfTeam from './WolfTeam'
import Partnerzy from './Partnerzy'
import Projekty from './Projekty'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="/login" component={UserLogin} />
    <Route path="/logout" component={UserLogin} onEnter={requireAuth} />
    <Route path="/register" component={UserRegister} />
    <Route path="/reset" component={ResetPassword} />
    <Route path="/profile" component={UserProfile} onEnter={requireAuth} />

    <Route path="/wolf-news" component={WolfNews} />
    <Route path="/druk-3d" component={Druk3D} />
    <Route path="/portfolio" component={Portfolio} />
    <Route path="/o-nas" component={Onas} />
    <Route path="/o-nas-info" component={OnasInfo} />
    <Route path="/wolf-team" component={WolfTeam} />
    <Route path="/partnerzy" component={Partnerzy} />
    <Route path="/projekty" component={Projekty} />

    <Route path='*' component={() => <div>Error 404</div>} />
  </Route>
)
