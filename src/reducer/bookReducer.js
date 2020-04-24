import BOOK_ACTIONS_TYPES from '../actions/book.action';

const defaultBookState = {
    list: [{
        id: 1,
        title: 'C#',
        desc: 'It is C#',
        isDeleted: false,
        isCompleted: false,
    },{
        id: 2,
        title: 'PHP',
        desc: 'It is PHP',
        isDeleted: false,
        isCompleted: false,
    },{
        id: 3,
        title: 'Javascript',
        desc: 'It is Javascript',
        isDeleted: false,
        isCompleted: false,
    }],
}

const bookReducer = (state=defaultBookState, action) => {
    switch(action.type){
        case BOOK_ACTIONS_TYPES.SAVE_BOOK:
            const l = state.list.concat(action.payload);
            return {...state, list: l};
        default:
            return state;
    }
}

export default bookReducer;