import Header from './Header'
import { useRecoilState } from 'recoil'
import { cartState } from './atoms/cartState'
import ShoppingCartList from './ShoppingCartList'

export const ShoppingCart = () => {

    const [ cartItem, setCartItem ] = useRecoilState(cartState) 

    return (
        <div>
            <Header />

            <div>
                {cartItem.length <=0 
                ? <h1>Your cart is empty</h1>
                : cartItem.map(item => <ShoppingCartList key={item.id} data={item} />)
            }
            </div>
        </div>
    )
}


