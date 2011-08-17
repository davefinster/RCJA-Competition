require_relative 'user.rb'
require_relative 'team.rb'
require_relative 'soccer_game.rb'

DataMapper.finalize
DataMapper.setup(:default, "sqlite3://#{Dir.pwd}/rcja.sqlite3")
DataMapper.auto_upgrade!