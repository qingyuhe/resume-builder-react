import React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import InputItem from './InputItem'
import { AiOutlineMail } from 'react-icons/ai'
import { BsTelephone } from 'react-icons/bs'
import { GiAges } from 'react-icons/gi'
import { FaBirthdayCake } from 'react-icons/fa'
import { MdOutlineSchool } from 'react-icons/md'
import { CgWebsite } from 'react-icons/cg'
import 'animate.css'
import Resume from './Resume'

const PromptUser = ({handleChange, imageSource, OnButtonClick, userObject}) => {
    const navigate = useNavigate()

    const onButtonClick = () => {
        alert(`WINDOWS DIMENSION : ${window.innerWidth}, ${window.innerHeight}`)
        navigate('/resume')
    }

    return (
        <> 
        {/* changed OnButtonClick to miniscule */}
        {OnButtonClick ? <Resume userObject = {userObject} imageSource = {imageSource}/> : <div className = 'prompt-container animate__animated animate__bounce'>
            <div className='inputs'>
                <InputItem className = 'first-name' onChange = {handleChange} label = 'First Name' placeholder ='Enter your first name' name = 'firstName'/>
                <InputItem className = 'last-name' onChange = {handleChange} label = 'Last Name' placeholder ='Enter your last name' name = 'lastName'/>
                <InputItem className = 'email' onChange = {handleChange} label = {<AiOutlineMail/>} placeholder ='Enter your email address' name = 'email'/>
                <InputItem className = 'phone' onChange = {handleChange} label = {<BsTelephone/>} placeholder = 'Enter your phone number' name = 'phoneNumber'/>
                <InputItem className = 'website' onChange = {handleChange} label = {<CgWebsite/>} placeholder='Enter your website' name='website'/>
                <InputItem className = 'birth-date' onChange = {handleChange} label = {<FaBirthdayCake/>} type = 'date' name = 'DOB'/>
                <InputItem className = 'age' onChange = {handleChange} label = {<GiAges/>} type = 'number' name = 'age' placeholder = 'Enter your age'/>

                <InputItem className = 'skills' onChange = {handleChange} label = 'Skill' name = 'skills' placeholder = 'List one relevent skill'/>
                <InputItem className = 'experience' onChange = {handleChange} label = {<MdOutlineSchool/>} name = 'experience' placeholder = 'Enter your experience' />
                <InputItem className = 'graduateYear' onChange = {handleChange} label = 'Graduation Year' name = 'graduationYear' placeholder = 'Enter your Graduation Year'/>
                <InputItem className = 'accomplishments' onChange = {handleChange} label = 'Accomplishment' name = 'accomplishment' placeholder = 'List one major accomplishment' />
                <InputItem className = 'university' onChange = {handleChange} label = 'University' name = 'university' placeholder = 'Enter University Name' />
                <InputItem className = 'profile' onChange = {handleChange} placeholder = 'Write about yourself' name = 'profile' isTextArea = {true} />

                {/* <InputItem className = 'profile' onChange = {handleChange} placeholder = 'Write about yourself' name = 'profile' isTextArea = {true} \> */}
                <button className = 'generate-button' onClick={() => {
                    onButtonClick()
                }}>Generate Resume
                </button>

            </div> 
        </div>}
        </>
    )
}

export default PromptUser