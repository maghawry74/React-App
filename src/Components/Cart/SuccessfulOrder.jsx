export default function SuccessfullOrder() {
  return (
    <div className="grid min-h-screen mb-[19rem] py-20 place-items-center">
      <div className="card text-center ">
        <div
          style={{
            borderRadius: '200px',
            height: '200px',
            width: '200px',
            background: '#eaeaea',
            margin: '0 auto',
          }}
        >
          <i className="checkmark SuccessfullOrder__i">✓</i>
        </div>
        <h1 className="font-bold text-xl">Success</h1>
        <p className="text-2xl">
          We received your purchase request;
          <br /> we'll be in touch shortly!
        </p>
      </div>
    </div>
  )
}
