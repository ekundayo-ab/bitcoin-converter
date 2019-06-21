import React from 'react'

const SegmentHeader = (props) => {
  return (
    <h2 className="ui center aligned icon header">
      <i className={`${props.icon} icon`}></i>
      <div className="content">
        {props.title}
      </div>
    </h2>
  )
}

export default SegmentHeader
