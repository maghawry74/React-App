import { NavLink } from 'react-router-dom'
import Testmonials from '../Home/Testmonial'
import { useState } from 'react'

export default function AboutUs() {
  const [active, SetActive] = useState('ABOUT US')
  return (
    <>
      <div class="w-full my-16 ">
        <div
          class="p-5 flex justify-center items-center"
          style={{
            backgroundImage: "url('../../../assets/imgs/2.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: '0dvw',
            height: '400px',
          }}
        >
          <h1 class="text-7xl text-center text-white">About US</h1>
        </div>
      </div>

      <div class="grid grid-col-6 mt-5 items-center justify-center mx-auto gap-10 w-4/5 text-center">
        <div class="col-start-1 col-end-3 lg:block sm:hidden">
          <img src="assets/imgs/1.jpg" alt="" />
        </div>
        <div class="lg:col-start-4 lg:col-end-6 text-center lg:mx-auto sm:col-start-1 sm:col-end-6">
          <div>
            <button
              class={`transition-all duration-500 px-10 py-5 sm:px-5 sm:py-2.5 ${
                active === 'ABOUT US' ? 'bg-black text-white' : 'bg-white text-black'
              }`}
              onClick={() => SetActive('ABOUT US')}
            >
              ABOUT US
            </button>
            <button
              class={`transition-all duration-500 px-10 py-5 sm:px-5 sm:py-2.5 ${
                active === 'Services' ? 'bg-black text-white' : 'bg-white text-black'
              }`}
              onClick={() => SetActive('Services')}
            >
              Services
            </button>
            <button
              class={`transition-all duration-500 px-10 py-5 sm:px-5 sm:py-2.5 ${
                active === 'Story' ? 'bg-black text-white' : 'bg-white text-black'
              }`}
              onClick={() => SetActive('Story')}
            >
              Story
            </button>
          </div>
          <div>
            <>
              <p class={` my-5 text-gray-600 ${active === 'ABOUT US' ? 'block' : 'hidden'}`}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat aliquid expedita
                incidunt dolore atque, adipisci quod voluptate, iusto iste minus quis architecto sed
                corporis! Dolore rem explicabo doloribus voluptatum sint totam quos ullam itaque
                atque recusandae hic similique adipisci illo quae
              </p>
              <p class={` my-5 text-gray-600 ${active === 'Services' ? 'block' : 'hidden'}`}>
                ipsam nesciunt facilis qui minus cumque, provident harum reiciendis laboriosam
                vitae! Provident optio placeat vel! Itaque beatae culpa ipsa quam reiciendis, labore
                vero quod soluta a expedita similique reprehenderit placeat amet impedit dicta eius
                id pariatur ullam, minus ea ex ut facere ad cumque asperiores!
              </p>
              <p class={` my-5 text-gray-600 ${active === 'Story' ? 'block' : 'hidden'}`}>
                dignissimos molestiae culpa perspiciatis, quibusdam illum atque consequuntur,
                asperiores assumenda aliquam, dolore iste necessitatibus eos ex. Molestiae obcaecati
                maiores quaerat nam, nemo aut beatae, ipsa impedit amet eaque quo cumque reiciendis.
                Quisquam recusandae, totam iste consequatur
              </p>
            </>
            <NavLink to="/" routerLinkActive="text-idngo-400">
              LEARN MORE
            </NavLink>
          </div>
        </div>
      </div>
      <Testmonials />
    </>
  )
}
