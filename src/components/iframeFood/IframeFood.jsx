import React, { useEffect, useRef, useState } from 'react'
import { useWindowSize } from '../utils/utility'

const IframeFood = () => {
  const pageRef = useRef(null)
    const size = useWindowSize()
  const [src, setSrc] = useState(`../foodGallery/FoodGallery.htm`)
  const [load, setLoad] = useState(false)
  const [, setHeight] = React.useState('0px')
  const onLoad = () => {
    setHeight(size.height + 'px')
  }
  useEffect(() => {
    document.getElementById('food-iframe').onload = () => {
      {
        setLoad(true)
      }
    }
  }, [])
  return (
    <div className='w-full h-full'>
      <iframe
        id='food-iframe'
        src={src}
        scrolling='yes'
        frameBorder={0}
        allowFullScreen={true}
        allow='autoplay; fullscreen'
        style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 2, zIndex:-1 }}
        width='100%'
        ref={pageRef}
        height={size.height}
        onLoad={onLoad}
        loading='lazy'
      />
    <img className="w-28 mt-10 mb-10 ml-10" src='/img/logo.png'/>
    <p className=' text-xl leading-normal ml-10'>
      AI is in the spotlight, as we craft a game-changing Language Model in the making! <br/>
      While we toil behind the scenes, a delightful digital banquet of food animations awaits your enjoyment.  <br/>
      Contact Us @ Info@friendlysquad.io
    </p>
    </div>
  )
}

export default IframeFood
