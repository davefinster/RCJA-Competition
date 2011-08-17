class SoccerGame
  include DataMapper::Resource

  property :id, Serial    # An auto-increment integer key
  property :home_team_id, Integer
  property :away_team_id, Integer
  
  has 1, :home_team, "Team"
  has 1, :away_team, "Team"
  
end