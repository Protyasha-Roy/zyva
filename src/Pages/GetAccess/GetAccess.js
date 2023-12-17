import React, { useState } from 'react';
import axios from 'axios';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import './GetAccess.css';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';


const GetAccess = () => {
  const [haveAnAccount, setHaveAnAccount] = useState(false);
  const navigate = useNavigate();
  const uniqueId = uuidv4();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    userId: uniqueId
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if(haveAnAccount) {
        if(formData.email && formData.password) {
          setLoading(true);
            axios.post('https://zyva-server.onrender.com/signin', formData)
            .then(response => {
              localStorage.setItem('signedinId', response.data.user.userId);
              localStorage.setItem('isUserSignedin', true);
              setFormData({
                name: '',
                email: '',
                password: '',
                userId: null
              })
              setLoading(false);
              navigate('/playground');
            })
            .catch(error => {
              setError(error.response.data.message);
              setLoading(false);
            });
        }
        else{
            setError('fields can not be empty');
        }
    }
    else{
        if(formData.name && formData.email && formData.password) {
          setLoading(true)
            axios.post('https://zyva-server.onrender.com/signup', formData)
            .then(response => {
              localStorage.setItem('signedinId', response.data.userId);
              localStorage.setItem('isUserSignedin', true);
                setFormData({
                    name: '',
                    email: '',
                    password: '',
                    userId: null
                  })
                  setLoading(false);
                  navigate('/playground');
            })
            .catch(error => {
              setError(error.response.data.message);
              setLoading(false);
            });
          }
          else{
            setError('fields can not be empty');
            setLoading(false);
          }
    }
  };

  const handleSetStates = () => {
    setHaveAnAccount(!haveAnAccount);
    setFormData({
        name: '',
        email: '',
        password: '',
        userId: uuidv4
      });
    setError('');
  }

  return (
    <section>
      <Header />
      <div className="m-auto mt-5 mb-5 flex flex-col signup-form w-11/12 sm:w-8/12 md:w-6/12 lg:w-4/12">
        <h2 className='text-blue-300 poiret-25 p-2 text-center'>
          {haveAnAccount ? 'Sign in to your account' : 'Create your zyva account'}
        </h2>
        <form className='flex flex-col gap-5 p-5' onSubmit={handleSubmit}>
          {!haveAnAccount && (
            <label className='flex flex-col poiret-15'>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder='Enter Your Name'
              />
            </label>
          )}

          <label className='flex flex-col poiret-15'>
            E-mail:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder='Enter Your E-mail'
            />
          </label>

          {haveAnAccount && (
            <label className='flex flex-col poiret-15'>
              Password:
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder='Enter Your Password'
              />
            </label>
          )}

          {!haveAnAccount && (
            <label className='flex flex-col poiret-15'>
              Create Password:
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder='Create A Password For Zyva'
              />
            </label>
          )}

          {error && <p className='text-center text-red-400 sulphur-15'>{error}</p>}

          {!haveAnAccount ? (
            <button type="submit" className='signup-button sulphur-25'>
              {loading ? 'Signing in...' : 'Sign Up'}
            </button>
          ) : (
            <button type="submit" className='signup-button sulphur-25'>
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          )}

          <p className="text-center already-have-account p-3 poiret-15">
            {haveAnAccount ? "Don't have an account?" : "Already have an account"}{' '}
            <span className='text-blue-300 cursor-pointer' onClick={handleSetStates}>
              {!haveAnAccount ? 'Sign in' : 'Create one'}
            </span>
          </p>
        </form>
      </div>
      <Footer />
    </section>
  );
};

export default GetAccess;
