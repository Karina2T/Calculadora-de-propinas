import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem,
    addItem: (item: MenuItem) => void
    //addItem?: () => void el ? quiere decir que le podemos pasar el prop o no 
}



export default function MenuItem({item, addItem} : MenuItemProps){
    return(
        <button
         className="border-2 rounded-xl border-teal-200 hover:bg-teal-200 w-full p-3 flex justify-between cursor-pointer"
         onClick={() => addItem(item)}
        >
         <p>{item.name}</p>
         <p className="font-black">${item.price}</p>
        </button>
    )
}