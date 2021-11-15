import React, { useState , useEffect } from 'react'
import Header from './Header'
import Users from './Users'

export default function App() {
  const [logo, setLogo] = useState("https://mevive.webindia.com/images/logo-dark.png")
  const [menu, setMenu] = useState(["Home"])
  const [UserDatas, setUserDatas] = useState([])

  useEffect(()=>{
    let SearchData = fetch("https://api.github.com/users")
    SearchData.then(GitData=>{
      GitData.json().then(UserDatas=>{
          setUserDatas(UserDatas)
      })
    })
   
  }, [])

  return (
    <div>
      <Header logo={logo}  menu={menu}/>
      <div className='container'>
      
      <Users UserDatas={UserDatas}/>
     
      </div>
    </div>
  )
}
