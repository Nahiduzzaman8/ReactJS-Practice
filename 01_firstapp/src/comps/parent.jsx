import Button from './button'; 
import P from './p'; 
import { useState } from "react";


function Parent(){
    let [count , updateCount] = useState(0);
    return(
        <>
        <P count = {count}></P>
        <Button count = {count} updateCount = {updateCount}></Button>
        </>
    )
}

export default Parent