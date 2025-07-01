import React from 'react'

function Form() {
  return (
    <div>
      <div className="form">
        <div className="form-sub1">
            <div >
                <table className="form-div">
                    <tr >
                        <td className='form-title'>
                            <img className='form-img' src="src\assets\img\form.png" alt="" />
                        </td>
                        <td className='form-title'>
                            <h2>Sign Up Now</h2>
                        </td>
                    </tr>
                    <tr>
                        <td>Full Name:</td>
                    </tr>
                    <tr>
                        <td><textarea className='textarea' name="" id="" placeholder='Name'></textarea></td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                    </tr>
                    <tr>
                        <td><textarea className='textarea' name="" id="" placeholder='Email'></textarea></td>
                    </tr>
                    <tr>
                        <td>Password</td>
                    </tr>
                    <tr>
                        <td><textarea className='textarea' name="" id="" placeholder='...........'></textarea></td>
                    </tr>
                    </table>
            </div>
            <div className="btn-div">
                <tr>
                    <td>
                        <input className='btn button' type="button" value="Sign Up" />
                    </td>
                </tr>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Form
