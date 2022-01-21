import React, { useState } from 'react'
// anim on scroll
import 'aos/dist/aos.css'
// style
import styled from 'styled-components'

export default function Feedback() {

    const [form, setForm] = useState({ name: '', number: '' })

    const changeUserData = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value })
    }

    const sendQuestion = async () => {
        try {

            window.Email.send({
                Host: "mail.nic.ru",
                Username: "123123@avtelma.com",
                Password: "lalala",
                To: 'insuran7test@mail.ru',
                From: "123123@avtelma.com",
                Subject: `Заявка от ${form.name}`,
                Body: `
                    <p>Запрос Comfort -стол</p>
                    <h3>Детали:</h3>
                    <ul>  
                    <li>Name: ${form.name}</li>
                    <li>Email: ${form.number}</li>
                    </ul>
                `,
            })
                .then((message) => {
                    console.log(message + "___Succes___")
                });

            // очищаем форму
            setForm({ name: '', number: '' })

        } catch (error) {
            console.log('---', 'Send Question Error:', error.message)
        }
    }


    return (
        <FeedbackWrapper id='feedback' data-aos='fade-up'>
            <Question>Остались еще <b>какие то вопросы?</b></Question>
            <P>Оставь свои данные и мы Вам перезвоним</P>
            <Form>
                <InputName
                    placeholder='Ваше имя'
                    id="feedback-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={changeUserData}
                />

                <InputNumber
                    placeholder='Номер телефона'
                    id="feedback-name"
                    type='number'
                    name="number"
                    value={form.number}
                    onChange={changeUserData}
                />

                <Btn onClick={sendQuestion} >Оставить заявку</Btn>
            </Form>
        </FeedbackWrapper>
    );
}

const FeedbackWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 60%;
    margin: 90px auto 0;
    background: #FFFFFF;
    box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.09);
    padding: 0 5%;

    @media (max-width: 600px) {
        max-width: 80%;
        margin: 40px auto;
    }
`

const Question = styled.div`
    text-align: center;
    font-size: calc(1.3vw + 18px);
    margin: 60px 0 0;
`

const P = styled.div`
    text-align: center;
    font-size: calc(0.8vw + 13px);
    margin: 25px 0 0;
`

const Form = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 90%;
    margin: 50px auto;

    @media (max-width: 991px) {
        flex-direction: column;
    }

    @media (max-width: 600px) {
        margin: 40px auto;
    }
`

const InputName = styled.input`
    background: #FFFFFF;
    border: 1px solid #D9D9D9;
    box-sizing: border-box;
    border-radius: 30px;
    width: 28%;
    padding: 20px 20px;

    &::placeholder {
        color: #AAA;
    }

    @media (max-width: 991px) {
        width: 100%;
    }
 
`

const InputNumber = styled.input`
    background: #FFFFFF;
    border: 1px solid #D9D9D9;
    box-sizing: border-box;
    border-radius: 30px;
    width: 28%;
    padding: 20px 20px;

    &::placeholder {
        color: #AAA;
    }

    @media (max-width: 991px) {
        margin-top: 20px;
        width: 100%;
    }
`

const Btn = styled.div`
    text-align: center;
    font-weight: 500;
    font-size: calc(0.4vw + 9px);
    color: #fff;
    letter-spacing: 1px;
    padding: 18px 1%;
    background: linear-gradient(92.08deg, #941DBD 10.42%, #D73CAB 100%);
    border-radius: 40px;
    white-space: nowrap;
    width: 28%;
    cursor: pointer;
    box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.25);  

    &:active {
        box-shadow: none;   
    }

    @media (max-width: 991px) {
        margin-top: 20px;
        width: 40%;
    }

    @media (max-width: 600px) {
        padding: 18px 46px 18px 40px;
        font-size: calc(0.5vw + 11px);
    }
`
