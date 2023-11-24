import React, {useState} from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import './GetAccess.css';

const GetAccess = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted:', formData);
      };
    
    return (
        <section>
            <Header/>
            <div className="m-auto mt-10 mb-10 flex flex-col signup-form">
                <h2 className='text-blue-300 poiret-40 p-2 text-center'>Create an Account</h2>
                <form className='flex flex-col gap-5 p-5' onSubmit={handleSubmit}>
                    <label className='flex flex-col poiret-15'>
                        Name:
                        <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder='Enter Your Name'
                    />
                    </label>

                    <label className='flex flex-col poiret-15'>
                    E-mail:
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder='Enter Your E-mail'
                    />
                    </label>

                    <label className='flex flex-col poiret-15'>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        placeholder='Enter Your Password'
                    />
                    </label>

                    <label className='flex flex-col poiret-15'>
                    Create Password:
                    <input
                        type="password"
                        name="createPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                        placeholder='Create A Password For Zyva'
                    />
                    </label>

                    <button type="submit" className='signup-button sulphur-25'>Sign Up</button>
                </form>

                <p className="text-center already-have-account p-3 poiret-20">
                    Already have an account? <span className='text-blue-300'>Sign in</span></p>
            </div>
            <Footer/>
        </section>
    );
};

export default GetAccess;