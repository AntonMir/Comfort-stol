import React from 'react'
// anim on scroll
import 'aos/dist/aos.css'
// style
import styled from 'styled-components'

export default function Title() {
    return (
        <TitleWrapper data-aos='fade-up'>
            <Text>
                Компания
                <b> Сomfort-стол </b>
                постоянно находится в поиске дилеров продукции
                <b> в Москве и всей России </b>
            </Text>
            <Btn><a href='#top'>Стать партнером</a></Btn>
        </TitleWrapper>
    );
}

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 50%;
    margin: 50px auto 0;

    @media (max-width: 600px) {
        max-width: 90%;
        margin: 0 auto;
    }
`

const Text = styled.div`
    text-align: center;
    line-height: calc(1.5vw + 25px);
    font-size: calc(1.3vw + 18px);
`

const Btn = styled.div`
    margin: 50px 0 0;
    font-size: calc(0.5vw + 12px);
    font-weight: 500;
    color: #fff;
    letter-spacing: 1px;
    padding: 18px 105px;
    background: linear-gradient(92.08deg, #941DBD 10.42%, #D73CAB 100%);
    border-radius: 40px;
    white-space: nowrap;
    cursor: pointer;
    box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.25);  

    &:active {
        box-shadow: none;   
    }

    & > a {
        color: #fff;
        text-decoration:none;
    }

    @media (max-width: 600px) {
        margin: 35px 0 0;
        padding: 18px 45px;
    }
`
