// the state argument is not all the state.
// it reffers to the state for which the reducer is responsible for
export default function (state = null, action) { // when in begining the no book is selected then the state is null by default
    // if we care about the action it will be written in a switch className
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
        break;
    }
    return state; // we dont care about the action so plain return
}
