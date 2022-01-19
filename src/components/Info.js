import React from 'react'
// img
import prefIcon from '@img/prefIcon.svg'
// anim on scroll
import 'aos/dist/aos.css'
// style
import styled from 'styled-components'

export default function Info() {
    return (
        <InfoWrapper>
            <Card data-aos='fade-up'>
                Предлагаем и Вам стать партнером на выгодных условиях.
                Так же работаем по системе дропшиппинг.
                Мы предоставляем полный пакет документов для юридических лиц и
                доставляем товар до транспортных компаний. Сотрудничество с
                нами взаимовыгодно для наших оптовых клиентов, ведь наряду с
                продукцией хорошего качества, вы получаете хорошие скидки.
            </Card>
            <P1 data-aos='fade-up'>
                Как стать
                <b> нашим представителем?</b>
            </P1>
            <P2 data-aos='fade-up'>
                Вам необходимо оформить первый заказ от 10 кушеток,
                чтобы действовала оптовая цена.
            </P2>
            <P3 data-aos='fade-up'>
                Для заказа просто напишите нам
                <span> e-mail: l-koksharova@mail.ru </span>
            </P3 >
            <P4 data-aos='fade-up'>
                Что <b>вы получаете:</b>
            </P4>
            <Pref data-aos='fade-up'>
                <img src={prefIcon} alt="" />
                <p>конкурентноспособные цены на качественную продукцию</p>
            </Pref>
            <Pref data-aos='fade-up'>
                <img src={prefIcon} alt="" />
                <p>гибкую систему скидок</p>
            </Pref>
            <Pref data-aos='fade-up'>
                <img src={prefIcon} alt="" />
                <p>большой ассортимент массажных столов</p>
            </Pref>

        </InfoWrapper>
    );
}

const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 70%;
    margin: 90px auto 0;

    @media (max-width: 600px) {
        max-width: 90%;
        margin: 25px auto;
    }
`

const Card = styled.div`
    text-align: center;
    font-size: calc(0.5vw + 12px);
    font-weight: 500;
    background: #fff;
    padding: 35px 40px;
    box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.09);
    margin-bottom: 15px;

    @media (max-width: 600px) {
        line-height: 20px;
        margin-top: 100px;
    }
`

const P1 = styled.div`
    margin-top: 50px;
    font-size: calc(0.8vw + 14px);

    @media (max-width: 600px) {
        margin-top: 20px;
    }
`
const P2 = styled.div`
    margin-top: 20px;
    font-size: calc(0.5vw + 12px);
`
const P3 = styled.div`
    margin-top: 50px;
    font-size: calc(0.8vw + 14px);

    @media (max-width: 600px) {
        margin-top: 20px;
    }
`
const P4 = styled.div`
    margin-top: 50px;
    margin-bottom: 10px;
    font-size: calc(0.8vw + 14px);

    @media (max-width: 600px) {
        margin-top: 20px;
    }
`
const Pref = styled.div`
    display: flex;
    background: #FFFFFF;
    box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.09);
    border-radius: 30px;
    max-width: calc(45% + 120px);
    padding: 0 20px;
    margin: 10px 0;

    & > img {
        margin: 0 10px 0 0;
    }

    & > p {
        font-size: calc(0.5vw + 10px);
    }

    @media (max-width: 991px) {
        max-width: 100%;
    }

    @media (max-width: 600px) {
        max-width: 100%;
        padding: 10px 20px;

        & > p {
            font-size: calc(0.5vw + 12px);
        }
    }
`