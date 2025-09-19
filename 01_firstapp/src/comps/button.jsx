

function Button({count, updateCount}){

    let add = ()=>{
        updateCount(count+1);
    }

    let remove = ()=>{
        updateCount(count-1);
    }

    return (
        <>
            <button onClick={add}>Increase</button>
            <button onClick={remove}>Decrease</button>
            
<button type="button" class="btn btn-warning">Warning</button>
        </>
    )
}
export default Button