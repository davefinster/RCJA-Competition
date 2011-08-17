class Team
  include DataMapper::Resource

  property :id, Serial    # An auto-increment integer key
  property :name, String
  
end