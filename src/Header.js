import React, {useState, useEffect} from 'react'
import SearchForm from './SearchForm'

export default function Header(props) {
  const [UserSearch, setUserSearch] = useState([])
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="#"><img src={props.logo}/>
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    {props.menu.map(menuItem=>
                        <li className="nav-item active">
                        <a className="nav-link" href="#">{menuItem}</a>
                      </li>
                      )
                    }
                  
                
                </ul>
               <SearchForm UserSearch={UserSearch}/>
              </div>
            </nav>
        </div>
    )
}
