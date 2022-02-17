// import {HomePage} from './pages/home-page.jsx'
// import {AboutUs} from './pages/about-us.jsx'
import {BookApp} from './pages/BookApp.jsx'
// import {BookEdit} from './pages/BookEdit'
import {BookDetails} from './pages/BookDetails'
import {LoginPage} from './pages/LoginPage.jsx'

const routes = [
    {
        path:'/books',
        component: BookApp,
    }
    ,
    {
        path:'/details/:bookISBN',
        component: BookDetails,
    }
    ,
    {
        path:'/',
        component: LoginPage,
    }
]

export default routes;