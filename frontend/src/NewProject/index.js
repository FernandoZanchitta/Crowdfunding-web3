import {React, useState} from 'react'
import Header from '../header'
export default function NewProject(){
    const [title, setTitle] = useState("");
    const [story, setStory] = useState("");
    const [required, setRequired] = useState(0);
    const [category, setCategory] = useState("");
    return(
        <div style={{display: "flex", flexDirection: "column", marginBottom: "100px"}}>
            <Header />
            <form style={{marginTop: "50px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}} >
                <h2>CRIE SUA CAMPANHA</h2>
                <section style={{marginTop: "30px", display: "flex", flexDirection: "row", justifyContent: "center", maxWidth: "800px", width: "100%"}}>
                    <p style={{marginRight: "50px"}}>Título</p>
                    <input style={{width: "400px", height: "40px", borderRadius: "10px", borderStyle: "solid", borderWidth: "1px"}} type="text" name="title" value={title} onChange={setTitle}/>
                </section>
                <section style={{marginTop: "50px", display: "flex", flexDirection: "row", justifyContent: "center", maxWidth: "800px", width: "100%"}}>
                    <p style={{marginRight: "50px"}}>Descrição</p>
                    <textarea style={{width: "400px", height: "150px", borderRadius: "10px", borderStyle: "solid", borderWidth: "1px"}} type="text" name="story" value={story} onChange={setStory}/>
                </section>
                <section style={{marginTop: "50px", display: "flex", flexDirection: "row", justifyContent: "center", maxWidth: "800px", width: "100%"}}>
                    <p style={{marginRight: "50px"}}>Valor Requirido</p>
                    <input style={{width: "400px", height: "40px", borderRadius: "10px", borderStyle: "solid", borderWidth: "1px"}} type="number" name="required" value={required} onChange={setRequired}/>
                </section>
                <section style={{marginTop: "50px", display: "flex", flexDirection: "row", justifyContent: "center", maxWidth: "800px", width: "100%"}}>
                    <p style={{marginRight: "50px"}}>Categoria</p>
                    <input style={{width: "400px", height: "40px", borderRadius: "10px", borderStyle: "solid", borderWidth: "1px"}} type="text" name="category" value={category} onChange={setCategory}/>
                </section>
                <button type="submit" style={{width: "150px", alignSelf:"center", backgroundColor: "#e8ab05", border: "none", height: "40px", fontSize: "13px", borderRadius: "10px", marginTop: "50px"}}>CRIAR CAMPANHA</button>
            </form>
        </div>
    )
}