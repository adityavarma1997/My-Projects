import React, { Component } from 'react'
import './lessonPlan.css';
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class lessonPlan extends Component {
    render() {
        return (

            <div className="lessonPlan">
                <div className="video">
                <FontAwesomeIcon icon={faPlay} id="ficon"/>
                    <h2>Videos</h2>
                    </div>
                <div id="insertURL">
                    <span id="stag">Insert URL here</span>
                </div>
                <br />
                <div id="or"><span>or</span></div>
                <br />
                <div id="upload">
                    <span>upload</span>
                </div>
            </div>
        )
    }
}
export default lessonPlan;