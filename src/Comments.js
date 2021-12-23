import { useState } from 'react';
import { commentCreate } from './redux/actions';
import { useDispatch, useSelector } from 'react-redux';
import SingleComment from './SingleComment';
import uniqid from 'uniqid';

const Comments = (props) => {
    const [textComment, setTextComment] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setTextComment(e.target.value)
    }
    const comments = useSelector(state => {
        console.log('redux state >,', state)
        const { commentsReducer } = state;
        return commentsReducer.comments
    })
    // console.log('comments > ', comments)
    const handleSubmit = (e) => {
        e.preventDefault()
        const id = uniqid()
        dispatch(commentCreate(textComment, id))
    }
    // console.log('props comments > ', props)
    return (
        
        <div className="card-comments">
            <form onSubmit={handleSubmit} className="comments-item-create">
                <input
                    value={textComment}
                    onChange={handleChange}
                    type="text" />
                <input type="submit" hidden />
            </form>
            {comments.map(res => {
                return <SingleComment key={res.id} data={res} />
            })}
        </div>
    )
}

export default Comments