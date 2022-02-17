import React from 'react'
import { Switch, Route } from 'react-router'

// const { Switch, Route } = ReactRouterDOM
import routes from './routes.js'

import {Header} from './cmps/Header.jsx'

export class RootCmp extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <main>
                    <Switch>
                        {routes.map(route=> <Route key={route.path} exact component={route.component} path={route.path} /> )}
                    </Switch>
                </main>
                {/* <AppFooter /> */}
            </div>
        )
    }
}


