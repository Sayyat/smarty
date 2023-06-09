import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import {useState} from 'react'

export default function Auth() {
    const [phoneNumber, setPhoneNumber] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [result, setResult] = useState({})

    function register() {
        fetch("/api/register", {
            method: "post",
            body: JSON.stringify({
                phoneNumber: phoneNumber,
                firstname: firstname,
                lastname: lastname,
            })
        })
            .then(response => response.json())
            .then(result => {
                console.log(result)
                // setResult(result)
            })
    }

    return (
        <>
            <Head>
                <title>Smarty | Register</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={styles.main}>
                <label htmlFor='PhoneNumber'>PhoneNumber</label>
                <input id='PhoneNumber' type={"text"} onChange={(e) => {
                    setPhoneNumber(e.target.value)
                }}/>

                <label htmlFor='Firstname'>Firstname</label>
                <input id='Firstname' type={"text"} onChange={(e) => {
                    setFirstname(e.target.value)
                }}/>

                <label htmlFor='Lastname'>Lastname</label>
                <input id='Lastname' type={"text"} onChange={(e) => {
                    setLastname(e.target.value)
                }}/>

                <button onClick={register}>Register</button>

            </main>
        </>
    )
}
