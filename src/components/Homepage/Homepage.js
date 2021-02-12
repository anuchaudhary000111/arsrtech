import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Homepage = (props) => {
    const [search, changeSearch] = useState('');
    useEffect(() => {
        props.fetchRepositoryAction();
    }, []);
    return (
        <div className='container'>
            <input value={search} onChange={(e) => changeSearch(e.target.value)} placeholder='Please search here' />
            <h2>Repositories:</h2>
            <ul>
                {
                    props.repositories.filter(x => x.name.includes(search)).map(item => {
                        return (<li key={item.id}>
                            <Link to={`/issues/${item.name}`}>
                                {item.name}
                            </Link>
                        </li>)
                    })
                }
            </ul>
        </div>
    )
}

export default Homepage;