import { IoEyeSharp } from 'react-icons/io5';
import Logo from '../../assets/discution.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEyeSlash } from 'react-icons/fa';
import './Register.css';
const Register = () => {
	const [isShowPassword, setIsShowPassword] = useState(false);
	return (
		<main className='main'>
			<section className='container'>
				<form>
					<div className='form-top'>
						<h2>Welcome !</h2>
						<h1>Sign up to</h1>
						<p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</p>
					</div>

					<div className='container-field'>
						<div className='field'>
							<label htmlFor='email'>E-mail</label>
							<input
								className='input'
								type='email'
								id='email'
								name='email'
								placeholder='Enter your user name'
							/>
						</div>
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
							<i onClick={() => setIsShowPassword(!isShowPassword)}>
								{isShowPassword ? <IoEyeSharp /> : <FaEyeSlash />}
							</i>
						</div>
						<div className='field'>
							<label htmlFor='confirmePassword'>Confirme password</label>
							<input
								type={isShowPassword ? 'text' : 'password'}
								id='confirmePassword'
								name='password'
								placeholder='Confirme the password'
							/>
							<i onClick={() => setIsShowPassword(!isShowPassword)}>
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
						<button type='submit'>Register</button>

						<div className='recg-register'>
							<span>
								Already have an Account ? <Link to='/'>Login</Link>
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
export default Register;
