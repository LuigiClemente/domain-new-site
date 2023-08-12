import { useAppProvider } from '@/appProvider/AppProvider'
import { STEPS } from '../constant/data'
import Check from '../icons/Check'
import StepOne from './stepOne/StepOne'
import StepTwo from './stepTwo/StepTwo'

const steps = STEPS

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const StepsComponent = () => {
  const { currentStep } = useAppProvider()
  const showCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <StepOne />
      case 2:
        return <StepTwo />
    }
  }

  return (
    <div className='m-10 w-[50%]'>
      <nav aria-label='Progress' className='m-4'>
        <ol role='list' className='flex items-center'>
          {steps.map((step, stepIdx) => (
            <li key={step.name} className={classNames(stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : '', 'relative')}>
              {step.status === 'complete' ? (
                <>
                  <div className='absolute inset-0 flex items-center' aria-hidden='true'>
                    <div className='w-full bg-indigo-600 h-0.5' />
                  </div>
                  <a
                    href='#'
                    className='relative flex items-center justify-center w-8 h-8 bg-indigo-600 rounded-full hover:bg-indigo-900'>
                    <Check classCss={'w-4 h-4 text-white'} aria-hidden='true' />
                    <span className='sr-only'>{step.name}</span>
                  </a>
                </>
              ) : currentStep === 2 ? (
                <>
                  {/* step.status === 'current' || */}
                  <div className='absolute inset-0 flex items-center' aria-hidden='true'>
                    <div className='w-full bg-gray-200 h-0.5' />
                  </div>
                  <a
                    href='#'
                    className='relative flex items-center justify-center w-8 h-8 bg-white border-2 border-indigo-600 rounded-full'
                    aria-current='step'>
                    <span className='bg-indigo-600 rounded-full h-2.5 w-2.5' aria-hidden='true' />
                    <span className='sr-only'>{step.name}</span>
                  </a>
                </>
              ) : (
                <>
                  <div className='absolute inset-0 flex items-center' aria-hidden='true'>
                    <div className='w-full bg-gray-200 h-0.5' />
                  </div>
                  <a
                    href='#'
                    className='relative flex items-center justify-center w-8 h-8 bg-white border-2 border-gray-300 rounded-full group hover:border-gray-400'>
                    <span
                      className='bg-transparent rounded-full h-2.5 w-2.5 group-hover:bg-gray-300'
                      aria-hidden='true'
                    />
                    <span className='sr-only'>{step.name}</span>
                  </a>
                </>
              )}
            </li>
          ))}
        </ol>
      </nav>

      {showCurrentStep()}
    </div>
  )
}
export default StepsComponent
