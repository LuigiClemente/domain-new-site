import Header from '../header/Header'
import RegisterForm from './RegisterForm'

const Register = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full m-0 align-middle' style={{ position: 'relative' }}>
      <Header title={`Create New Email Address: Email Base`} currentPosition={`Email Address`} />
      <div
        className='flex flex-col items-center justify-center'
        style={{ position: 'relative', zIndex: '10', top: '-50px' }}>
        <RegisterForm />
      </div>
    </div>
  )
}

export default Register
