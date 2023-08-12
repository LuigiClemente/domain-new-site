const CardSubDomain = () => {
  return (
    <div className='flex flex-col m-5 text-gray-900 border border-gray-200 bg-green w-[600px]'>
      <div className='flex p-6 border shadow-sm border-gray-50 bg-gray-50'>
        <p>
          A subdomain is an additional division of you subDomain, you can use to make specific content accessible
          directly, subDomain are structured according of the pattern subdomain name.domain.name.extension.
        </p>
      </div>
      <div className='flex flex-col  p-10'>
        <div className='flex flex-row items-center mb-5'>
          <span className='mr-2'>SubDomain name </span>
          <input type={'text'} className='mr-2 border border-gray-300 rounded-md h-9' />
          <span>friendly.io</span>
        </div>

        <div className='relative flex items-start py-4 mb-5'>
          <div className='flex items-center h-5 mr-3'>
            <input
              id='comments'
              aria-describedby='comments-description'
              name='comments'
              type='checkbox'
              className='w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500'
            />
          </div>
          <div className='flex-1 min-w-0 text-sm'>
            <label htmlFor='comments' className='font-medium text-gray-700'>
              Create another subdomain
            </label>
          </div>
        </div>
        <div className='flex flex-row mb-5'>
          <button
            type='button'
            className='inline-flex items-center px-3 py-2 m-1 text-base font-medium text-white bg-indigo-500 rounded-md shadow-sm '>
            save
          </button>
          <button
            type='button'
            className='inline-flex items-center px-3 py-2 m-1 text-base font-medium  text-indigo-500 bg-white border border-indigo-500 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
            cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardSubDomain
