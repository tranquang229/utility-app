import React, { lazy } from 'react'
import Loadable from '../../../app/components/Loadable/Loadable'

const MaterialUIYoutube = Loadable(
    lazy(() => import('./youtube/material-ui/MaterialUIYoutube'))
)

const learnRoutes = [
    {
        path: '/learn/material-ui-youtube',
        element: <MaterialUIYoutube />,
    },
]

export default learnRoutes
