import {React} from 'react'
import { useState } from 'react'
import Logo from '../assets/logo.jpg'
import Web3 from 'web3'

export default function Header(){
    const [connected, setConnected] = useState(false);
    const [add, setAdd] = useState("");
    let begin = true;
    const connectWalletHandler = async () => {
        
        let web3;
        console.log('connect wallet');
        if( typeof window !== 'undefined' && typeof window.ethereum !== 'undefined'){
            try{
                console.log('MetaMask is installed');
                let response = await window.ethereum.request({method: 'eth_requestAccounts'});
                web3 = new Web3(window.ethereum);
                console.log(response[0])
                setAdd(response[0])
                setConnected(true)
            } catch(err){
                if(!begin){
                    alert("Erro ao conectar com conta")
                    console.log("erro ao conectar")
                    setConnected(false)
                }
            }
        } else{
            if(!begin){
                //metamask is not installed
                console.log('MetaMask is not installed');
                alert("Browser não suporta ou mestamask não instalado");
                setConnected(false)
            }
        }
    }
    useState(async () => {
        await connectWalletHandler();
        begin = false
    }, [])
    return(
        <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingLeft: "20px", paddingRight: "20px"}}>
            <div style={{backgroundColor: "#fff", paddingLeft: "40px", paddingRight: "40px", display: "flex", flexDirection: "row", height: "100px", justifyContent: "start", alignItems: "center"}}>
                <img src={Logo} style={{width: "50px"}}/>
                <a style={{marginLeft: "100px", textDecoration: "none", color: "#4b4947", fontSize: "30px", fontFamily: "sans-serif"}} href="/">CROWDFUNDITA</a>
            </div>
            <section style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                <a style={{marginRight: "20px", textDecoration: "none", color: "black"}} href="/projects">CAMPANHAS</a>
                <a style={{marginLeft: "20px", textDecoration: "none", color: "black"}} href="/newproject">CRIAR CAMPANHA</a>
            </section>
            <section style={{display: "flex", justifyContent: "center", alignItems: "center", alignSelf: "center", textAlign: "center", width: "250px", borderRadius: "50px"}}>
                {
                    !connected ?
                    <button onClick={connectWalletHandler} style={{width: "150px", alignSelf:"center", backgroundColor: "#00f500", border: "none", height: "40px", fontSize: "13px", borderRadius: "10px"}}>Conectar Carteira</button>
                    : <p>{add.slice(0, 6) + "..." + add.slice(add.length-6, add.length-1)}</p>
                }
            </section>
        </div>
    )
}