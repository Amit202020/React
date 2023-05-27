const Example= ()=>{
    return(
        <div className="heading">
                <h1> The random numbers are</h1>
                { Math.floor(Math.random()*10)+1}
        </div>
    )
}
export default Example;