import { combineReducers } from 'redux';
import ListingReducer from './ListingReducer';

const rootReducer = combineReducers({
        Listing: ListingReducer
     })

     export default rootReducer