import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import { selectBook } from '../actions/index';

class BookList extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    renderList() {
        return this.props.books.map((book) =>{
            return (
                <li key={book.title} onClick={ () => this.props.selectBook(book) } className="list-group-item">{book.title}</li>
            );
        });
    }

    render(){
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
}

// anything returned by this function will end us as props on the BookList container
function mapStateToProps(state) {
    return {
        books: state.books
    }
}

// anything returned by this function will end us as props on the BookList container
function mapDispatchToProps(dispatch) {
    // whenever selectBook is called, the result should be passed
    // to all of our reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote BookList from a component to a container - it neeeds to know
// about this new dispatch method, selectBook. make it avaliable
// as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
