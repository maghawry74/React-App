import FlexCard from './FlexCard'
import HomeProductList from './HomeProductList'
import SponserList from './SponserList'
import Testmonials from './Testmonial'

export default function Home() {
  return (
    <div className="mb-[19rem]">
      <FlexCard />
      <HomeProductList />
      <Testmonials />
      <SponserList />
    </div>
  )
}
