import React, { Fragment } from 'react'

export const GridLine = () => {
  return (
 <Fragment>
    <div className='absolute inset-0 bg-[repeating-linear-gradient(to right,transparent,transparent 24px,#555555,#555555 24px)] opacity-20 z-0 pointer-events-none'>
    </div>
     <div className='absolute inset-0 bg-[repeating-linear-gradient(to bottom,transparent,transparent 24px,#555555,#555555 24px)] opacity-20 z-0 pointer-events-none'>
    </div>

    </Fragment>
  )
}


