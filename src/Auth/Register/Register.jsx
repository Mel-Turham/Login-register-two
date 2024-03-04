import { IoEyeSharp } from 'react-icons/io5';
import Logo from '../../assets/discution.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaEyeSlash } from 'react-icons/fa';
import { Formik } from 'formik';
import { MdErrorOutline } from 'react-icons/md';
import './Register.css';
import * as Yup from 'yup';
const Register = () => {
	const [isShowPassword, setIsShowPassword] = useState(false);
	return (
		<main className='main'>
			<section className='container'>
				<Formik
					initialValues={{
						email: '',
						userName: '',
						password: '',
						confirmPassword: '',
					}}
					validationSchema={Yup.object({
						email: Yup.string()
							.email('Invalide Email')
							.required('The Email is required'),
						userName: Yup.string()
							.max(20, 'The user name most be less than 20 caracter')
							.min(8, 'The user name most be....')
							.required('The use name is required'),
						password: Yup.string()
							.min(8, 'Password is too short - should be 8 chars minimum.')
							.matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
							.required('The password is required'),
						confirmPassword: Yup.string()
							.oneOf([Yup.ref('password'), null], 'Password not match')
							.required('The confirme password is required'),
					})}
					onSubmit={(values) => {
						setTimeout(() => {
							alert(JSON.stringify(values, null, 2));
						}, 400);
					}}
				>
					{(formik) => (
						<form onSubmit={formik.handleSubmit}>
							<div className='form-top'>
								<h2>Welcome !</h2>
								<h1>Sign up to continue</h1>
								<p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet</p>
							</div>

							<div className='container-field'>
								<div className='field'>
									<label htmlFor='email'>E-mail</label>

									<div className='input-container'>
										<input
											className='input'
											type='email'
											id='email'
											name='email'
											placeholder='Enter your user name'
											{...formik.getFieldProps('email')}
										/>
									</div>
									{formik.touched.email && formik.errors.email ? (
										<span className='errorMessage'>
											{formik.errors.email} <MdErrorOutline />
										</span>
									) : null}
								</div>
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
										<i onClick={() => setIsShowPassword(!isShowPassword)}>
											{isShowPassword ? <IoEyeSharp /> : <FaEyeSlash />}
										</i>
									</div>
									{formik.touched.password && formik.errors.password ? (
										<span className='errorMessage'>
											{formik.errors.password}
											<MdErrorOutline />
										</span>
									) : null}
								</div>
								<div className='field'>
									<label htmlFor='confirmPassword'>Confirme password</label>
									<div className='input-container'>
										<input
											type={isShowPassword ? 'text' : 'password'}
											id='confirmPassword'
											name='confirmPassword'
											placeholder='Confirme the password'
											{...formik.getFieldProps('confirmPassword')}
										/>
										<i onClick={() => setIsShowPassword(!isShowPassword)}>
											{isShowPassword ? <IoEyeSharp /> : <FaEyeSlash />}
										</i>
									</div>

									{formik.touched.confirmPassword &&
									formik.errors.confirmPassword ? (
										<span className='errorMessage'>
											{formik.errors.confirmPassword}
											<MdErrorOutline />
										</span>
									) : null}
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
					)}
				</Formik>
				<div className='right'>
					<img src={Logo} alt='' />
				</div>
			</section>
		</main>
	);
};
export default Register;
