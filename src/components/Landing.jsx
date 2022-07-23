import Header from "../wrappers/Header";
import Main from "../wrappers/Main";
import {useState} from "react";

function Landing({changeActive}) {


    const [login, setLogin] = useState(false)
    const [register, setRegister] = useState(false)

    function showLogin(e) {
        e.preventDefault()
        setLogin(prevState => true)
        setRegister(false)
    }

    function showRegister(e) {
        e.preventDefault()
        setRegister(prevState => true)
        setLogin(false)
    }

    return (
        <>
            <Header>
                <div className="logo">
                    <h1>Nezapomeň<span>.TO</span></h1>
                </div>

            </Header>
            <Main>

                <div className="box">
                    <div className="textbox ">

                        <h2 className='text active'>Zaregistrujte si Email na který chcete dostávat oznámení</h2>
                        <h2 className='text'>Blabla</h2>
                        <h2 className='text'>Lulu</h2>
                        <h2 className='text'>Bebe</h2>

                        <div className="helper__dots" onClick={changeActive}>
                            <div className="dotted active ">1</div>
                            <div className="dotted">2</div>
                            <div className="dotted">3</div>
                            <div className="dotted">4</div>
                        </div>

                    </div>
                    <div className="card">
                        <div className="card-heading">
                            <h2 className="active">Zdarma</h2>
                            <h2 className="">Medium</h2>
                            <h2 className="">Gold</h2>
                        </div>
                        <div className="popisek_sluzby">

                            <p>6 oznameni / Rok na vas Email</p>
                            <p>1 SMS / Rok na vase telefonni cislo</p>
                            <p>Tvorba Nakupniho seznamu</p>
                        </div>

                        <form className='landingForm'>
                            <div className="btns">
                                <input type="submit" id='btn1' value="Registrovat" onClick={showRegister}/>
                                <input type="submit" id='btn2' value="Prihlasit se" onClick={showLogin}/>
                            </div>
                            {register &&
                                <div className='inputs'>
                                    <label htmlFor="fname">Jmeno</label>
                                    <input type="text" id="fname" name="fname"/>
                                    <label htmlFor="pass">Heslo</label>
                                    <input type="password" id="pass" name="pass"/>
                                    <label htmlFor="passagain">Potvrdit Heslo</label>
                                    <input type="password" id="passagain" name="passagain"/>
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email" name="email"/>
                                    <input type="submit" value="Pokracovat" className='pokracovat'/>
                                </div>
                            }
                            {login &&
                                <div className='inputs'>
                                    <label htmlFor="fname">Jmeno</label>
                                    <input type="text" id="fname" name="fname"/>
                                    <label htmlFor="pass">Heslo</label>
                                    <input type="password" id="pass" name="pass"/>
                                    <input type="submit" value="Pokracovat" className='pokracovat' />
                                </div>


                            }




                        </form>


                    </div>
                </div>
            </Main>
        </>
    )
}


export default Landing
