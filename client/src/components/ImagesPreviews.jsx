import React from 'react'

const ImagesPreviews = ({url, heading}) => {
  return (
    <>
                  {url && <div>
                <h1 className="right-heading">{heading}</h1>
                <div className="preivew-image">
                    <img src={url} alt="image" className="w-full h-full object-cover" />
                </div>
                </div>}
    </>
  )
}

export default ImagesPreviews
