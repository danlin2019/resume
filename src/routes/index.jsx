import App from "../App"
import IndexPage from "../page/Index"
import WorkShoe from "../page/WorkShoe"
import WorkElection from "../page/WorkElection"
import WorkMopevent from "../page/WorkMopevent"
import WorkCreativexpo from "../page/WorkCreativexpo"
import WorkDeep from "../page/WorkDeep"
import WorkEsg from "../page/WorkEsg"
import WorkUnimax from "../page/WorkUnimax"
import WorkSillace from "../page/WorkSillace"
import WorkGuide from "../page/WorkGuide"
import WorkSkis from "../page/WorkSkis"
import { createHashRouter } from "react-router-dom"
const routers = [
  {
    path:'/',
    element:<App/>,
    children:[
      {
        index: true,
        element:<IndexPage/>,
      },
      {
        path: '/work/shoe',
        element:<WorkShoe/>,
      },
      {
        path: '/work/election',
        element:<WorkElection/>,
      },
      {
        path: '/work/mopevent',
        element:<WorkMopevent/>,
      },
      {
        path: '/work/creativexpo',
        element:<WorkCreativexpo/>,
      },
      {
        path: '/work/deep',
        element:<WorkDeep/>,
      },
      {
        path: '/work/esg',
        element:<WorkEsg/>,
      },
      {
        path: '/work/unimax',
        element:<WorkUnimax/>,
      },
      {
        path: '/work/sillace',
        element:<WorkSillace/>,
      },
      {
        path: '/work/guide',
        element:<WorkGuide/>,
      },
      {
        path: '/work/skis',
        element:<WorkSkis/>,
      },
      
    ]
  }
]

const router = createHashRouter(routers)
export default router