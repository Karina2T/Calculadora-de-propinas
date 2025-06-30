import emptyCart from '../assets/emptyCart.png'

export default function EmptyOrder(){

    return(
        <>
        <div className="bg-teal-300 p-10 h-full grid items-center justify-items-center">
            <p className='text-4xl font-bold'>Ay no!</p> 
            <img className="w-3xs" src={emptyCart}/>
            <p className='text-2xl font-bold text-center'>Todavia no agregaste productos a la lista</p>
        </div>
        </>
    )
}