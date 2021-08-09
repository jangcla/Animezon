export const fetchItems = () => (
    $.ajax({
        method: 'GET',
        url: `/api/items`,
    })
)
    
    export const fetchItem = itemId => (
        $.ajax({
            method: 'GET',
            url: `/api/items/${itemId}`
    })
)