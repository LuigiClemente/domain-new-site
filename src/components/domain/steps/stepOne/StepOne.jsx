import { useAppProvider } from '@/appProvider/AppProvider'

const StepOne = () => {
  const { setCurrentStep } = useAppProvider()
  const nextStep = () => {
    setCurrentStep(2)
  }
  return (
    <div className='w-full'>
      <div className='px-3  lg:gap-3'>
        <form className='w-full lg:p-2 '>
          <div className='max-w-xl text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:col-span-7'>
            <h2 className='inline mb-5 sm:block lg:inline xl:block'>Move godaddy.com</h2>{' '}
          </div>
          <div className='flex flex-col gap-x-4'>
            <label htmlFor='authorizationCode' className='sr-only'>
              Authorization code
            </label>
            <input
              id='authorizationCode'
              name='email'
              type='email'
              autoComplete='email'
              required
              className='flex-auto min-w-0 text-base text-gray-900 placeholder-gray-500 border rounded-md border-gray-900/10 px-[calc(theme(spacing.4)-1px)] py-[calc(theme(spacing[1.5])-1px)] leading-7 shadow-sm focus:border-indigo-600 focus:ring-indigo-600'
              placeholder='Enter your email'
            />
            <p className='inline mt-4 mb-4 text-sm text-gray-900 sm:block lg:inline xl:block leading-6'>
              Where I can find Authorization code?
            </p>
            <div className='flex flex-row'>
              <button
                type='submit'
                className='flex-none px-2 py-1 m-1 text-base font-semibold text-gray-900 bg-white border border-gray-300 rounded-md leading-7 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                onClick={nextStep}>
                More
              </button>
              <button
                type='submit'
                className='flex-none py-1 m-1 text-base font-semibold text-white bg-indigo-600 rounded-md px-3.5 leading-7 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                Enter Authorization code later
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
export default StepOne
