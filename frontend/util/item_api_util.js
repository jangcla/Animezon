export const fetchItems = () => (
    $.ajax({
        method: 'GET',
        url: `/api/items`,
        data: { data }
    })
)

export const fetchItem = itemId => (
    $.ajax({
        method: 'GET',
        url: `/api/items/${itemId}`
    })
)