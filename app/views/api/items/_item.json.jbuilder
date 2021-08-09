json.extract! item, :id, :description, :name, :type_tag, :availability, :price
json.photoUrl url_for(item.photo)