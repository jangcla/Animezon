@purchases.each do |purchase|
    json.set! purchase.id do
        json.partial! 'purchase', purchase: purchase
    end
end