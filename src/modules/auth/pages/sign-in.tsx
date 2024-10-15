import { useSignInMutation } from "../hooks/mutations";
import { SignIn } from "../types";
import LogoImg from '../../../assets/erplogo2.jpg';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';

const SignInComponent = () => {
  const navigate = useNavigate();
  const { mutateAsync: signIn } = useSignInMutation();

  const initialValues = {
    phone_number: "",
    password: "",
  };

  const handleSubmit = async (values: SignIn) => {
    console.log(values);
    try {
      await signIn(values);
    } catch (err) {
      console.error("An error occurred during login:", err);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='flex w-full max-w-[2440px] h-[100vh] bg-white shadow-lg'>
        <div className='hidden lg:block w-1/2 h-full'>
          <img src={LogoImg} alt="ERP Logo" className='w-full h-full object-cover' />
        </div>
        <div className='w-full lg:w-1/2 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8'>
          <div className='w-full max-w-[460px] flex flex-col gap-1'>
            <h1 className='font-semibold text-[40px] mb-8'>Login</h1>
            <Form
              name="login"
              initialValues={initialValues}
              onFinish={handleSubmit}
              className='flex flex-col gap-0'
            >
              <Form.Item
                name="phone_number"
                rules={[{ required: true, message: 'Please input your Phone number!' }]}
              >
                <Input
                  prefix={<UserOutlined className='text-[17px] text-[grey]' />}
                  placeholder="+998 99 006 06 06"
                  className='w-full h-[55px]'
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
              >
                <Input
                  prefix={<LockOutlined className='text-[17px] text-[grey]' />}
                  type="password"
                  placeholder="Password"
                  className='w-full h-[55px]'
                />
              </Form.Item>
              <Form.Item className='text-[#000000c4]'>
                <Button
                  block
                  htmlType="submit"
                  className='bg-[#d45b07] text-white p-8 text-[20px]'
                >
                  Log in
                </Button>
                <div className="mt-2 text-center">
                  <a onClick={() => navigate("/sign-up")} className='text-[black]'>
                    Register now!
                  </a>
                </div>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInComponent;
