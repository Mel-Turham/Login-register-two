import './Login.css';
import { FaEyeSlash } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';
import { MdErrorOutline } from 'react-icons/md';
import Logo from '../../assets/discution.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
const Login = () => {
	const [isShowPassword, setIsShowPassword] = useState(false);

	return (
		<main className='main'>
			<section className='container'>
				<Formik
					initialValues={{
						userName: '',
						password: '',
					}}
					validationSchema={Yup.object({
						userName: Yup.string()
							.trim()
							.min(10, 'Minimum 6 caracter')
							.required('Your user name is required'),
						password: Yup.string()
							.trim()
							.required('The password is required')
							.min(8, 'Minimum 8 caracter'),
					})}
					onSubmit={(values, { resetForm }) => {
						setTimeout(() => {
							alert(JSON.stringify(values, null, 2));
						}, 1000);
						resetForm();
					}}
				>
					{(formik) => (
						<form onSubmit={formik.handleSubmit}>
							<div className='form-top'>
								<h2>Welcome !</h2>
								<h1>Sign in to continue </h1>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
							</div>

							<div className='container-field'>
								<div className='field'>
									<label htmlFor='userName'>User name</label>
									<div className='input-container'>
										<input
											type='text'
											id='userName'
											name='userName'
											placeholder='Enter your user name'
											{...formik.getFieldProps('userName')}
										/>
									</div>
									{formik.touched.userName && formik.errors.userName ? (
										<span className='errorMessage'>
											{formik.errors.userName}
											<MdErrorOutline />
										</span>
									) : null}
								</div>

								<div className='field'>
									<label htmlFor='password'>Password</label>

									<div className='input-container'>
										<input
											type={isShowPassword ? 'text' : 'password'}
											id='password'
											name='password'
											placeholder='Enter your password'
											{...formik.getFieldProps('password')}
										/>
										<i
											onClick={() =>
												setIsShowPassword((prevState) => !prevState)
											}
										>
											{isShowPassword ? <IoEyeSharp /> : <FaEyeSlash />}
										</i>
										{formik.touched.password && formik.errors.password ? (
											<span className='errorMessage'>
												{formik.errors.password}
												<MdErrorOutline />
											</span>
										) : null}
									</div>
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
										Don&quot;t have an Account ?{' '}
										<Link to='/Register'>Register</Link>
									</span>
								</div>
							</div>
						</form>
					)}
				</Formik>
				<div className='right'>
					<img src={Logo} alt='user speaking' loading='lazy' />
				</div>
			</section>
		</main>
	);
};
export default Login;
