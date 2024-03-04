import './Login.css';
import { FaEyeSlash } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';
import Logo from '../../assets/discution.svg';
import { useState } from 'react';

const Login = () => {
	const [isShowPassword, setIsShowPassword] = useState(false);

	return (
		<main className='main'>
			<section className='container'>
				<form>
					<div className='form-top'>
						<h2>Welcome !</h2>
						<h1>Sign in to</h1>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
					</div>

					<div className='container-field'>
						<div className='field'>
							<label htmlFor='userName'>User name</label>
							<input
								type='text'
								id='userName'
								name='userName'
								placeholder='Enter your user name'
							/>
						</div>

						<div className='field'>
							<label htmlFor='password'>Password</label>
							<input
								type={isShowPassword ? 'text' : 'password'}
								id='password'
								name='password'
								placeholder='Enter your password'
							/>
							<i onClick={() => setIsShowPassword((prevState) => !prevState)}>
								{isShowPassword ? <IoEyeSharp /> : <FaEyeSlash />}
							</i>
						</div>
						<div className='field ckeckbox'>
							<div>
								<input
									type='checkbox'
									id='rememberMe'
									name='userName'
									placeholder='Enter your user name'
								/>
								<label htmlFor='rememberMe'>Remember me</label>
							</div>
							<p>Forgot password?</p>
						</div>
						<button type='submit'>Login</button>

						<div className='recg-register'>
							<span>
								Don&quot;t have an Account ? <a href=''>Register </a>
							</span>
						</div>
					</div>
				</form>
				<div className='right'>
					<img src={Logo} alt='' />
				</div>
			</section>
		</main>
	);
};
export default Login;
