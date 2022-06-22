import * as purchaseUtil from '../util/purchase_api_util'

export const RECEIVE_PURCHASE = 'RECEIVE_PURCHASE';
export const RECEIVE_PURCHASES = 'RECEIVE_PURCHASES';
export const REMOVE_PURCHASE = 'REMOVE_PURCHASE';

export const receivePurchase = purchase => ({
    type: RECEIVE_PURCHASE,
    purchase
})

export const receivePurchases = purchases => ({
    type: RECEIVE_PURCHASE,
    purchases
})

export const removePurchase = purchaseId => ({
    type: REMOVE_PURCHASE,
    purchaseId
})

export const fetchPurchase = purchaseId => dispatch => (
    purchaseUtil.fetchPurchase(purchaseId)
        .then(purchase => dispatch(receivePurchase(purchase)))
)

export const fetchPurchases = () => dispatch => (
    purchaseUtil.fetchPurchases()
        .then(purchases => dispatch(receivePurchases(purchases)))
)

export const createPurchase = purchase => dispatch => (
    purchaseUtil.createPurchase(purchase)
        .then(madePurchase => dispatch(receivePurchase(madePurchase)))
)

export const updatePurchase = purchase => dispatch => (
    purchaseUtil.updatePurchase(purchase)
        .then(updatedPurchase => dispatch(receivePurchase(updatedPurchase)))
)

export const deletePurchase = purchaseId => dispatch => (
    purchaseUtil.deletePurchase(purchaseId)
        .then(purchase => dispatch(removePurchase(purchase.id)))
)