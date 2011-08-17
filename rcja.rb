require 'sinatra'
require 'json'
require 'dm-core'
require 'dm-validations'
require 'dm-timestamps'
require  'dm-migrations'
require 'dm-sqlite-adapter'

require_relative 'models/models.rb'

get '/mobile' do
  erb :mobile
end

get '/soccer_games' do
  content_type :json
  {:soccer_games => [{
    :id => 1, :name => "meow"
  }]}.to_json
end