import React from 'react'
import './LandingPage.css'
import chairImage from '../../Assets/Group 542.png'

const LandingPage = () => {
    return (
        <>
            {/* <div className="bgColor">
            <p>CAREERS</p>
            </div> */}
            <div className='LnadingPage'>
                <div className="LangingPage_top">
                    <div className="LangingPage_top_left">
                        {/* <div>
                        <p>CAREERS</p>

                        </div> */}
                        

                    </div>
                    {/* <div className="LangingPage_top_right">
                        <img src={chairImage} alt="" />
                    </div> */}
                </div>
                <div className="LangingPage_bottom">

                    <div>
                        <h5>Personal Details</h5>
                        <p>Please complete the below form and attach a CV.</p>
                    </div>
                    <form action="" id='form'>
                        <div className='LandingPage_form'>
                        <div className='input-group'>
                                <label htmlFor="name">Email Address</label>
                                <input autoComplete='off' type="text" id='name' required />
                            </div>
                        </div>
                        <div className='LandingPage_form form_media'>
                            <div className='input-group'>
                                <label htmlFor="first_name">First Name</label>
                                <input autoComplete='off' type="text" id='first_name' required />
                            </div>
                            <div className='input-group'>
                                <label htmlFor="last_name">Last Name</label>
                                <input autoComplete='off' type="text" id='last_name' required />
                            </div>
                            <div className='input-group'>
                                <label htmlFor="phone">Telephone</label>
                                <input autoComplete='off' type="number" id='phone' required />
                                <span>Please include your country and area code</span>
                                
                            </div>
                            
                        </div>
                        <div className='LandingPage_form LandingPage_form_bottom'>
                        <div className='input-group chooseFile'>
                                <label htmlFor="file">Upload CV <i class="bi bi-upload"></i></label>
                                <input type="file" id='file' required title='Select file' placeholder='Upload CV' />

                            </div>
                            <span>Select resume file (TXT, PDF or Word DOC)</span>
                        </div>
                        <div className='LandingPage_btn'>
                            <button>Submit</button>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default LandingPage