import {React} from 'react'
import Header from '../header'
export default function Project(){

    return(
        <div style={{display: "flex", flexDirection: "column", marginBottom: "100px"}}>
            <Header />
            <section style={{marginTop: "50px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", alignSelf: "center", textAlign: "center", border: "1px solid", maxWidth: "900px", paddingTop: "20px", paddingBottom: "50px", borderRadius: "50px", width: "100%"}}>
                <h2>Empresa Start + Sugoucoin</h2>
                <p style={{lineHeight: "30px", marginBottom: "50px", maxWidth: "500px", textAlign: "center", alignSelf: "center"}}>Fusão de duas empresas. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                <button style={{width: "150px", alignSelf:"center", backgroundColor: "#e8ab05", border: "none", height: "40px", fontSize: "13px", borderRadius: "10px"}}>Doar</button>
            </section>
        </div>
    )
}