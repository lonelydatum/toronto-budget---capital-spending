import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let Total = (a, b, c) => {
  let input
  console.log(a, b, c);
  return (
    <div>
      Total
    </div>
  )
}
Total = connect()(Total)

export default Total
