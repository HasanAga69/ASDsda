import React from 'react'

interface Props {
  title: string,
  style?: string,
}

const Button = ({title, style}: Props) => {
  return (
    <button className='px-4 py-2 mt-11'>
      <p className='text-black'>{title}</p>
    </button>
  )
}

export default Button