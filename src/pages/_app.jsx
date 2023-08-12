import dynamic from 'next/dynamic'
import IframeFood from '../components/IframeFood/IframeFood'
import "../styles/index.css" 
// const DynamicIframeFood = dynamic(() => import('../components/IframeFood/IframeFood'), {
//   loading: () => <Spinner />,
// })

const DynamicIframeFood = dynamic(() => import('../components/IframeFood/IframeFood'))
export default function Page() {
  return (
      <IframeFood />
  )
}
