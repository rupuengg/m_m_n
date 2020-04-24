/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {connect} from 'react-redux';
import BookAdd from './Add';

const BookList = (props) => {
    const [isAdd, setIsAdd] = React.useState(false);

    const {book_list} = props;

    const handleAdd = (e) => {
        e.preventDefault();
        setIsAdd(!isAdd);
    }

    return (
        <>
            <h1>
                Book List
                <a href="javascript:;" onClick={(event) => handleAdd(event)}>Add</a>
            </h1>
            <ul>
                {book_list.map((book) => <li key={book.id}>{book.title}</li>)}
            </ul>

            {isAdd && <BookAdd />}
        </>
    );
};

const mapStateToProps = (store) => {
    return {
        book_list: store.book.list,
    };
};

const mapDispatchToProps = () => null;

export default connect(mapStateToProps, mapDispatchToProps)(BookList);