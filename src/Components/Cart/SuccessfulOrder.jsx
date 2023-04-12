export default function SuccessfullOrder() {
  return (
    <div class="grid h-screen place-items-center">
      <div class="card text-center ">
        <div
          style={{
            borderRadius: '200px',
            height: '200px',
            width: '200px',
            background: '#eaeaea',
            margin: '0 auto',
          }}
        >
          <i class="checkmark SuccessfullOrder__i">✓</i>
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
