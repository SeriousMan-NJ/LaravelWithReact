import { combineReducers } from 'redux'

import { postList } from './scenes/PostList/reducers'

const rootReducer = combineReducers({
  postList
})

export default rootReducer
