import './box.css'

const Box = (props) => {
    return (
        <div className='box'>

            <img className='img-circle' src={props.image} />
            
            <div className="box-name">
                <div className="name">{props.name}</div>
                <div className="message">{props.message}</div>
            </div>

        </div>
    )
}
export default Box;