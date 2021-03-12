import React from 'react'
import { Button } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { faMinusCircle } from "@fortawesome/free-solid-svg-icons";


export default (props) => {

    return (
        <div>
            <Button color='dark' className='buttonMargin' icon={faPlusCircle} onClick={props.onInc}>Somar
                &nbsp;
                <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
            </Button>
            <Button color='dark' className='buttonMargin' icon={faPlusCircle} onClick={props.onDec}>Subtrair
                &nbsp;
                <FontAwesomeIcon icon={faMinusCircle}></FontAwesomeIcon>
            </Button>
        </div>
    )

}
