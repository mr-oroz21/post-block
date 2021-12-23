import {useState, useEffect} from 'react'
const SingleComment = ({data}) => {
    // console.log('data', props)
    const [commentText, setCommentText] = useState('')
    const {text, id} = data;
    // console.log('text', text)
    useEffect(() => {
        if(text) {
            setCommentText(text)
        }
    }, [text])
    return (
        <form className="comments-item">
            <div className="comments-item-delete">&times;</div>
            <input value={commentText} type="text" />
            <input type="submit" hidden />
        </form>
    )
}

export default SingleComment;