class User
  include DataMapper::Resource

  property :id, Serial    # An auto-increment integer key
  property :first_name, String
  property :last_name, String
  property :username, String
  property :encrypted_password, String
  property :salt, String
  
end