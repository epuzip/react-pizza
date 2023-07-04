import data from './data.pizza'
import { useRecoilState } from 'recoil'
import { cartState } from './atoms/cartState'

export default function Content ({ pizza }) {

    const [ cartItem, setCartItem ] = useRecoilState(cartState)

    const addItemToCart = () => {
            // Проверяем есть ли такой товар уже в корзине
        if(cartItem.findIndex(value => value.id === pizza.id) === -1) {
            setCartItem(prevState => [...prevState, pizza])
        }
        else {
            setCartItem(prevState => {
                return prevState.map((item) => {
                    return item.id === pizza.id ? {...item, quantity: item.quantity + 1} : item
                })
            })
        }
    }
    return (
        <div>
            <h1 className='text-center text-3xl text-orange-800 p-5 font-bold'>Пиццы</h1>
                <section>
                    <div className='grid grid-cols-3 text-center'>
                        {data.map(pizza => {
                            return (
                                <ul key={pizza.id}
                                >
                                    <img src={pizza.img} alt='' className='bg-orange-100'/>
                                    <h1 className='p-3 text-xl'>{pizza.title}</h1>
                                    <p className='box-border h-12' >{pizza.description}</p>
                                    <div className='flex justify-center p-3'>
                                        <button className='text-base text-gray-100 bg-green-600 p-3 rounded shadow-sm' onClick={addItemToCart}>Добавить</button>
                                        <p className='p-3'>{pizza.price}</p>
                                    </div>
                                </ ul>
                            )
                        })}
                    </div>
                </section>
        </div>
    )
}
