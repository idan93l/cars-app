import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'

const CardContainer = styled.div`
  ${tw`
    flex
    justify-center
    items-center
    rounded-md
    bg-white
    pt-1
    pb-1
    pr-2
    pl-2
    md:pt-2
    md:pb-2
    md:pl-6
    md:pr-6
  `}
`

const ItemContainer = styled.div`
  ${tw`flex`}
`

const Icon = styled.span`
  ${tw`
    text-red-500
    fill-current
    text-xs
    md:text-base
    mr-1
    md:mr-3
  `}
`

const Name = styled.span`
  ${tw`
    text-gray-600
    text-xs
    md:text-sm
  `}
`

const LineSeparator = styled.span`
  width: 2px;
  height: 45%;
  ${tw`
    bg-gray-300
    mr-2
    ml-2
    md:mr-6
    md:ml-6
    
  `}
`

function BookCard() {
  return (
    <div>BookCard</div>
  )
}

export default BookCard