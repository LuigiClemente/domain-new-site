import CardSubDomain from './cardSubDomain/CardSubDomain'
import Header from '../header/Header'

const SubDomain = () => {
  return (
    <div className='flex flex-col items-center justify-center m-0 align-middle' style={{ position: 'relative' }}>
      <Header title={`Create Subdomain`} currentPosition={`friendly.io`} />
      <div style={{ position: 'relative', zIndex: '10', top: '-70px' }}>
        <CardSubDomain />
      </div>
    </div>
  )
}

export default SubDomain
