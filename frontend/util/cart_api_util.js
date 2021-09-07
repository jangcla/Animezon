export const createCart = cart => (
    $.ajax({
        method: 'POST',
        url: `/api/carts`,
        data: { cart }
    })
)

export const fetchCarts = () => (
    $.ajax({
        method: `GET`,
        url: `/api/carts`
    })
)

export const updateCart = cart => (
    $.ajax({
        method: 'PATCH',
        url: `/api/carts/${cart.id}`,
        data: { cart }
    })
)

export const deleteCart = cartId => (
    $.ajax({
        mehtod: `DELETE`,
        url: `/api/carts/${cartId}`
    })
)