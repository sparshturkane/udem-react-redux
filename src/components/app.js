import React from 'react';
import BookList from '../containers/book_list'

class App extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render(){
        return(
            <div>
                <BookList />
            </div>
        );
    }
}

export default App;
