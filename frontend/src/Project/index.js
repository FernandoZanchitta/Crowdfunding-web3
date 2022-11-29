import {React} from 'react'
import { useState } from 'react'
import Logo from '../assets/logo.jpg'
import Web3 from 'web3'
export default function Project(){
    const [error,setError] = useState('');
    const connectWalletHandler = async () => {
        
        let web3;
        console.log('connect wallet');
    if( typeof window !== 'undefined' && typeof window.ethereum !== 'undefined'){
        try{
            console.log('MetaMask is installed');
            await window.ethereum.request({method: 'eth_requestAccounts'});
            web3 = new Web3(window.ethereum);

        } catch(err){
            setError(err.message);
        }
    } else{
        //metamask is not installed
        console.log('MetaMask is not installed');
    }
    }
    return(
        <div style={{display: "flex", flexDirection: "column", marginBottom: "100px"}}>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingLeft: "20px", paddingRight: "20px"}}>
                <div style={{backgroundColor: "#fff", paddingLeft: "40px", paddingRight: "40px", display: "flex", flexDirection: "row", height: "100px", justifyContent: "start", alignItems: "center"}}>
                    <img src={Logo} style={{width: "50px"}}/>
                    <a style={{marginLeft: "100px", textDecoration: "none", color: "#4b4947", fontSize: "30px", fontFamily: "sans-serif"}} href="/">CROWDFUNDITA</a>
                </div>
                <a style={{marginRight: "200px", textDecoration: "none", color: "black"}} href="/projects">ACESSAR PROJETOS</a>
            </div>
            <section style={{marginTop: "50px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignSelf: "center", textAlign: "center", border: "1px solid", maxWidth: "900px", paddingTop: "20px", paddingBottom: "50px", borderRadius: "50px", width: "100%"}}>
            <button onClick={connectWalletHandler} style={{width: "150px", alignSelf:"center", backgroundColor: "#00f500", border: "none", height: "40px", fontSize: "13px", borderRadius: "10px"}}>Conectar Carteira</button>
            <section>
                <div >
                    <p>{error}</p>
                </div>
            </section>
                <h2>Empresa Start + Sugoucoin</h2>
                <p style={{lineHeight: "30px", marginBottom: "50px", maxWidth: "500px", textAlign: "center", alignSelf: "center"}}>Fusão de duas empresas. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <button style={{width: "150px", alignSelf:"center", backgroundColor: "#e8ab05", border: "none", height: "40px", fontSize: "13px", borderRadius: "10px"}}>Doar</button>
            </section>
        </div>
    )
}