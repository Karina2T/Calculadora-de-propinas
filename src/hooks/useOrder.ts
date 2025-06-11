import { useState } from "react"
import type { OrderItem } from '../types'



export default function useOrder() { /*Custome hook */
    //Aqui van los elementos del menu
    const [order, setOrder ] = useState<OrderItem[]>([]) //Generic <OrderItem[]>

    const addItem = () => {
        console.log('agregando...')
    }

    return{
        addItem

    }
}