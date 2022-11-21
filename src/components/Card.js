import { MdDeleteForever } from "react-icons/md";

const Card = ({ id, text, type, weight, abilities, num, date, handleDeleteCard }) => {
    return(
        <div className="card">
            <div className="screen">  
                <span className="enter-text">
                    {text}           
                    <br/>      
                    {type}
                    <br/>
                    {weight}
                    <br/>
                    {abilities}
                </span>
            </div>
            <div className="card-footer">
                <small>#{num}</small>
                <small>{date}</small>
                <div className="btn btn-danger">
                    <MdDeleteForever 
                        // on click, delete note with current id (passed from props)
                        onClick={() => {
                            handleDeleteCard(id); 
                        }}
                        className="delete-icon" 
                        size="1.3em"
                    />
                </div>
            </div>
        </div>
    ); 
}; 

export default Card; 