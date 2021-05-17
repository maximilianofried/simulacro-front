import React from 'react'
import Link from 'next/link'
import Images from '../assets/scss/Images.module.scss'

const ImagesLayout = ({ images }) => {
  return (
    <>
      <div className={`row ${Images.images_row}`}>
        <div className="col-xl-12 col-md-8 col-sm-12 col-12 ">
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
          <iframe
            className={`${Images.iframe_container} ${Images.image_padding}`}
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/2L4d7ZG6ze8"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  )
}

export default ImagesLayout
