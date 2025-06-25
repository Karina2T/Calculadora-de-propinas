import checkgreen2 from "../assets/checkgreen2.png"

export default function OrderSaved(){

  return (
    <>
     <div className="bg-teal-300 h-full p-20 rounded-lg">
          <div className="flex flex-col items-center justify-center h-full space-y-5">
            <p className="font-bold text-3xl text-center">Orden guardada correctamente</p>
            <img className='w-3xs' src={checkgreen2}/>
            <span className='text-xs'>*Si quieres hacer otra orden, dirijete al menu</span>
            <p className='font-bold text-2xl'>¡¡Gracias por tu compra!!</p>
          </div>
        </div>
    </>

  )
}


