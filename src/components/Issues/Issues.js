import { useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const Homepage = (props) => {
    let match = useRouteMatch();

    useEffect(() => {
        props.fetchAllIssuesAction(match.params.id);
    }, []);
    return (
        <div className='container'>
            <h2>Issues:</h2>
            <ul>
                {
                    props.issues.length ? props.issues.map(item => {
                        return <li key={item.id}>
                            <Link to={'/issue/' + match.params.id + '/' + item.number}>{item.title}</Link>
                            <span>{item.state}</span>
                        </li>
                    }) : <p>No Issues Found !!!</p>
                }
            </ul>
        </div>
    )
}

export default Homepage;