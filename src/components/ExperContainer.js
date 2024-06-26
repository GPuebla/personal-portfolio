import React from 'react'

export default function ExperContainer({srcLink,title = 'Title'}) {
  return (
    <div className='otherExp-container'>
    <img className='otherExp-img' src={srcLink} width={300} height={150}/>
    <p>
      <h1>{title}</h1>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
        culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </div>
  )
}
