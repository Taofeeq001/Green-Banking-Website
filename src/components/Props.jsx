const Props = (props) =>{
    return(
        <div className="props.class">
            <img src={props.demo} alt="" />
            <h4>{props.heading}</h4>
            <p>{props.para}</p>
        </div>
    )
}
export default Props;