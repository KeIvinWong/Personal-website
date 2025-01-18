import fish from '../../assets/fish.jpg';  

function Card(){
    return(
        <div className="card">
            <div className='icon-container'>
                <img className="card-icon" src={fish} alt="profile picture"></img>
            </div>
            <h2>Temp</h2>
            <p>Temp</p>
        </div>
    );
}

export default Card;    