const SecurityLevel = () => {
  return (
    <div className='w-full mt-10  border-l-4 border-red-500 shadow'>
      <div className='flex-row pt-10 md:grid md:grid-cols-3 md:gap-6  sm:p-6'>
        <div className='md:col-span-1'>
          <h3 className='text-lg font-medium text-gray-900 leading-6'>Email Security level : low</h3>
          <p className='mt-1 text-sm text-gray-500'>
            {' '}
            Active your security option to efficiency protect your mailbox from online attack.
          </p>
        </div>
        <div className='mt-5 space-y-6 md:col-span-2 md:mt-0'>
          <fieldset>
            <legend className='sr-only'>protection against virus</legend>
            <div className='text-base font-medium text-gray-900' aria-hidden='true'>
              protection against virus
            </div>
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
                  <label htmlFor='protection_virus' className='font-medium text-gray-700'>
                    protection virus
                  </label>
                  <p className='text-gray-500'>Learn More</p>
                </div>
              </div>
              <legend className='sr-only'>protection against virus</legend>
              <div className='text-base font-medium text-gray-900' aria-hidden='true'>
                protection against data loss
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
                  <label htmlFor='data-loss' className='font-medium text-gray-700'>
                    By Email Archiving For -2$/month
                  </label>
                  <p className='text-gray-500'>{` 5 GB of Storage capacity is automatically expended as needed. Additional GBs will be charged at 100$ per
            month per commenced 2GB`}</p>
                </div>
              </div>
              <div className='flex items-start'>
                <div className='ml-3 text-sm'>
                  <label htmlFor='offers' className='font-medium text-gray-700'>
                    Please Note:
                  </label>
                  <p className='text-sm text-gray-500'>
                    {' '}
                    your address located another country, therefore, the final price may vary from the price shown here
                    due to different tax rate.
                  </p>
                </div>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  )
}

export default SecurityLevel
