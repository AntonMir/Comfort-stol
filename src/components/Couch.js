import React from 'react'
// img
import CouchImg from '@img/сouch.png'
// anim on scroll
import 'aos/dist/aos.css'
// style
import styled from 'styled-components'

export default function Couch() {
    return (
        <CouchWrapper data-aos='fade-left'>
            <img src={CouchImg} alt="" />
        </CouchWrapper>
    );
}

const CouchWrapper = styled.div`
    position: absolute;
    top: 20%;
    right: -12.4%;
    z-index: -1;

    & > img {
        width: 43vw;
        height: auto;
    }

    @media (max-width: 1440px) {
        top: 25%;
    }

    @media (max-width: 991px) {
        top: 24%;
        right: -30%;

        & > img {
            width: 65vw;
            height: auto;
        }
    }

    @media (max-width: 600px) {
        top: 17.5%;
        right: -45%;

        & > img {
            width: 85vw;
            height: auto;
        }
    }
`
