import { FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { useState } from "react";
import Card from './shared/Card';

function FeedbackItem({item, handleDelete}) {

    const [rating, setRating] = useState(item.rating);
    const [text, setText] = useState(item.text);


    return (
        <Card reverse={false}>
            <div className="num-display">{ rating }</div>
            <button className="close" onClick={() => handleDelete(item.id)}>
                <FaTimes color="purple"/>
            </button>
            <div className="text-display">{ text }</div>
        </Card>
    )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired
}

export default FeedbackItem;