import React from 'react'
import './form.css'
function Form() {

  const [change, setChange] = React.useState({
    firstName : "",
    lastName : "",
    email : "",
    telphone : "",
    comment : ""
  })

  const [visible, setVisible] = React.useState(false)
  const MyRef = React.useRef()

  React.useEffect(()=> {

    const observ = new IntersectionObserver((entries)=> {
      setVisible(entries[0].isIntersecting)
    })
    observ.observe(MyRef.current)
  }, [])

  function handelchange (event) {
    console.log(event.target.value)
    setChange((priv) => {
      return({
        ...priv,
        [event.target.name] : event.target.value
      })
    })
  }
  







  return (
    <>
    <div className='content-form' ref={MyRef}>
        <div className={visible ? 'wraper-img active-f':'wraper-img'} >
            <img src='/img/contact-img.svg' alt='img' />
        </div>

        <div className={visible ? 'form-containor active-f':'form-containor' }>
          <h2>Get In Touch</h2>
          <form action='' method='post' className='form'>
            <input type='text' placeholder='first name' name='firstName' value={change.firstName} onChange={handelchange}/> 
            <input type='text' placeholder='last name' name='lastName' value={change.lastName} onChange={handelchange}/>
            <input type='email' placeholder='email' name='email' value={change.email}  onChange={handelchange}/>
            <input type='text'  placeholder='telphone'name='telphone' value={change.telphone} onChange={handelchange}/>
            <textarea placeholder='message' name='comment' value={change.comment} onChange={handelchange}/>
            <button>Send</button>
            
          </form> 
        </div>
    </div>
    <div className='subscribe-containor' >
      <div className='text-sub'>
        <h5>
          Subscribe to our 
          Newslatter 
          & Never miss latest
          update
        </h5>
      </div>
      <form>
        <input type='email' className='email-s' placeholder='email' />
        <button className='button-s'>Submit</button>
      </form>
    </div>
    </>
  )
}

export default Form