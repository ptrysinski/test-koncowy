import React from 'react'
// import Error from './Error'
// import Loading from './Loading'
// import NotLoaded from './NotLoaded'
// import NoUsers from './NoUsers'
import Results from './Results';


const List = (props) => (
    <div>
        {
            props.isError ?
                'Error'
                :
                !props.users ?
                    'Loading'
                    :
                    props.users.length === 0 ?
                        'No Users'
                        :
                        <Results
                            data={props.users}
                        />
        }
    </div>
)

export default List