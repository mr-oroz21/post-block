import React from 'react';
import {connect} from "react-redux";

const Like = ({likes, onIncrementLikes, onDecrementLikes}) => {
    return (
        <div className={'button-controls'}>
            <button onClick={onIncrementLikes}>♥ {likes}</button>
            <button onClick={onDecrementLikes}>Dislike</button>
        </div>
    );
};
const mapStateToProps = (state) => {
    console.log('mapStateToProps', state)
    return {
        likes: state.likes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementLikes: () => {
            console.log('click')
            const action = {
                type: 'INCREMENT'
            }
            dispatch(action)
        },
        onDecrementLikes: () => {
            console.log('click')
            const action = {
                type: 'DECREMENT'
            }
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Like);