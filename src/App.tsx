import MenuItem from "./components/MenuItems";
import OrderContents from './components/OrderContents'
import OrderSaved from "./components/OrderSaved";
import OrderTotals from './components/OrderTotals'
import TipPercentageForm from "./components/TipPercentageForm";
import EmptyOrder from "./components/EmptyOrder";
import { menuItems } from "./data/db"
import  useOrder  from './hooks/useOrder'



function App(){

  {/*Estado global/global state */}
  const { order, addItem, removeItem, tip, setTip, placeOrder, setOrderSavedView, orderSavedView} = useOrder() //Extraemos la funcion para usarlo en nuestros componentes
 
  return(
    <>
     <header className="bg-teal-400 py-5">
      <h1 className="text-center text-4xl font-black">Calculadora de propinas y consumo</h1>
     </header>


     <main className=" max-w-250 mx-auto py-20 grid md:grid-cols-2">
      <div className="p-5">
        <h2 className="text-4xl font-black">Menu</h2>

        <div className="space-y-2 mt-10"> {/*Componente padre y lo de abajo son componentes hijos */}

            {menuItems.map(item => (
              <MenuItem
              key={item.id}
              item={item}
              addItem={addItem}
              />
            ))}
        </div>
        
      </div>


      <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">

        {orderSavedView ? (
        <OrderSaved />
       ) : order.length > 0 ? (
          <>
            <OrderContents
              order={order}
              removeItem={removeItem}
            />

            <TipPercentageForm
              setTip={setTip}
              tip={tip}
            />

            <OrderTotals
              order={order}
              tip={tip}
              placeOrder={placeOrder}
            />
          </>
        ) : (
          <EmptyOrder />
        )}


      </div>


      

     </main>
    </>
  )
}

export default App;