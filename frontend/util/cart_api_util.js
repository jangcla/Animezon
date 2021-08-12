export const createCart = cart => (
    $.ajax({
        method: 'POST',
        url: `/api/carts`,
        data: { cart }
    })
)

export const deleteCart = cartId => (
    $.ajax({
        mehtod: `DELETE`,
        url: `/api/carts/${cartId}`
    })
)