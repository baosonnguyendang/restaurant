import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import '../styles/header.css'

const Header = () => {
    return (
        <div className='header'>
            <a href='./'>Home</a>
            <a href='./'>Gallery</a>
            <a href='./' className='order-online'><span>Order Online</span></a>
            <div className='cart'>
                <a href='./cart'>
                    <ShoppingCartIcon/>
                    <span> • </span>
                    <span>10000000000€</span>
                </a>
            </div>
        </div>
    )
}

export default (Header)