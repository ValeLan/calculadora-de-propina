import { TMenuItem, TOrderItem } from "../types"
import { formatCurrency } from "../helpers/idenx"


type TOrderContentsProps = {
    order: TOrderItem[]
    removeItem: (id: TMenuItem['id']) => void
}
const OrderContents = ({ order, removeItem }: TOrderContentsProps) => {

    return (
        <div>
            <h2 className="font-black text-4xl">Consumo</h2>

            <div className="space-y-3 mt-10">
                {
                    order.map(item => (
                        <div key={item.id}
                            className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b"
                        >
                            <div>

                                <p className="text-lg">
                                    {item.name} - {formatCurrency(item.price)}
                                </p>
                                <p className="font-black">
                                    Cantidad: {item.quantity} - {item.price * item.quantity}
                                </p>

                            </div>

                            <button
                                className="bg-red-600 h-8 w-8 rounded-full text-white"
                                onClick={() => removeItem(item.id)}
                            >
                                X
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default OrderContents