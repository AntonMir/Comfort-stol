import React, { useEffect } from 'react'
// components
import Header from '@components/Header.js'
import Title from '@components/Title.js'
import Info from '@components/Info.js'
import Feedback from '@components/Feedback.js'
import Footer from '@components/Footer.js'
import Couch from '@components/Couch.js'
// anim on scroll
import Aos from 'aos';
import 'aos/dist/aos.css'
// style
import styled from 'styled-components'

export default function App() {

    useEffect(() => {
        // Animation in Scroll settings
        Aos.init({
            duration: 1000,
            offset: 0,
            delay: 300,
            once: true,
        });
    }, [])

    return (
        <AppWrapper>
            <Header />
            <Title />
            <Info />
            <Feedback />
            <Footer />
            <Couch />
        </AppWrapper>
    );

}

const AppWrapper = styled.div`
    position: relative;
    overflow: hidden;
`