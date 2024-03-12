import { AuthWrapper } from '@/components';
import Form from './component/Form';

const Login = () => {
  return (
    <AuthWrapper title='Account Login'>
      <div className='flex flex-col items-center justify-start lg:gap-10 gap-7 w-full font-barlow'>
        <Form />
      </div>
    </AuthWrapper>
  )
}

export default Login;