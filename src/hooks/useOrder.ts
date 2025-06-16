import { useState } from "react"
import type { MenuItem, OrderItem } from '../types'



export default function useOrder() { /*Custome hook */
    //Aqui van los elementos del menu

//Generic <OrderItem[] solo afecta al valor del estado, osea el order no a la funcion serOrder que actualiza la UI>
    const [order, setOrder ] = useState<OrderItem[]>([]) 


    //function para agregar items
    const addItem = (item: MenuItem) => {

        //si el item ya esta en el order, no lo agrego
        const itemExist = order.find(orderItem => orderItem.id === item.id)
        if(itemExist){
            console.log(`El elemento ${itemExist} ya existe`)
        }else{
            console.log(`Agregando ${itemExist}`)
        }



        
        const newItem = {...item, quantity: 1} //Crea un nuevo objeto
        setOrder([...order, newItem])
    }

    console.log(order)

    return{
        addItem

    }
}