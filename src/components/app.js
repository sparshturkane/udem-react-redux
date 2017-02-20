import React from 'react';
import BookList from '../containers/book_list'
import BookDetail from '../containers/book_detail'

class App extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render(){
        return(
            <div>
                <BookList />
                <BookDetail />
            </div>
        );
    }
}

export default App;
