import React, { useState } from 'react'
import axios from 'axios'

const CoinitPage = (props) => {
  console.log('coinitpage', props)
  return (
    <div>
      <h1>Coin it </h1>
      <h2> {props.saveTip} </h2>
    </div>
  )
}

export default CoinitPage
