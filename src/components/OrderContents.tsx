import type { OrderItem } from "../types"

type OrderContentsProps = {
    order: OrderItem[]
}


export default function OrderContents({order} : OrderContentsProps) {
    return(
        <div>
            <h2 className="font-black text-4xl">Consumo</h2>

            <div className="space-y-3 mt-5">
                {order.length === 0 ?
                 <p className="text-center">La orden esta vacia</p>
                : (
                    order.map( item => (
                    //En el caso que no creamos un component, El Key debe estar en el primer elemento hijo
                        <div key={item.id}>
                            <p>
                               
                                {item.name} - ${item.price} 
                            </p>
                        </div>
                    ))
                )
                }
            </div>
        </div>
    )
}