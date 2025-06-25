import {  useCallback } from 'react'
import { formatCurrency } from '../helper'
import type { OrderItem } from '../types'
import  useOrder  from '../hooks/useOrder'
import OrderSaved from './OrderSaved'



type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void
}

export default function OrderTotals({order, tip, placeOrder} : OrderTotalsProps) {
  const { orderSaved } = useOrder();

    const subtotalAmount = useCallback(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order])

    const tipAmount = useCallback(() => subtotalAmount() * tip, [tip, order])

    const totalAmount = useCallback(() => subtotalAmount() + tipAmount(), [tip, order])

    return(
        <> 
          <div className="space-y-3"> {/*Almacenara las cantidades*/}
            <h2 className="font-black text-2xl">Totales y Propina:</h2>

            <p>Subtotal a pagar: {""}
                <span className="font-bold">{formatCurrency(subtotalAmount())}</span>
            </p>

            <p>Propina: {""}
                <span className="font-bold">{formatCurrency(tipAmount())}</span>
            </p>

            <p>Total a pagar: {''}
                <span className="font-bold">{formatCurrency(totalAmount())}</span>
            </p>
          </div>

          <button
            className='w-full bg-teal-400 p-3 uppercase text-black font-bold mt-10 hover:bg-teal-300
            disabled:opacity-10 cursor-pointer'
            disabled={totalAmount() === 0}
            onClick={placeOrder}
          > {/*Almacenar la orden o reiniciar la orden*/}
            Guardar orden
          </button>

          {orderSaved && <OrderSaved />}
        </>

    )

}

// Este componente es para mostrar el total de la orden y el boton de pagar
