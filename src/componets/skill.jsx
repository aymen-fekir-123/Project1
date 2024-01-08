import React from 'react'
import './skill.css'
function Skill() {
   
    function moveLeft (event) {
        
        document.querySelector('.card-section').scrollLeft += event.target.className === "litem" ? 200 : -200 ;
    }
 
  return (


    <div className='skill-containor'>
        <div className='skill-wraper'>
            <div className='skill'>
                <div className='text'>
                    <h2>Skill</h2>
                    <p>I have a bunch of skills like every devoloper showld, like react python html css and js and web Designe web Devoloper and logo Designe..</p>
                </div>
                <div className='card-containor'>
                    <div className='left' onClick={moveLeft}>
                        <div className='litem'>
                            <img src='/img/arrow1.svg' alt='arrow' />
                        </div>
                    </div>
                    <div className='card-section' >
                        <div className='card'>
                            <img src='/img/meter1.svg' alt='img'/>
                            <h5> Python </h5>
                        </div>

                        <div className='card'>
                            <img src='/img/meter2.svg' alt=''/>
                            <h5> log Designe </h5>
                        </div>

                        <div className='card'>
                            <img src='/img/meter3.svg' alt=''/>
                            <h5> web Designe </h5>
                        </div>

                        <div className='card'>
                            <img src='/img/meter1.svg' alt=''/>
                            <h5> web Devoloper </h5>
                        </div>
                        <div className='card'>
                            <img src='/img/meter1.svg' alt=''/>
                            <h5> web Scraping </h5>
                        </div>


                       
                       
                    </div>

                    <div className='right'>
                        <div className='ritem' onClick={moveLeft}>
                            <img src='/img/arrow2.svg' alt='srrow2' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skill