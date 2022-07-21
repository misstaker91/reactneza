import main from './assets/images/main-alternative.svg'
import Wrapper from './assets/wrappers/LandingPage'
import {Component} from "./components/component";
function Landing() {
    return (
        <Wrapper>
            <nav>
                <Component />
            </nav>
            <div className='container page'>
                <div className='info'>
                    <h1>
                        job <span>tracking</span> app
                    </h1>
                    <p>
                        I'm baby typewriter PBR&B austin kickstarter godard tote bag. Polaroid squid chia irony
                        vexillologist kogi succulents. 90's food truck slow-carb paleo, aesthetic tilde post-ironic jean
                        shorts enamel pin street art. Coloring book pour-over butcher banh mi wayfarers trust fund
                        polaroid jianbing letterpress deep v pop-up.
                    </p>
                    <button className='btn btn-hero'>
                        login/register
                    </button>
                </div>
                <img src={main} alt='job hunt' className='img main-img'/>


            </div>
        </Wrapper>
    )
}

export default Landing