import Profile from "./components/Profile";
import Role from "./components/Role";
import User from "./components/User";

export default {
    mode: 'history',

    routes: [
        {
            path: '/profile',
            component: Profile
        },
        {
            path: '/user',
            component: User
        },
        {
            path: '/role',
            component: Role
        }
    ]
}
