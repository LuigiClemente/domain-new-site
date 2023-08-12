import SecurityLevel from './securityLevel/SecurityLevel'

const RegisterForm = () => {
  return (
    <div className='flex flex-col mb-10 bg-white shadow w-[60%] sm:rounded-lg'>
      <div className='px-4 py-5 md:grid md:grid-cols-3 md:gap-6  sm:p-6'>
        <div className='md:col-span-1'>
          <h3 className='text-lg font-medium text-gray-900 leading-6'>Create New Email Address</h3>
        </div>
        <div className='mt-5 md:col-span-2 md:mt-0'>
          <div className='grid grid-cols-6 gap-6'>
            <div className='col-span-6 sm:col-span-3'>
              <div className='flex flex-row items-center'>
                <label htmlFor='email' className='block mr-6 text-sm font-medium text-gray-700'>
                  E-Mail
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  autoComplete='given-name'
                  className='block mt-1 border border-gray-300 w-[400px] h-9 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                />
              </div>
            </div>

            <div className='col-span-6 sm:col-span-3'>
              <div className='flex flex-row items-center'>
                <label htmlFor='domainName' className='block mr-2 text-sm font-medium text-gray-700'>
                  @
                </label>
                <input
                  type='text'
                  name='domainName'
                  id='domainName'
                  autoComplete='family-name'
                  className='block mt-1 border border-gray-300 w-[400px] h-9 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                />
              </div>
            </div>

            <div className='col-span-6 sm:col-span-4'>
              <div className='flex flex-row items-center'>
                <label htmlFor='password' className='block mr-2 text-sm font-medium text-gray-700'>
                  Password
                </label>
                <input
                  type='text'
                  name='password'
                  id='password'
                  autoComplete='email'
                  className='block  mt-1 border border-gray-300 w-[400px] h-9 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
                  placeholder=''
                />
              </div>
            </div>
            {/* col-span-8 sm:col-span-6 */}
            <div className='col-span-8 sm:col-span-6'>
              <div className='flex flex-row items-center'>
                <label htmlFor='password' className='block mr-2 text-sm font-medium text-gray-700 w-[120px]'>
                  Forwarded e-mails
                </label>
                <p className='text-sm font-medium text-gray-500'>
                  Automatically forwarded all incoming email to the following email address(es):
                </p>
              </div>
            </div>
            <div className='col-span-8 sm:col-span-6'>
              <div className='flex flex-row items-center'>
                <label htmlFor='domainName' className='block mr-2 text-sm font-medium text-gray-700'>
                  Optional
                </label>
                <p className='text-sm font-medium text-gray-500'>Add Forwarding Target( 10 still available):</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SecurityLevel />
      <div className='flex justify-start px-4 py-5 mt-10  sm:p-6'>
        <button
          type='button'
          className='px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
          Cancel
        </button>
        <button
          type='submit'
          className='inline-flex justify-center px-4 py-2 ml-3 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
          Save
        </button>
      </div>
    </div>
  )
}

export default RegisterForm
