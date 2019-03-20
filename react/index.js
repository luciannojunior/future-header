import React from 'react'
import { ExtensionPoint } from 'vtex.render-runtime'
import Media from 'react-media'
import { useRuntime } from 'vtex.render-runtime'

const Header = () => {
  const { hints: { mobile } } = useRuntime()

  if (!window || !window.matchMedia) {
    return mobile ? (
      <ExtensionPoint id="header-mobile" />
    ) : (
      <ExtensionPoint id="header-desktop" />
    )
  }

  return (
    <React.Fragment>
      <Media query="(max-width:40rem)">
        {matches => matches ? (
          <ExtensionPoint id="header-mobile" />
        ) : (
          <ExtensionPoint id="header-desktop" />
        )}
      </Media>
    </React.Fragment>
  )
}

export default Header
