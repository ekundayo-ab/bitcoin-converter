import React from 'react'

const CurrencyCard = (props) => {
  const { name, code, price, symbol } = props
  return (
    <div className="ui card raised">
      <div className="content">
        <div className="header">{`${symbol}${price}`}</div>
        <div className="meta">{code}</div>
        <div className="description">
          {name}
        </div>
      </div>
    </div>
  )
}

export default CurrencyCard
