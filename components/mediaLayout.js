import React from 'react'
import Link from 'next/link'
import Media from '../assets/scss/Media.module.scss'
import ReactPlayer from 'react-player'
import Vimeo from '@u-wave/react-vimeo'

const MediaLayout = ({ images, youtubeLinks, videos, mixcloudLinks }) => {
  const divStyle = {
    color: 'blue',
  }

  return (
    <>
      <div className={`row ${Media.images_row}`}>
        <div className="col-xl-12 col-md-8 col-sm-12 col-12 ">
          {videos &&
            videos.map(video => {
              return (
                <video
                  key={video.id}
                  height="100%"
                  className={`${Media.image_padding}`}
                  src={video.url}
                  frameBorder="0"
                  autoPlay
                  muted
                  plays-inline
                  loop
                  allowFullScreen="false"
                ></video>
              )
            })}
          {images.map(image => {
            let url = image.formats ? image.formats.medium.url : image.url
            return (
              <img
                className={`${Media.image_padding}`}
                key={image.id}
                src={url}
              ></img>
            )
          })}
          {/* <ReactPlayer
            width="100%"
            height="100%"
            style={divStyle}
            className={`${Media.iframe_container} ${Media.image_padding}`}
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
                  className={`${Media.iframe_container} ${Media.image_padding}`}
                  src={youtubeLink.url}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen="false"
                ></iframe>
              )
            })}
          {/* <Vimeo
            autoplay
            video={'280008655'}
            className={`${Media.iframe_container} ${Media.image_padding}`}
          /> */}
          {mixcloudLinks &&
            mixcloudLinks.map(mixcloudLink => {
              return (
                <iframe
                  key={mixcloudLink.id}
                  width="50%"
                  height="100%"
                  className={`${Media.iframe_mixcloud} `}
                  src={mixcloudLink.url}
                  frameborder="0"
                ></iframe>
              )
            })}
        </div>
      </div>
    </>
  )
}

export default MediaLayout
