import { HeaderOnly } from '~/layouts'

import config from '~/config'

import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Profile from '~/pages/Profile'
import Upload from '~/pages/Upload'
import Live from '~/pages/Live'

//Không cần đăng nhập vẫn vào được
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.following, component: Following },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.live, component: Live },
]

//Phải cần đăng nhập vẫn vào được
const privateRoutes = {}

export { publicRoutes, privateRoutes }
