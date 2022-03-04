export const createPurchase = purchase => (
    $.ajax({
        method: 'POST',
        url: `/api/purchases`,
        data: { purchase }
    })
)

export const fetchPurchase = (purchaseId) => (
    $.ajax({
        method: 'GET',
        url: `/api/purchases/${purchaseId}`
    })
)

export const fetchPurchases = () => (
    $.ajax({
        method: 'GET',
        url: `api/purchases`
    })
)

export const updatePurchase = (purchase) => (
    $.ajax({
        method: 'PATCH',
        url: `api/purchases/${purchase.id}`,
        data: { purchase }
    })
)

export const deletePurchase = (purchaseId) => (
    $.ajax({
        method: 'DELETE', 
        url: `api/purchases/${purchaseId}`
    })
)