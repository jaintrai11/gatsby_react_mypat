/* eslint-disable react/jsx-no-undef */
import * as React from 'react'
import Home from './home/Home'

interface LayoutMainProps {
  className?: string
}

const LayoutMain: React.FC<LayoutMainProps> = () => (
  <>
    <Home title="new Home" />
  </>
)

export default LayoutMain
