import React from 'react';
import { connect } from 'react-redux';

class BookDetail extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render(){
        if(!this.props.activeBook){
            return(
                <div>
                    <h3>Details for:</h3>
                    <div>Select Book</div>
                </div>
            );
        }

        return(
            <div>
                <h3>Details for:</h3>
                <div>{this.props.activeBook.title}</div>
            </div>
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
