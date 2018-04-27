import React from 'react'
import Section from './Section'
import Fellow from './Fellow'
import Container from './Container'

export default ({ content: { header, content }, fellows }) => (
    <Section
        css={`
            background-color: #f63;
        `}>
        <Container>
            <Section.Header degree={7}>{header}</Section.Header>
            <p
                dangerouslySetInnerHTML={{
                    __html: content,
                }}
            />
            <div id="fellow-list" className="row">
                {fellows.map(fellow => (
                    <Fellow key={fellow.name} {...fellow} />
                ))}
            </div>
        </Container>
    </Section>
)
