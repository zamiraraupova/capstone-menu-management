import { Link } from 'react-router-dom'

const Login = (props) => {
    console.log(props.image)
    return (
        <div className="login-page">
			<form id="form" >
            {/* <form id="form" onSubmit={this.handleSubmit}> */}
				<label htmlFor="username">Username: </label>
				{/* <input type="text" value={this.state.name} onChange={this.handleChange} id="name" /> */}
				<input type="text" />
                <br />
				<label htmlFor="password">Password: </label>
				{/* <input type="text" value={this.state.price} onChange={this.handleChange} id="price" /> */}
				<input type="text" />
                <br />
				<input type="submit" />
			</form>
        </div>
    )
}

export default Login
