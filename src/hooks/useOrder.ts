//Este custom hook es para manejar el estado de la orden en la aplicacion 

import { useState } from "react"
import type { MenuItem, OrderItem } from '../types'



export default function useOrder() { /*Custome hook */
    //Aqui van los elementos del menu

//Generic <OrderItem[] solo afecta al valor del estado, osea el order no a la funcion serOrder que actualiza la UI>
    const [order, setOrder ] = useState<OrderItem[]>([])

    const [tip, setTip] = useState(0)

    //Estado para mostrar el mensaje "Orden guardada"
    const [orderSavedView, setOrderSavedView] = useState(false)



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


    //Funcion que actualiza el estado del boton, para pasarlo a true caundo el User haga click en el boton
    const placeOrder = () => {
        setOrderSavedView(true); //Mostrar la vista de "Orden Guardada"

        setTimeout(() => {
            setOrder([]);  //Limpiar la orden
            setTip(0);     //Reiniciando la propina
            setOrderSavedView(false) //Ocultar la vista de exito
        }, 4000);  //Espera 2 segundo 
    }


    return{
        order,
        tip,
        setTip,
        addItem,
        removeItem,//Exportamos la funcion para hacerlo disponible en otros componentes
        placeOrder,
        orderSavedView,
        setOrderSavedView
    }
}