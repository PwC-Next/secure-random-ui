class HashesController < ApplicationController
  def index
  end

  def get_hashes
    num_strings = params['num_strings'].to_i.abs
    hash_strings_response = HTTParty.get(
      "https://secure-random.appspot.com/generate/strings?num_strings=#{num_strings}"
    )
    render json: hash_strings_response.as_json
  end
end
