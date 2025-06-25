import type { Dispatch, SetStateAction } from "react";

const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
  {
    id: 'tip-0',
    value: .0,
    label: "0%"
  }
]

type TipPercentageFromProps = {
    setTip: Dispatch<SetStateAction<number>>,
    tip: number
}

export default function TipPercentageForm({setTip, tip}: TipPercentageFromProps) {
    return (
       <div>
         <h3 className="font-black text-2xl">Propina:</h3>



         <form>
            {tipOptions.map(tipOption => (
                <div key={tipOption.id} className="flex items-center gap-2">
                    <label htmlFor={tipOption.id}>{tipOption.label}</label>
                    <input 
                       id={tipOption.id}
                       type={"radio"}
                       name="tip"
                       value={tipOption.value}
                       onChange={ e => setTip(+e.target.value)}
                       checked={tipOption.value === tip} // Compara el valor de la propina con el valor del radio button
                    />
                </div>
            ))}

         </form>
       </div>
    )
}