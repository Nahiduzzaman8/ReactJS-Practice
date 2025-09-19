export default function Card({ name, id, price,src }) {
  return (
    <div className="w-60 flex flex-col rounded-xl bg-black min-h-[19rem] ">
      <div>
        <img
          src={src}
          alt="test"
          className="object-cover object-center rounded-t-xl"
        />
      </div>
      <div className="flex flex-col py-3 px-3 pb-10">
        <div className="flex justify-between ">
          <h1 className="font-bold ">{name}</h1>          <h1>Price</h1>
        </div>
        <div className="flex  justify-between">
          <p>{id}</p>
          <p>{price}</p>
        </div>
      </div>
    </div>
  )
}
