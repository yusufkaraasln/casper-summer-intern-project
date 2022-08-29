import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

    height: 30px;
    background: #242526;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    
`

function Announcement() {
  return (
    <Container>
        Excalibur G900 Series %12.9% Off Today Only - Hurry Up! 
    </Container>

  )
}

export default Announcement