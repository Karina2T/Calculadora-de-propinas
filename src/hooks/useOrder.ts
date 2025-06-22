//Este custom hook es para manejar el estado de la orden en la aplicacion 

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
            const updatedOrder = order.map( orderItem => orderItem.id === item.id ?
            //creamos un nuevo array con .map() NO MUTATION.Encontrando cual es el id repetido
                {...orderItem, quantity: orderItem.quantity + 1} :
                orderItem
            )
            setOrder(updatedOrder)//Seteando la funcion con al variable updateOrder
        } else{
             const newItem = {...item, quantity: 1} //Crea un nuevo objeto
            setOrder([...order, newItem])
        }

    }

    //Funcion para eliminar items de la orden
    const removeItem = (id: MenuItem['id']) => {
        console.log("Eliminando item de la ordern")
    }


    return{
        order,
        addItem,
        removeItem //Exportamos la funcion para hacerlo disponible en otros componentes
    }
}