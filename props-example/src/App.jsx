// import React from 'react'
// import User from './user'

// const App = () => {
//    const user  = {
//     name: "Rakshith",
//     course: ["Web Development", "Java", "Python"],
//     email: "adc@gmail.com",
//     username: "Rakshith Gowda",
//     place: "Banglore - Manglore"
//   }
//   return (
//     <div>
//       <h1>Welcome to Home</h1>
//      <User user_info={user}/>
//     </div>
//   )
// }

// export default App

import React from 'react'
import Child from './Child'

const App = () => {
  return (
    <>
<Child>
  <Example />
</Child>
    </>
  )
}


const Example = () => {
return (
  <>
  <h1>I am a example of App.jsx
  </h1>
  </>
)
}

export default App