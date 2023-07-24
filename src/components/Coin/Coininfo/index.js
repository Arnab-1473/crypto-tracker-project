import React, { useState } from 'react'
import "./styles.css"

function CoinInfo( {heading, description}) {

  const shortDesc = description.slice(0, 350) + 
  "<p style= 'color:var(--red)'> Read More...</p>";

  const  longDesc = description + "<p style= 'color:var(--red)'> Read Less...</p>";
  
  const [flag, setFlag] = useState(false);

  return (
    <div className='wrapper'> 
      <h1 className='coin-info-heading'> {heading} </h1>
      {description.length > 200 ? (
      <p 
      onClick={() => setFlag(!flag)}
      className='coin-info-desc' 
      dangerouslySetInnerHTML={{__html: !flag ? shortDesc : longDesc}} 
      />) : (
        <p dangerouslySetInnerHTML={{__html: description}}/>
      )}
    </div>
  )
}

export default CoinInfo

