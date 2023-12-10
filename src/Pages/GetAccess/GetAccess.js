// import React, {useState} from 'react';
// import Header from '../../Components/Header/Header';
// import Footer from '../../Components/Footer/Footer';
// import './GetAccess.css';
// import axios from 'axios';

// const GetAccess = () => {
//     const [haveAnAccount, setHaveAnAccount] = useState(false);
//     const [error, setError] = useState('');
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: '',
//         createPassword: '',
//       });
    
//       const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//           ...formData,
//           [name]: value,
//         });
//       };


//       const handleSubmit = async (e) => {
//         e.preventDefault();
    
//         // Basic form validation
//         if (!formData.email || !formData.password) {
//           setError('Please fill in all fields.');
//           return;
//         }
    
//         // Password matching validation
//         if (!haveAnAccount && formData.password !== formData.createPassword) {
//           setError('Passwords do not match.');
//           return;
//         }
    
//         // Check email format
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!emailRegex.test(formData.email)) {
//           setError('Invalid email format.');
//           return;
//         }
    
//         try {
//           if (!haveAnAccount) {
//             // Sign up logic
//             const response = await axios.post('/api/signup', formData);
//             console.log(response.data); // Handle success response
//           } else {
//             // Sign in logic
//             const response = await axios.post('/api/signin', formData);
//             console.log(response.data); // Handle success response
    
//             // Assume the server returns a boolean indicating if the sign-in was successful
//             if (response.data.userSignedIn) {
//               // Save userSignedIn to true in local storage
//               localStorage.setItem('userSignedIn', 'true');
//             } else {
//               setError('Email or password is incorrect.');
//             }
//           }
//         } catch (error) {
//           console.error('Error:', error.message);
//         }
//       };
    
//     return (
//         <section>
//             <Header/>
//             <div className="m-auto mt-10 mb-10 flex flex-col signup-form">
//                 <h2 className='text-blue-300 poiret-30 p-2 text-center'>{haveAnAccount ? 'Sign in to your account' : 'Create your zyva account'}</h2>
//                 <form className='flex flex-col gap-5 p-5' onSubmit={handleSubmit}>
//                     {!haveAnAccount && <label className='flex flex-col poiret-15'>
//                         Name:
//                         <input
//                         type="text"
//                         name="name"
//                         value={formData.name}
//                         onChange={handleChange}
//                         required
//                         placeholder='Enter Your Name'
//                     />
//                     </label>}

//                     <label className='flex flex-col poiret-15'>
//                     E-mail:
//                     <input
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         required
//                         placeholder='Enter Your E-mail'
//                     />
//                     </label>

//                       {haveAnAccount && <label className='flex flex-col poiret-15'>
//                         Password:
//                         <input
//                             type="password"
//                             name="password"
//                             value={formData.password}
//                             onChange={handleChange}
//                             required
//                             placeholder='Enter Your Password'
//                         />
//                         </label>}
                    

//                     {
//                         !haveAnAccount && <label className='flex flex-col poiret-15'>
//                         Create Password:
//                         <input
//                             type="password"
//                             name="createPassword"
//                             value={formData.createPassword}
//                             onChange={handleChange}
//                             required
//                             placeholder='Create A Password For Zyva'
//                         />
//                         </label>
//                     }

//                     {error}


//                     {
//                         !haveAnAccount ? <button type="submit" className='signup-button sulphur-25'>Sign Up</button> : <button type="submit"  className='signup-button sulphur-25'>Sign In</button>
//                     }

                    
//                 <p className="text-center already-have-account p-3 poiret-20">
//                     {haveAnAccount ? "Don't have an account?" : "Already have an account"} <span className='text-blue-300 cursor-pointer' onClick={() => setHaveAnAccount(!haveAnAccount)}>{!haveAnAccount ? 'Sign in' : 'Create one'}</span></p>
//                 </form>

//             </div>
//             <Footer/>
//         </section>
//     );
// };

// export default GetAccess;



import React, { useState } from 'react';
import axios from 'axios';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import './GetAccess.css';

const GetAccess = () => {
  const [haveAnAccount, setHaveAnAccount] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

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
            axios.post('http://localhost:5000/signin', formData)
            .then(response => {
                setFormData({
                    name: '',
                    email: '',
                    password: '',
                  })
            })
            .catch(error => {
            console.error('Error:', error);
            });
        }
        else{
            setError('fields can not be empty');
        }
    }
    else{
        if(formData.name && formData.email && formData.password) {
            console.log(formData)
            axios.post('http://localhost:5000/signup', formData)
            .then(response => {
                setFormData({
                    name: '',
                    email: '',
                    password: '',
                  })

                setError(response.message);
            })
            .catch(error => {
            console.error('Error:', error);
            });
        }
        else{
            setError('fields can not be empty');
        }
    }
  };

  const handleSetStates = () => {
    setHaveAnAccount(!haveAnAccount);
    setFormData({
        name: '',
        email: '',
        password: '',
      });
    setError('');
  }

  return (
    <section>
      <Header />
      <div className="m-auto mt-10 mb-10 flex flex-col signup-form">
        <h2 className='text-blue-300 poiret-30 p-2 text-center'>
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
              Sign Up
            </button>
          ) : (
            <button type="submit" className='signup-button sulphur-25'>
              Sign In
            </button>
          )}

          <p className="text-center already-have-account p-3 poiret-20">
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
