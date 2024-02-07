
import { useFormik } from 'formik';
import {validationSchema} from './UseSchema'

const Tenary = () => {
    // const passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    
    const {handleChange, handleSubmit, values, errors} = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values)
        },
    });

    return (
        <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="text-2xl mb-4">Form</h1>
          <div className="mb-4">
            <input
              type="text"
              onChange={handleChange}
              placeholder="First Name"
              value={values.firstName}
              name="firstName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <span className="text-red-500">{errors.firstName}</span>
          </div>
          <div className="mb-4">
            <input
              type="text"
              onChange={handleChange}
              placeholder="Last Name"
              value={values.lastName}
              name="lastName"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <span className="text-red-500">{errors.lastName}</span>
          </div>
          <div className="mb-4">
            <input
              type="email"
              onChange={handleChange}
              placeholder="Email"
              value={values.email}
              name="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <span className="text-red-500">{errors.email}</span>
          </div>
          <div className="mb-4">
            <input
              type="password"
              onChange={handleChange}
              placeholder="Password"
              value={values.password}
              name="password"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <span className="text-red-500">{errors.password}</span>
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Submit
          </button>
        </form>
      </div>
      
    )
}

export default Tenary;
