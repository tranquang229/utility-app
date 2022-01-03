import React, { lazy } from 'react'
import Loadable from '../../../app/components/Loadable/Loadable'

const MaterialUIYoutubeOutside = Loadable(
    lazy(() => import('./youtube/material-ui/MaterialUIYoutubeOutside'))
)

const learnOutsideRoutes = [
    {
        path: '/learn/material-ui-youtube-outside',
        element: <MaterialUIYoutubeOutside />,
    },
]

export default learnOutsideRoutes
