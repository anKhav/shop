import { v4 as uuidv4 } from 'uuid';

export const ProductsData = [
    {
        id:uuidv4(),
        img:'/img/blueShirt.jpg',
        name:'Blue Plain Shirt',
        price:49.00,
        best:true,
        new:true,
    },
    {
        id:uuidv4(),
        img:'/img/blueShirt.jpg',
        name:'Blue Plain Shirt',
        price:49.00,
        best:false,
        new:true,
    },
    {
        id:uuidv4(),
        img:'/img/blueShirt.jpg',
        name:'Blue Plain Shirt',
        price:49.00,
        best:false,
        new:true,
    },
    {
        id:uuidv4(),
        img:'/img/jeansJacket.jpg',
        name:'Denim Jacket',
        price:69.00,
        best:true,
        new:false,
    },
    {
        id:uuidv4(),
        img:'/img/outcast.jpg',
        name:'Outcast T-Shirt',
        price:19.00,
        best:true,
        new:false,
    },
    {
        id:uuidv4(),
        img:'/img/poloPlain.jpg',
        name:'Polo Plain Shirt',
        price:29.00,
        best:false,
        new:true,
    },
]