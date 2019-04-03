import React from 'react'
import {connect} from 'react-redux'

import CartItem from './CartItem'

import {
    navigate,
    deleteFromCart,
    updateCart} from '../actions'

class Cart extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            cart: props.cart
        }
    }
}