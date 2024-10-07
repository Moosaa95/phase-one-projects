import { useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { decrement, increment, incrementByAmount, reset, selectCount } from "./counterSlice"

export default function Counter() {
    const count = useAppSelector(selectCount)
    const dispatch = useAppDispatch()

    const [incrementAmount, setIncrementAmount] = useState<number>(0)


    return (
        <div className="flex flex-col items-center p-4 space-y-4 bg-gray-100 rounded-lg">
            <h1 className="text-3xl font-bold">Counter: {count}</h1>

            <div className="flex space-x-4">
                <button className="px-4 py-2 text-white bg-blue-500 rounded-lg"
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <button className="px-4 py-2 text-white bg-red-500 rounded-lg"
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>

                <button className="px-4 py-2 text-white bg-gray-500 rounded-lg"
                    onClick={() => dispatch(reset())}
                >
                    Reset
                </button>

                <div className="flex items-center space-x-2">
                    <input
                    type="number"
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(Number(e.target.value))}
                    className="p-2 border rounded-lg"
                    />
                    <button
                    className="px-4 py-2 text-white bg-green-500 rounded-lg"
                    onClick={() => dispatch(incrementByAmount(incrementAmount))}
                    >
                    Add Amount
                    </button>
                </div>
                
            </div>
        </div>
    )
}