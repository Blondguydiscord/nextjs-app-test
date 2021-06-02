import Head from 'next/head'
import styles from '../styles/Home.module.css'
import HelloAPI from './api/hello.js'

export default function Home() {
  return (
    <div classname="tittle">
        <h1>Hello, {res.name}</h1>
    </div>
  )
}
