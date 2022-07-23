import './App.css'
import Landing from "./components/Landing";

function App() {
    function changeActive(e) {
        const dotsJS = Array.from(document.getElementsByClassName('dotted'))
        const textJS = Array.from(document.getElementsByClassName('text'))

        if (e.target.classList.contains('dotted')) {
            for (let i = 0; i < dotsJS.length; i++) {
                if (dotsJS[i].classList.contains('active')) {
                    dotsJS[i].classList.remove('active')
                    textJS[i].classList.remove('active')



                }
            }
            dotsJS[e.target.innerText - 1].classList.add('active')
            textJS[e.target.innerText - 1].classList.add('active')

        }
    }


    return (

        <Landing changeActive={changeActive}/>


    )
}

export default App;
