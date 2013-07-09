require 'bundler/setup'

Bundler.require

get '/' do
  erb :index
end

post '/shop' do
  raise 'hi'

  'Thanks for your order'
end

