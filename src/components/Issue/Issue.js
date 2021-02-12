import { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';

const Homepage = (props) => {
    const [value, changeValue] = useState('');
    let match = useRouteMatch();

    useEffect(() => {
        props.fetchIssueAction(match.params.repoid, match.params.id);
    }, []);

    const sendAPi = () => {
        props.addCommentAction(match.params.repoid, match.params.id, value);
    }

    return (
        <div className='container'>
            <h2>Issue: {props.issue.title}</h2>
            <p><i>{props.issue.user && props.issue.user.login}</i></p>
            <p>{props.issue.body}</p>
            <h3>Comments:</h3>
            {
                props.comments.length ? props.comments.map(item => {
                    return <div key={item.id} className='singleCmt'>
                        <i><b>{item.user.login}:</b></i> {item.body}
                    </div>
                }) : <p>No Comments Found !!!</p>
            }
            <div className='addCmt'>
                <textarea rows="4" cols="50" value={value} onChange={(e) => changeValue(e.target.value)} />
                <div><button onClick={sendAPi}>Add Comment</button></div>
            </div>
        </div>
    )
}

export default Homepage;