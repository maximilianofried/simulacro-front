import React from 'react'
import Link from 'next/link'
import Images from '../assets/scss/Images.module.scss'

const ImagesLayout = ({ images }) => {
  return (
    <>
      <div className={`row ${Images.images_row}`}>
        <div className="col-xl-6 col-md-8 col-sm-12 col-12 ">
          {images.map(image => {
            let url = image.formats.medium.url
            return (
              <img
                className={`${Images.image_padding}`}
                key={image.id}
                src={url}
              ></img>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default ImagesLayout
