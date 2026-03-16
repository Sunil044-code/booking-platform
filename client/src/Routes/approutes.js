import { lazy } from 'react'


const Home =lazy(()=>import('../Pages/Home'))


export const appRoutes=[
    {name:'home', path:'/',element: Home, }
]