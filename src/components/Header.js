import React from 'react'
//img
import phoneIcon from '@img/phoneIcon.svg'
// anim on scroll
import 'aos/dist/aos.css'
// style
import styled from 'styled-components'

export default function Header() {
    return (
        <HeaderWrapper >
            <Title data-aos='fade-right'>Comfort-стол</Title>
            <Phone data-aos='fade-left'>
                <PhoneIcon src={phoneIcon} alt="Phone icon" />
                <PhoneNumber>89818540255</PhoneNumber>
            </Phone>
        </HeaderWrapper>
    );
}

const HeaderWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 130px; 

`

const Title = styled.div`
    color: #941DBD;
    font-weight: 700;
    font-size: calc(1.3vw + 18px);
    margin-right: 2%;
`

const Phone = styled.div`
    position: absolute;
    right: calc(37% - 250px);
    display: flex;
    align-items: center;
    background-color: #fff;
    padding: 12px 20px 10px 15px;
    box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.09);
    border-radius: 30px;

    @media (max-width: 991px) {
        padding: 12px 2px;
        border-radius: 50px;
        right: 7%;
    }
`

const PhoneIcon = styled.img`
    margin: 0 10px 0;
    height: auto;
    width: 14px;
`

const PhoneNumber = styled.div`
    font-size: 18px;
    font-weight: 400;

    
    @media (max-width: 991px) {
        display: none;
    }
`