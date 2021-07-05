import React, { Component } from 'react'
import './navBar.css';
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faAmbulance } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";

class navBar extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         active: 'about'
    //     }
    //     this._handleClick = this._handleClick.bind(this);
    // }

    // _handleClick(e) {
    //      this.setState({
    //         active: e.target.innerHTML
    //      });
    // }
    render() {
        return (
            <div className="navBar">
                <div className="icon iconm">
                <FontAwesomeIcon icon={faAmbulance} size='3x'/>
                </div>
                
                

                <ul className="icons">
                    
                    <li className="icon">
                    
                        <NavLink to="/students" className="link" activeClassName="active"  exact >
                        <div class="ficon"><FontAwesomeIcon icon={faUser} size='2x' color='black'/></div>
                        <div class="text"><span>Students</span></div>
                        </NavLink>
                    </li>
                    
                    <li className="icon">
                        
                        <NavLink to="/lessonPath" className="link" activeClassName="active" exact>
                        <div class="ficon"><FontAwesomeIcon icon={faBook} size='2x' color='black'/></div>
                        <div class="text"><span>Lesson Plan</span></div>
                        </NavLink>
                    </li>

                    <li className="icon">
                        
                        <NavLink to="/settings"  className="link" activeClassName="active" exact>
                        <div class="ficon"><FontAwesomeIcon icon={faCog} size='2x' color='black'/></div>
                        <div class="text"><span>Settings</span></div>
                        </NavLink>
                    </li>
                </ul>
                
                
                
                
                
            </div>
        )
    }
}

export default navBar;
