import { useMemo } from "react"
import { TOrderItem } from "../types"
import { formatCurrency } from "../helpers/idenx"

type TOrderTotalsProps = {
    order: TOrderItem[]
    tip : number
    placeOrder: () => void
}
export default function OrderTotals({ order, tip, placeOrder }: TOrderTotalsProps) {

    const subtotalAmount = useMemo(() =>
        order.reduce((total, item) => total + (item.quantity * item.price), 0),
        [order])

    const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order])

    const TotalAmount = subtotalAmount + tipAmount
    return (
        <>
            <div className="space-y-3">
                <h2 className="font-black text-2xl"> Totales y Propinas:</h2>
                <p>
                    Subtotal a pagar:
                    <span className="font-bold"> {formatCurrency(subtotalAmount)}</span>
                </p>
                <p>
                    Propina:
                    <span className="font-bold"> {formatCurrency(tipAmount)}</span>
                </p>
                <p>
                    Total a pagar:
                    <span className="font-bold"> {formatCurrency(TotalAmount)}</span>
                </p>
            </div>
            <button 
                className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
                disabled={TotalAmount === 0}
                onClick={() => placeOrder()}
            >
                Guardar Orden
            </button>
        </>
    )
}
