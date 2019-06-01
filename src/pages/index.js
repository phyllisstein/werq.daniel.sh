import {
  BioRow,
  H,
  Hero,
  NameRow,
  NavBar,
  Root,
} from 'styles/pages/index'
import React from 'react'
import SaturateButton from 'components/saturate-button'

function Index() {
  return (
    <Root>
      <Hero>
        <NameRow>
          <H size={ 1 }>
            Hi, I’m Daniel.
          </H>
        </NameRow>
        <BioRow>
          <p>
            Full-stack engineer and lapsed essayist applying a careful
            editorial eye to building a more daring web.
          </p>
        </BioRow>
        <NavBar>
          <SaturateButton>
            Work
          </SaturateButton>
          <SaturateButton>
            Blog
          </SaturateButton>
          <SaturateButton>
            Contact
          </SaturateButton>
        </NavBar>
      </Hero>
    </Root>
  )
}

export default Index
