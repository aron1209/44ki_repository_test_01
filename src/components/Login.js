import React from 'react'

function Login() {
    return (
        <form>
            <div className='form-inner'>

                <div className='form-group'>
                    <label htmlFor='name'> </label>
                    <input type='text' name='name' id='name' />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'> </label>
                    <input type='email' name='email' id='email' />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'> </label>
                    <input type='password' name='password' id='password' />
                </div>

                <button type='submit'>login</button>

            </div>
        </form>
    )
}

export default Login
