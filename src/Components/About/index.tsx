import React from 'react'
import { PageContainer, PageSection } from 'Styles/Layout.style'
import { AboutComponent } from './style/About.style'


const About = () => {
  return (
    <AboutComponent>
      <PageContainer>
        <PageSection>
          <div className='page-header'>
            <h2>
              About My Self
            </h2>
          </div>
        </PageSection>
      </PageContainer>

    </AboutComponent>
  )
}

export default About