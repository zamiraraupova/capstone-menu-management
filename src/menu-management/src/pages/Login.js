import { Link, useHistory } from 'react-router-dom'
import login from '../images/login.png';

const Login = (props) => {
    const history = useHistory();

    function submit(){
        history.push('/food');
    }

    return (
        <div className="page">
			{/* <form id="form" > */}
            <form id="form" onSubmit={submit}>
				<label htmlFor="username">Username: </label>
				{/* <input type="text" value={this.state.name} onChange={this.handleChange} id="name" /> */}
				<input type="text" />
                <br />
				<label htmlFor="password">Password: </label>
				{/* <input type="text" value={this.state.price} onChange={this.handleChange} id="price" /> */}
				<input type="text" />
                <br />
				<button onClick={submit}> <img id="icon" src={login} alt="login"></img> </button>
			</form>
        </div>
    )
}

export default Login
