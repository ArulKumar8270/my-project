import React from 'react'
import './Users.css'

export default function Users(props) {
console.log(props.UserDatas)
return (
<div className='users'>
    <div className='row'>
        {props.UserDatas.map(UserDetails=>{
        return <div className='col-md-4'>
             <div className="card">
                <img className="card-img-top" src={UserDetails.avatar_url} alt="Card image" />
                <div className="card-body">
                    <h4 className="card-title">{UserDetails.login}</h4>
                    <p className="card-text">{UserDetails.type}</p>
                    <a href={UserDetails.url} className="btn btn-primary">See Profile</a>
                </div>
            </div>
        </div>
        })}
    </div>
</div>
)
}