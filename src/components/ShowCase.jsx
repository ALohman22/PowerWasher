import React, { useState} from 'react'
import ImageGallery from 'react-image-gallery';


const ShowCase = () => {

  const pictures = [
    {img: 'https://images.squarespace-cdn.com/content/v1/51012d26e4b0d171103c8402/1378780313909-OMF6QBCITYMY10LWCYD4/before+after+pressure+wash+driveway.jpg'},
    {img: 'https://magicbubbleswash.com/wp-content/uploads/cache/2021/03/driveway-before-after-vertical-1/1269590669.jpg'},
    {img: 'https://www.orlandoflpressurewashing.com/wp-content/uploads/2022/07/power-washing-service-near-me-Clearwater-FL-NRC-Pressure-Washing.jpg'},
    {img: 'https://www.chesapeakepropertyservices.com/wp-content/uploads/2021/01/brickwalkbeforeaftertemplate.jpg'},
    {img: 'https://images.squarespace-cdn.com/content/v1/610bfaa159f1a0106f1de669/f55e0439-05e2-4ce2-9fdb-a986a5f0016c/Pressure-Washing-Before-After.jpg'}
  ]
  
  const [curImg, setCurImg] = useState(pictures[0].img)

  const configure = () => {
  }


    return (
      <div className='sliderContainer'>
        <div className='carosel'
        style={{
          background: `linear-gradient(
            190deg,
            rgba(0, 0, 0, 0.1),
            rgba(0, 0, 0, 0.5)),
            url(${curImg}}) no-repeat center center / cover`,
          
        }}
        >
          <div className='square-container'>
            <div onClick={()=>setCurImg(pictures[0].img)} className={curImg === pictures[0].img ? 'focusedSquare' : 'square'} />
            <div onClick={()=>setCurImg(pictures[1].img)} className={curImg === pictures[1].img ? 'focusedSquare' : 'square'} />
            <div onClick={()=>setCurImg(pictures[2].img)} className={curImg === pictures[2].img ? 'focusedSquare' : 'square'} />
            <div onClick={()=>setCurImg(pictures[3].img)} className={curImg === pictures[3].img ? 'focusedSquare' : 'square'} />
            <div onClick={()=>setCurImg(pictures[4].img)} className={curImg === pictures[4].img ? 'focusedSquare' : 'square'} />
          </div>
        </div>
      {/* <div className='slider'>
        <figure>

          <div className='imgCon'>
            <img src='https://images.squarespace-cdn.com/content/v1/51012d26e4b0d171103c8402/1378780313909-OMF6QBCITYMY10LWCYD4/before+after+pressure+wash+driveway.jpg'></img>
          </div>

          <div className='imgCon'> 
            <img src='https://www.swimmingpool.com/images/blog/header/pavers-reddit-longtimelurker9091-before-after.jpg'></img>
          </div>

          <div className='imgCon'>   
            <img src='https://images.squarespace-cdn.com/content/v1/5a773c838fd4d275324086ef/1518018621162-VIID36EUNXKM6MB9BXJH/Combination-Before-After-Cleaning-Alt-Copy.jpg?format=1500w'></img>
          </div>

          <div className='imgCon'>   
            <img src='https://primepressurewashingbr.com/img/gallery/3pressure-washing-driveway-concrete-brick-before-after.jpg'></img>
          </div>

          <div className='imgCon'>
            <img src='https://images.squarespace-cdn.com/content/v1/51012d26e4b0d171103c8402/1378780313909-OMF6QBCITYMY10LWCYD4/before+after+pressure+wash+driveway.jpg'></img>
          </div>

        </figure>
      </div> */}


      </div>
    )
}

export default ShowCase