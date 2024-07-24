import './App.css';
import React, {useState, useEffect, useRef} from 'react'
import Resume from './components/Resume'
import NonExistentPage from './components/NonExistentPage'
import PromtUser from './components/PromptUser'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { useNavigate, Link } from 'react-router-dom'
import { HiArrowRight } from 'react-icons/hi'
import { MdOutlineRadioButtonChecked } from 'react-icons/md';

const converter = require('number-to-words')
function App() {
  const [userInfo, setUserInfo] = useState({})
  const [source, setSource] = useState('')
  const random_number = Math.floor(Math.random()* 10e4)
  const random_alpha_num = converter.toWords(random_number) //take our converter which can transform numbers into alphabetical form
  const getRandomNumber = (randNum) => {
    return converter.toWords(randNum)
  }
  const generateImage = () => {
    setSource(`https://robohash.org/stefan-${random_alpha_num}`)
    console.log(source)
  }

  useEffect(() => {
    generateImage()
  }, [])

  function handleChange(e) {
    setUserInfo(prevInfo => {
      return {
        ...prevInfo, 
        [e.target.name]: e.target.value 
      }
    })
  }
  return (
    <Router>
      <Routes>
        <Route path = '/' element = {<PromtUser userObject = {userInfo} imageSource = {source} handleChange = {handleChange}/>}/>
        <Route path = '/resume' element = {<Resume userObject = {userInfo} imageSource = {source}/>}/>
        <Route path = '*' element = {<NonExistentPage/>}/> 
      </Routes>
    </Router>
  );
}

export default App;
