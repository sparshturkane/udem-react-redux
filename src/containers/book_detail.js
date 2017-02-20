import React from 'react';
import { connect } from 'react-redux';

class BookDetail extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render(){

        return(
            <div>{/*this.props.activeBook.title*/}</div>
        );
    }
}

// export default BookDetail;
function mapStateToProps(state) {
    return {
        activeBook: state.activeBook,
    };
}

export default connect(mapStateToProps)(BookDetail);
