import { useContext } from 'react';

import classes from './mealItem.module.css'
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';

function MealItem(props){
    const cartCtx=useContext(CartContext);
    const price=`$${props.price.toFixed(2)}`;

    function addItemToCartHandler(amount){
        cartCtx.addItem({
            id: props.id,
            name:props.name,
            amount: amount,
            price: props.price
        });
    }

    return (
        <li>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
        <MealItemForm onAddToCart={addItemToCartHandler}/>
            </div>
        </li>
    )
}
export default MealItem;