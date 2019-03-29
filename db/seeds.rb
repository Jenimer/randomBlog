100.times do
  Post.create({
    author: Faker::JapaneseMedia::DragonBall.character,
    body: Faker::Movies::Ghostbusters.quote + ' ' + Faker::TvShows::MichaelScott.quote + ' ' + Faker::Movies::HarryPotter.quote + ' ' + Faker::Movies::StarWars.quote
  })
end



puts 'seeded bitches'