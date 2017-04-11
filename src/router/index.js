import Login from '../components/login'
import Index from '../components/index'
import Seniority from '../components/seniority'
import CommentDetail from '../components/commentDetail'
import StoneDetail from '../components/stoneDetail'
import StoneShop from '../components/stoneShop'
import Persional from '../components/persional'

let routes = [
  {
    path: '/',
    component: Login
  },
  {
    path:'/index',
    component:Index
  },
  {
    path:'/seniority',
    component:Seniority
  } ,
  {
    path:'/commentDetail',
    component:CommentDetail
  },
  {
    path:'/stoneDetail',
    component:StoneDetail
  },
  {
    path:'/stoneShop',
    component:StoneShop
  },
  {
    path:'/persional',
    component:Persional
  },
]
export default routes;
