// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'

const initialWheelState = { counter:0 }
function wheel(state = initialWheelState, action) {
  switch (action.type) {
    case type.MOVE_CLOCKWISE:
      if(state.counter >= 1) {
        return {
          ...state,
          counter: state.counter - 1,
        };
      }else{
        return {
          ...state,
          counter: 5,
        };
      }
  
 

const initialQuizState = null
function quiz(state = initialQuizState, action) {
  return state
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  return state
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  return state
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  return state
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
