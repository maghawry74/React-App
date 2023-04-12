import { Splide, SplideSlide } from '@splidejs/react-splide'

export default function Testmonials() {
  return (
      <div className="bg-gray-200 p-20">
        <h1 className="text-center text-3xl my-5">WHAT THEY’RE SAYING</h1>
        <Splide
          options={{
            perMove: 1,
            perPage: 1,
            classNamees: {
              page: 'hidden',
            },
          }}
          className=" w-4/5 mx-auto my-5 p-10"
        >
          <SplideSlide>
            <div className=" flex flex-col gap-5 text-center transition-all ease-out duration-700">
              <p className="text-xl text-center w-3/4 mx-auto">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum a nulla magni fugit
                recusandae delectus, dolorum illum minima quos corporis placeat cumque libero quod
                voluptates distinctio ducimus neque rerum alias.
              </p>
              <h2 className="font-bold text-base">MASON ROBERSON</h2>
              <h2 className="font-bold">Analyst</h2>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className=" flex flex-col gap-5 text-center transition-all ease-out duration-700">
              <p className="text-xl text-center w-3/4 mx-auto">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum a nulla magni fugit
                recusandae delectus, dolorum illum minima quos corporis placeat cumque libero quod
                voluptates distinctio ducimus neque rerum alias.
              </p>
              <h2 className="font-bold text-base">MASON ROBERSON</h2>
              <h2 className="font-bold">Analyst</h2>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="  flex flex-col gap-5 text-center transition-all ease-out duration-700">
              <p className="text-xl text-center w-3/4 mx-auto">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum a nulla magni fugit
                recusandae delectus, dolorum illum minima quos corporis placeat cumque libero quod
                voluptates distinctio ducimus neque rerum alias.
              </p>
              <h2 className="font-bold text-base">MASON ROBERSON</h2>
              <h2 className="font-bold">Analyst</h2>
            </div>
          </SplideSlide>
        </Splide>
      </div>
  )
}
