//Este custom hook es para manejar el estado de la orden en la aplicacion 

import { useState } from "react"
import type { MenuItem, OrderItem } from '../types'



export default function useOrder() { /*Custome hook */
    //Aqui van los elementos del menu

//Generic <OrderItem[] solo afecta al valor del estado, osea el order no a la funcion serOrder que actualiza la UI>
    const [order, setOrder ] = useState<OrderItem[]>([])

    const [tip, setTip] = useState(0)

    const [orderSaved, setOrderSaved ] = useState(false)


    const MAX_ITEMS = 50; //Maximo de items que se pueden agregar a la orden


    //function para agregar items
    const addItem = (item: MenuItem) => {

        //si el item ya esta en el order, no lo agrego
        const itemExist = order.find(orderItem => orderItem.id === item.id)
        if(itemExist){

            if(itemExist.quantity >= MAX_ITEMS){
                {window.alert('No puedes agregar mas de 50 items')}
                return; //Si el item ya existe y la cantidad es mayor o igual a 10
            }

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
        setOrder(order.filter(item => item.id !== id ))
    }

    const placeOrder = () => {
        setOrderSaved(true); //Muestra el mensaje primero

        setTimeout(() => {
            setOrder([]);
            setOrderSaved(false)
            setTip(0)
        }, 3000)
    }


    return{
        order,
        tip,
        setTip,
        addItem,
        removeItem,//Exportamos la funcion para hacerlo disponible en otros componentes
        placeOrder,
        orderSaved,
        setOrderSaved
    }
}