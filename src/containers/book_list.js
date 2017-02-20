import React from 'react';

class BookList extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    renderList() {
        return this.props.books.map((book) =>{
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
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

export default BookList;
