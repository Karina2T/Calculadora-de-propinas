import type { MenuItem, OrderItem } from "../types"
import { formatCurrency } from "../helper"



type OrderContentsProps = {
    order: OrderItem[],
    removeItem: (id: MenuItem['id']) => void
}



export default function OrderContents({order, removeItem} : OrderContentsProps){

    return(
        <div>
            <h2 className="font-black text-4xl">Consumo</h2>

            <div className="space-y-2 mt-10">
                {order.map( item => (
                        <div 
                        key={item.id} /*El Key, va en el primer elemento hijo, si no creamos un component*/
                        className=" flex justify-between items-center-safe border-t border-gray-200 py-5 last-of-type:border-b"

                        > 

                        <div>
                            <p className="text-lg">
                                {item.name} - {formatCurrency(item.price)}
                            </p>
                            
                            <p className="font-black">
                                Cantidad: {item.quantity} - {formatCurrency(item.quantity * item.price)}
                            </p>
                        </div>

                            <button
                              className="bg-teal-700 h-8 w-8 rounded-full text-white font-black"
                              onClick={() => removeItem(item.id) /*Llamamos a la funcion removeItem que viene del props y le pasamos el id del item*/}
                            >
                                X
                            </button>

                        </div>
                    ))}
            </div>

        </div>
    )
}