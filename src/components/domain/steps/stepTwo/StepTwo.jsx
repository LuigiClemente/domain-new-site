import { useAppProvider } from '@/appProvider/AppProvider'
import ChevronDown from '@/components/icons/ChevronDown'

const StepTwo = () => {
  const { setCurrentStep } = useAppProvider()
  const nextStep = () => {
    console.log('step two')
    setCurrentStep(1)
  }
  return (
    <div className='w-full'>
      <div className='px-3  lg:gap-3'>
        <form className='w-full lg:p-2 '>
          <div className='w-full text-3xl font-bold tracking-tight text-gray-900 '>
            <h2 className='inline mb-5 sm:block lg:inline xl:block'>Move godaddy.com</h2>{' '}
          </div>
          <div className='flex flex-col gap-x-4'>
            <fieldset>
              <div className='mt-4 space-y-4'>
                <div className='flex flex-row items-start'>
                  <div className='flex items-center h-5'>
                    <input
                      id='protection_virus'
                      name='protection_virus'
                      type='checkbox'
                      className='w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500'
                    />
                  </div>
                  <div className='ml-3 text-sm'>
                    <div className='flex flex-row'>
                      <label htmlFor='protection_virus' className='font-medium text-gray-700'>
                        Recommendation:
                      </label>
                      <p className='w-full text-left text-gray-500'>
                        The domain will be automatically switched to IONIC name server after transfer{' '}
                      </p>
                    </div>
                    <p className='flex flex-row items-center text-blue-500'>
                      {' '}
                      <ChevronDown classCss={`h-4 w-4 text-blue-500`} /> Learn More
                    </p>
                  </div>
                </div>

                <div className='flex items-start'>
                  <div className='flex items-center h-5'>
                    <input
                      id='data-loss'
                      name='data-loss'
                      type='checkbox'
                      className='w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500'
                    />
                  </div>
                  <div className='ml-3 text-sm'>
                    <label htmlFor='data-loss' className='w-full font-medium text-left text-gray-700'>
                      Keep current name server settings of domain after transfer
                    </label>
                    <p className='flex flex-row items-center text-blue-500'>
                      {' '}
                      <ChevronDown classCss={`h-4 w-4 text-blue-500`} /> More
                    </p>
                  </div>
                </div>
              </div>
            </fieldset>
            <div className='flex flex-row'>
              <button
                type='submit'
                className='flex-none px-2 py-1 m-1 text-base font-semibold text-gray-900 bg-white border border-gray-300 rounded-md leading-7 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                Add To Basket
              </button>
              <button
                onClick={nextStep}
                type='submit'
                className='flex-none py-1 m-1 text-base font-semibold text-white bg-indigo-600 rounded-md px-3.5 leading-7 shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                Back to authorization
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
export default StepTwo
