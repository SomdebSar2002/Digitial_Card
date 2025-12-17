import { createRoot } from "react-dom/client"
import {Main} from "/components/Main.jsx"
import {Footer} from "/components/Footer.jsx"
import {Header} from "/components/Header.jsx"
const root = createRoot(document.getElementById("root"))
const links = {
    "github":"https://github.com/SomdebSar2002",
    "x":"https://x.com/SomdebSar",
    "instagram":"https://www.instagram.com/SomdebSar2002",
    "discord":"https://discord.com/users/ExodusSpecter",
    "linkedin":"https://www.linkedin.com/in/somdeb-sar-2812b026a/",
    "email":"mailto:somdebsar2002@gmail.com"
}
document.addEventListener('click',e=>{
    if(e.target.value in links)
    {
        window.open(links[e.target.value], '_blank');
    }
})
root.render(
    <>
    <Header/>
    <Main/>
    <Footer/>
    </>
)