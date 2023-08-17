import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import {BsGithub} from 'react-icons/bs'
import {SiReplit} from 'react-icons/si'


const projectrs = [
    {
        "name":"candyhub",
        "desc": "This is a fully functional E-Comerce site.",
        "fontColor":"white",
        "sourceIcon":<BsGithub/>,
        "sourceUrl": "https://github.com/sayan-the-rat/candyhub",
        "url":"https://candyhub.vercel.app",
        "imgUrl":IMG1
    },
    {
        "name":"sbloader",
        "desc": "Here You can download youtube and facebook video localy.",
        "fontColor":"#4db5ff",
        "sourceIcon":<BsGithub/>,
        "sourceUrl": "https://github.com/sayan-the-rat/sbloader",
        "url":"https://sbloader.sayanbiswas8.repl.co",
        "imgUrl":IMG2
    },
    {
        "name":"Chat App -random chat",
        "desc": "Here you cat with random parsom who are using the webapp at the same time.",
        "fontColor":"white",
        "sourceIcon":<SiReplit/>,
        "sourceUrl": "https://replit.com/@SayanBiswas8/chat-App",
        "url":"https://chat-app.sayanbiswas8.repl.co",
        "imgUrl":IMG3
    },
    {
        "name":"Multiplayer Online TicTacToe",
        "desc": "Play TicTacToe with your frind localy or from remote place via internet.",
        "fontColor":"#4db5ff",
        "sourceIcon":<SiReplit/>,
        "sourceUrl": "https://replit.com/@SayanBiswas8/tictactoe",
        "url":"https://tictactoe.sayanbiswas8.repl.co",
        "imgUrl":IMG4
    },
    {
        "name":"ToDo Chart",
        "desc": "ToDo Chart manager to manage all your work.",
        "fontColor":"#4db5ff",
        "sourceIcon":<BsGithub/>,
        "sourceUrl": "https://github.com/sayan-the-rat/todo",
        "url":"https://sayan-the-rat.github.io/todo/",
        "imgUrl":IMG5
    }
]

export default projectrs;