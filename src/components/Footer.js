import React from 'react'
// anim on scroll
import 'aos/dist/aos.css'
// style
import styled from 'styled-components'

export default function Footer() {
    return (
        <FooterWrapper>
            <Text>© 2021  ProSleep. Все права защищены.</Text>
        </FooterWrapper>
    );
}

const FooterWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    border-top: 1px solid #CECECE;
    margin-top: 50px;

`

const Text = styled.div`
    color: #777777;
    font-size: calc(0.2vw + 10px);
    margin-right: 2%;
`