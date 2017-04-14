class ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken
  protect_from_forgery with: :exception
  skip_before_action :verify_authenticity_token

  def failed_request(model)
    render json: {errors: model.errors.full_messages.join(',')}, status: :unprocessable_entity
  end
end
