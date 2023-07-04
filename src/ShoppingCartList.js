import data from './data.pizza'

const ShoppingCartList = ({ data }) => {
    const { title, img, quantity, price } = data
    console.log (data)
    return (
        <div>
            <div>
                <img src={img} />
                <div>
                    <div> {title} </div>
                    <div>Количество: {quantity} </div>
                </div>

                <div>{price * quantity} ₽</div>
            </div>
        </div>
    )
}

export default ShoppingCartList;