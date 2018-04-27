import React from 'react'
import styled from 'react-emotion'

const Container = styled.div`
    margin: 0 auto;
    max-width: 1280px;
    width: 90%;

    @media only screen and (min-width: 993px) {
        width: 70%;
    }
    @media only screen and (min-width: 601px) {
        width: 85%;
    }
`
export default Container
