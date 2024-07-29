import { Link, useNavigate } from 'react-router-dom';
import '../App.css'
const Home = () => {
    const navigate = useNavigate()

    const handleClick = () => {
       navigate("/clans")
    }
    return (

        <>
        <p>
            <span onClick={handleClick}>Clãns</span>
        </p>
        <Link to={`/disciplinas`}> Disciplinas</Link>
        
    </>
    )
}

export default Home;
