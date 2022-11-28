import {React} from 'react'
import Logo from '../assets/logo.jpg'
import Banner from '../assets/banner.png'
import Zank from '../assets/zank.jpg'
import Davi from '../assets/davi.jpg'

export default function Home(){

    return(
        <div style={{display: "flex", flexDirection: "column", marginBottom: "100px"}}>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingLeft: "20px", paddingRight: "20px"}}>
                <div style={{backgroundColor: "#fff", paddingLeft: "40px", paddingRight: "40px", display: "flex", flexDirection: "row", height: "100px", justifyContent: "start", alignItems: "center"}}>
                    <img src={Logo} style={{width: "50px"}}/>
                    <a style={{marginLeft: "100px", textDecoration: "none", color: "#4b4947", fontSize: "30px", fontFamily: "sans-serif"}} href="/">CROWDFUNDITA</a>
                </div>
                <a style={{marginRight: "200px", textDecoration: "none", color: "black"}} href="/projects">ACESSAR PROJETOS</a>
            </div>
            <img src={Banner} style={{maxWidth: "2000px", width: "100%", height: "500px", objectFit: "cover"}}/>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", marginTop: "50px"}}>
                <h2>NOSSA MISSÃO</h2>
                <p style={{lineHeight: "35px", color: "black", fontSize: "17px", paddingLeft: "100px", paddingRight: "100px", textAlign: "center"}}>Somos uma startup de crowdfunding que utiliza blockchain e smart contracts para garantir a melhor transação e operação. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",  marginTop: "50px"}}>
                <h2>QUEM SOMOS?</h2>
                <section style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", marginTop: "50px"}}>
                    <section style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                        <img src={Zank} style={{width: "250px", borderRadius: "200px", marginRight: "100px"}}/>
                        <p style={{marginRight: "100px", maxWidth: "200px", marginTop: "30px", textAlign: "center", lineHeight: "25px"}}>Fernando Zanchitta - ITA - Graduando em Engenharia de Computação</p>
                    </section>
                    <section style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                        <img src={Davi} style={{width: "250px", borderRadius: "200px", marginLeft: "100px"}}/>
                        <p style={{marginLeft: "100px", maxWidth: "200px", marginTop: "30px", textAlign: "center", lineHeight: "25px"}}>Davi Xie - ITA - Graduando em Engenharia de Computação</p>
                    </section>
                </section>
            </div>
        </div>
    )
}