import { Button } from "react-bootstrap"

const Btn = (props)=> {

    return(
        <Button {...props} className={`w-100 ${props.className}`}>{props.text}</Button>
        
    )
}

export default Btn