import { useDispatch, useSelector } from "react-redux";
import { inputText } from "./redux/actions";

const Title = (props) => {
    console.log('props title > ', props)
    const dispatch = useDispatch()

    const text = useSelector(state => {
        const {inputReducer} = state;
        return inputReducer.text
    })
    const handleChange = (e) => {
        dispatch(inputText(e.target.value))
    }
    return (
        <div className="card-title">
            <div className="card-title-top">
                <input
                    onChange={handleChange}
                    type="text" />
            </div>
            <p>{text}</p>
        </div>
    )
}

export default Title;