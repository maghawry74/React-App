import Sponser from './Sponser'

export default function SponserList() {
  return (
    <div className="flex w-3/4 mx-auto justify-center gap-x-5 my-10">
      <Sponser image="assets/sponsers/client-1h.png" />
      <Sponser image="assets/sponsers/client-2h.png" />
      <Sponser image="assets/sponsers/client-3h.png" />
      <Sponser image="assets/sponsers/client-4h.png" />
      <Sponser image="assets/sponsers/client-5h.png" />
    </div>
  )
}
