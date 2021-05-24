import React from 'react'
import Link from 'next/link'
import Images from '../assets/scss/Images.module.scss'
import ReactPlayer from 'react-player'

const MediaLayout = ({ images, youtubeLinks, videos }) => {
  const divStyle = {
    color: 'blue',
  }

  return (
    <>
      <div className={`row ${Images.images_row}`}>
        <div className="col-xl-12 col-md-8 col-sm-12 col-12 ">
          {videos &&
            videos.map(video => {
              return (
                <video
                  key={video.id}
                  height="100%"
                  className={`${Images.image_padding}`}
                  src={video.url}
                  frameBorder="0"
                  autoPlay
                  muted
                  plays-inline
                  loop
                ></video>
              )
            })}
          {images.map(image => {
            let url = image.formats ? image.formats.medium.url : image.url
            return (
              <img
                className={`${Images.image_padding}`}
                key={image.id}
                src={url}
              ></img>
            )
          })}
          {/* <ReactPlayer
            width="100%"
            height="100%"
            style={divStyle}
            className={`${Images.iframe_container} ${Images.image_padding}`}
            url="https://www.youtube.com/embed/2L4d7ZG6ze8"
            id="iframe"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          /> */}
          {youtubeLinks &&
            youtubeLinks.map(youtubeLink => {
              return (
                <iframe
                  key="youtubeLink.url"
                  width="100%"
                  height="100%"
                  className={`${Images.iframe_container} ${Images.image_padding}`}
                  src={youtubeLink.url}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )
            })}
        </div>
      </div>
    </>
  )
}

export default MediaLayout
