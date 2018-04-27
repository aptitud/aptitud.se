import React from 'react'
import Image from './Image'
import styled from 'react-emotion'

const Wrapper = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;

    img {
        max-height: 50px;
    }
`

export default props => (
    <Wrapper {...props}>
        <a
            href="http://www.linkedin.com/company/2660293"
            target="new"
            title="LinkedIn">
            <Image src="linkedin.png" alt="LinkedIn" />
        </a>
        <a href="http://twitter.com/Aptitud_Sthlm" target="new" title="Twitter">
            <Image src="twitter.png" alt="Twitter" />
        </a>
        <a
            href="http://www.facebook.com/aptitudsthlm"
            target="new"
            title="Facebook">
            <Image src="fb.png" alt="Facebook" />
        </a>
        <a href="http://aptitud.eventbrite.com" target="new" title="EventBrite">
            <Image src="eventbrite.png" alt="EventBrite" />
        </a>
        <a
            href="http://www.youtube.com/aptitudsthlm"
            target="new"
            title="YouTube">
            <Image src="youtube.png" alt="YouTube" />
        </a>
    </Wrapper>
)
