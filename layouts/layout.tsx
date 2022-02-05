import type { NextPage } from 'next'

import {ReactNode} from 'react';

const PageLayout = ({children}: {children: ReactNode}) => {
  return (
    <>
      {children}
    </>
  )
}

export default PageLayout;
