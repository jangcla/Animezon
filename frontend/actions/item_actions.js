import * as itemUtil from '../util/item_api_util'

export const RECEIVE_ITEMS = 'RECEIVE_ITEMS';
export const RECEIVE_ITEM = "RECEIVE_ITEM";

export const receiveItems = items => ({
    type: RECEIVE_ITEMS,
    items
})

export const receiveItem = item => ({
    type: RECEIVE_ITEM,
    item
})

export const fetchItems = () => dispatch => (
    itemUtil.fetchItems()
        .then(items => dispatch(receiveItems(items)))
)

export const fetchItem = itemId => dispatch => (
    itemUtil.fetchItem(itemId)
        .then(item => dispatch(receiveItem(item)))
)