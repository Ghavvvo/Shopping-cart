import {useParams} from "react-router";

export  function ProfilePage()
{   const params   = useParams<{id:string}>()
    return (
        <div>
            <h1>ProfilePage {params.id}</h1>
        </div>
    )
}