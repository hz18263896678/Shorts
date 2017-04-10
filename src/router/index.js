import Login from '../components/login'
import Index from '../components/index'
import Seniority from '../components/seniority'
import CommentDetail from '../components/commentDetail.vue'

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
]
export default routes;
