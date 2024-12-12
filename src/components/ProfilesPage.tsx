import {Link, NavLink, Outlet} from "react-router-dom";

export function ProfilesPage() {
    const profiles = [1, 2, 3, 4, 5]
    return (
        <div>
            <div>
                <h1>ProfilesPage</h1>
                <ul>
                    {profiles.map(profile => <NavLink className={({isActive}) => { return isActive ? 'text-white' : '' }} to={`/profiles/${profile}`} key={profile}>Profile #{profile}</NavLink>)}
                </ul>

            </div>
            <Outlet/>
        </div>

    )
}