json.array! @service_categories do |sc|
  json.id sc.id
  json.name sc.name
  json.services sc.services do |s|
    json.id s.id
    json.name s.name
    json.description s.description
  end
end