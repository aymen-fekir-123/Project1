import React from 'react'
import { Button } from './Button'
import './button.css'
import './header.css'
function Header() {

  const l = ["Web Designe","Web Devoloper", "UI/UX Designe"]
  const [text, setText] = React.useState("") 
  const [loop, setloop] = React.useState(1)
  const [perd, setperd] = React.useState(500)
  const [isdelet, setDelet] = React.useState(false)

  
  const Myref = React.useRef(null)

  const[isElementVisble, setElementVisble] = React.useState(false)



  React.useEffect(() => {
    const observ = new IntersectionObserver((entries) => {
      const entry = entries[0]
      setElementVisble(entry.isIntersecting)
    })

    observ.observe(Myref.current)
  }, [])




  function animationText () {
    const i = loop % l.length;
    let fulltext = l[i]
    let updateText = isdelet ? fulltext.slice(0, text.length - 1) : fulltext.slice(0, text.length + 1)
    setText(updateText)

    if (!isdelet && text.length + 1 === fulltext.length) {
      setDelet(true)
      setperd(200)
    }

    else if (isdelet && text.length - 1 === 0) {
      setDelet(false)
      setloop((priv) => priv + 1)
      setperd(500)
    }
  }
  

  React.useEffect(()=> {

      let inter =setInterval(() => {
        animationText()
    }, perd)
    
    return (() => {clearInterval(inter)})
    
  }, [text])

  

  return (
    <>
    <header>
     
      <div className='header-containor'>
        <div className='disc-section'>
          <Button buttonsize="btn-large" content="Welcome To My Portfolio"/>
          <div className='text-section'>
            <div className='animation-text' ref={Myref}>

              
                {isElementVisble &&
              
                <h1 className='static-text'>
                  Hi I'm Aymen <span className='dy first'> { text } </span>
                </h1>
                }
              
              
              
            </div>
          
            <p>
              Hi i'm Aymen I'm propblie web devoloper ,I'm from Moroco and I'm Availbale ro work,
              my passion when I was younger became an soccer player in national club, My childhood wasn't special
              in my school I was good in physics and Mathimatics and now i'm web devoloper 
            </p>
          </div>
          <Button buttonsize="btn-large" buttonstyle="btn-outline" content="Let's connect"/>
        </div>

        <div className='brand-imag'>
        
          <img src='/img/header-img.svg' alt='brand'/>
  
        </div>
      </div>
      
    </header>
    <div className='background'>
    </div>
    </>
  )
}

export default Header