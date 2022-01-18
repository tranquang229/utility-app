import React, { lazy } from 'react'
import Loadable from '../../../app/components/Loadable/Loadable'

const GitBranchGenerator = Loadable(
    lazy(() => import('./git-branch-generator/GitBranchGenerator'))
)

const utilityRoutes = [
    {
        path: '/utility/git-branch-generator',
        element: <GitBranchGenerator />,
    },
]

export default utilityRoutes
