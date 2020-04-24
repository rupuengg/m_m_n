import React from 'react';
import { connect } from 'react-redux';
import {BOOK_ACTIONS_TYPES} from '../../actions/book.action';

const BookAdd = (props) => {
    const [title, setTitle] = React.useState('');
    const [desc, setDesc] = React.useState('');

    const handleChange = (e) => {
        if(e.target.name === 'title'){
            setTitle(e.target.value);
        }else if(e.target.name === 'desc'){
            setDesc(e.target.value);
        }
    }

    const handleSave = () => {
        props.saveBook({
            id: Math.random().toString(36).substr(2, 9),
            title, desc
        });
        setTitle('');
        setDesc('');
    }

    return (
        <div>
            <h1>Add book</h1>
            <ul>
                <label>
                    Title
                    <input name="title" value={title} onChange={handleChange} />
                </label>
            </ul>
            <ul>
                <label>
                    Description
                    <input name="desc" value={desc} onChange={handleChange} />
                </label>
            </ul>
            <ul>
                <input type="button" value="Save" onClick={handleSave} />
            </ul>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        saveBook: (book) => dispatch({type: BOOK_ACTIONS_TYPES.SAVE_BOOK, payload: book}),
    };
};

export default connect(null, mapDispatchToProps)(BookAdd);