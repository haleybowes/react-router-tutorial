import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {
    switch(action.type) {
        // referencing the proper action
        case FETCH_WEATHER:

        // we only care about city because it has the proper city name and the forecast that we're looking for - the ...state allows you to add to the current state without mutating the current state - returning a completely new instance of state
        return [ action.payload.data, ...state ];
    }
   return state;
}

// MIDDLEWARE
// If the payload is a promise, redux-promise stops the action entirely, and then once the axios request finishes, it dispatches a new action of the same type but with a payload of the resolved request (unwraps the promise for us) and sends it to the reducer as the payload 
