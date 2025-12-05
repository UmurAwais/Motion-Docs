import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {

  const ref = useRef(null);

  const data = [
    {
      desc: "This is the description of the card",
      filesize: "0.4mb",
      close: true,
      tag: { isOpen: true, tagline: "Download Now", color: "blue" },
    },

    {
      desc: "This is the description of the card",
      filesize: "0.4mb",
      close: true,
      tag: { isOpen: true, tagline: "Download Now", color: "green" },
    },

    {
      desc: "This is the description of the card",
      filesize: "0.4mb",
      close: true,
      tag: { isOpen: true, tagline: "Download Now", color: "amber" },
    },

    {
      desc: "This is the description of the card",
      filesize: "0.4mb",
      close: true,
      tag: { isOpen: true, tagline: "Download Now", color: "purple" },
    },
  ]


  return (
    <div ref={ref} className='w-full h-full fixed top-0 left-0 flex flex-wrap p-5 gap-10'>
      { data.map((card, index) => (
        <Card {...card} key={index} reference={ref} />
      )) }
    </div>
  )
}

export default Foreground