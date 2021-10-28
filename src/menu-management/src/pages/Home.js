import { Link } from 'react-router-dom'

const Home = (props) => {
    console.log(props.image)
    return (
        <div className="page">
            <h1>Welcome to "Om-nom-nom" kitchen!</h1>
            <h3>This is a mediterranean kitchen with all its deliciousness</h3>
        </div>
    )
}

export default Home
