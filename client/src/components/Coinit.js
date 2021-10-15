import React, { useState } from 'react'

const Coinit = () => {
  const [quote, setQuote] = useState({})

  return (
    <div>
      <div className="coinit">
        <form>
          <input></input>
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  )
}

export default Coinit
