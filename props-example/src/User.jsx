import React from 'react'
import Card from './Card'

const User = (props) => {
 
  return (
    <div>
      <h1>User Information</h1>
      <h2>{props.user_info.name}</h2>
      <h2>{props.user_info.email}</h2>
<Card course={props.user_info.course} username={props.user_info.username} place={props.user_info.place}/>
    </div>
  )
}

export default User