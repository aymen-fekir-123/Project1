import React from 'react'
import './project.css'
function Project() {
    const [project, setProject] = React.useState({
        t1:true,
        t2:false,
        t3:false
    })

    function change(event) {
        console.log(event.target.className)
        setProject((priv) => {
            return({
                t1:event.target.className === "tab1" || event.target.className === "tab1 active",
                t2:event.target.className === "tab2" || event.target.className === "tab2 active",
                t3:event.target.className === "tab3" || event.target.className === "tab3 active" 
            })
        })
    }

    // "background": "linear-gradient(rgba(170, 54, 124, 0.5)  5%, rgba(74, 47, 189, 0.5))" 
  return (
    <section>
        <div className='containor'>
            <div className='text-aria'>
                <h2>Project</h2>
                <p>As You Can See I have a lot of project here, lading page web Scraping flask project react project and protfolio project Ect Ihave a lot of Project You Can See here and you Can Acsess to See the project how it's done </p>
            </div>
            <div className='tab-containor'>
                <div className={project.t1 ? "tab1 active" : "tab1"} onClick={change} data-category="Tab1">Tab1</div>
                <div className={project.t2 ? "tab2 active" : "tab2"} onClick={change} data-category="Tab2">Tab2</div>
                <div className={project.t3 ? "tab3 active" : "tab3"} onClick={change} data-category="Tab3">Tab3</div>
            </div>
            <div className={project.t1 ? 'project-containor p-active':'project-containor'}>
                <div className='project'>
                    <img src='/img/project-img1.png' alt='imf' />
                </div>
                
                <div className='project'>
                    <img src='/img/project-img2.png' alt='imf' />
                </div>

                <div className='project'>
                    <img src='/img/project-img3.png' alt='imf' />
                </div>

                <div className='project'>
                    <img src='/img/project-img1.png' alt='imf' />
                </div>

                <div className='project'>
                    <img src='/img/project-img2.png' alt='imf' />
                </div>

                <div className='project'>
                    <img src='/img/project-img3.png' alt='imf' />
                </div>
            </div>

            <div className={project.t2 ? 'pro-tab2 p-active':'pro-tab2'}>
                <p>
                    As You Can See I have a lot of project here, lading page web Scraping 
                    flask project react project and protfolio project Ect Ihave a lot of Project 
                    You Can See here and you Can Acsess to See the project how it's done 
                </p>
            </div>

            <div className={project.t3 ? 'pro-tab3 p-active':'pro-tab3'}>
                <p>
                    As You Can See I have a lot of project here, lading page web Scraping 
                    flask project react project and protfolio project Ect Ihave a lot of Project 
                    You Can See here and you Can Acsess to See the project how it's done 
                </p>
            </div>
        </div>
    </section>
  )
}

export default Project