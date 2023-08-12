import ChevronDown from '@/components/icons/ChevronDown'
import ChevronUp from '@/components/icons/ChevronUp'
import CircleCheck from '@/components/icons/CircleCheck'
import ExclamationCircle from '@/components/icons/ExclamationCircle'
import { Disclosure, Transition } from '@headlessui/react'

const DomainCard = () => {
  return (
    <div className='flex flex-col m-10 text-gray-900 border-b border-gray-200 bg-green sm:px-3'>
      <div className='flex flex-wrap items-center justify-between -mt-4 -ml-4 sm:flex-nowrap'>
        <div className='mt-4 ml-4'>
          <h3 className='flex flex-row items-center text-lg font-medium text-gray-900 leading-6'>
            <CircleCheck classCss={`h-5 w-5 text-green-800 mr-2`} /> watchio.com
          </h3>
          <p className='mt-1 text-sm text-green-800'>premium domain</p>
        </div>
        <div className='mt-4 ml-4'>
          <h3 className='font-medium text-gray-600 text-md leading-6'>One-off fee 3.17 $</h3>
          <div className='flex flex-row items-center'>
            <h3 className='text-sm font-medium text-gray-900 leading-6'>Welcome Offer</h3>
            <ExclamationCircle classCss={`h-4 w-4 text-red-900 ml-1 font-extrabold`} />
          </div>
          <p className='mt-1 text-sm font-bold text-blue-800'>1$/Year - for 1 year</p>
        </div>

        <div className='flex-shrink-0 mt-4 ml-4'>
          <button
            type='button'
            className='relative inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-900 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
            Add To Basket
          </button>
        </div>
      </div>
      <Disclosure className='flex flex-shrink-0'>
        {({ open }) => (
          <>
            <Disclosure.Button className='flex items-center mt-2 mb-4 text-gray-600 flex-start'>
              Details
              <ChevronDown classCss='ml-1 h-4 w-4 text-gray-600 ' />
            </Disclosure.Button>

            {/*
            Use the `Transition` + `open` render prop argument to add transitions.
          */}
            <Transition
              show={open}
              enter='transition duration-100 ease-out'
              enterFrom='transform scale-95 opacity-0'
              enterTo='transform scale-100 opacity-100'
              leave='transition duration-75 ease-out'
              leaveFrom='transform scale-100 opacity-100'
              leaveTo='transform scale-95 opacity-0'>
              {/*
              Don't forget to add `static` to your `Disclosure.Panel`!
            */}

              <Disclosure.Panel className='mb-5 text-black' static>
                There is Details of Domain
              </Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  )
}

export default DomainCard
