import Logo from './img/logo.png'
import { ShoppingCart } from "@phosphor-icons/react"
import { cartState } from './atoms/cartState'
import { useRecoilState } from 'recoil'

export default function Header(pizza) {
    
    const [cartItem] = useRecoilState(cartState)
    
    return (
        <header>
            <div className='sticky flex justify-between items-center bg-green-500 z-0'>
                <div className='flex items-center'>
                    <img src={Logo} alt='Logo' className='p-5 h-20'/> 
                    <p className='text-xl font-bold p-5 text-red-700'>HOT PIZZA</p>   
                </div>
                <div>
                    <button className='p-5 mr-5 text-gray-200 hover:text-red-700' onClick={pizza.toggleShow}>
                        <ShoppingCart size={32} />
                    </button>
                    <span className='absolute top-4 right-8 text-[13px] bg-red-600 h-[18px] w-[18px] rounded-full grid place-items-center text-white'>{cartItem.length}</span>
                </div>
            </div>
        </header>
    )
}
