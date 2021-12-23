import React from 'react';
import {connect} from "react-redux";
import {decrementLikes, incrementLikes} from "./redux/actions";

const Like = ({likes, onIncrementLikes, onDecrementLikes}) => {
    return (
        <div className={'button-controls'}>
            <button onClick={onIncrementLikes}>♥ {likes}</button>
            <button onClick={onDecrementLikes}>Dislike</button>
        </div>
    );
};
const mapStateToProps = (state) => {
    // console.log('mapStateToProps', state)
    const {LikeReducer} = state
    return {
        likes: LikeReducer.likes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementLikes: () => dispatch(incrementLikes()),
        onDecrementLikes: () => dispatch(decrementLikes())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Like);