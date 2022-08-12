import { createReducer } from "@reduxjs/toolkit";
import {fetchDistanceSuccess} from './actions'

const betting = createReducer([], {
    [fetchDistanceSuccess]: (state, action) => action.payload
})

export default betting
