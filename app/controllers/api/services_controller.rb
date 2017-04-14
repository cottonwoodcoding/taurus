class Api::ServicesController < ApplicationController
  before_action :set_service_category
  before_action :set_service, only: [:destroy]

  def create
    service = @service_category.services.new(service_params)
    if service.save
      render json: { service_category_id: @service_category.id, service: service }
    else
      failed_request(service)
    end
  end

  def destroy
    @service.destroy
  end
  
  private
    def set_service_category
      @service_category = ServiceCategory.find(params[:service_category_id])
    end

    def set_service
      @service = @service_category.services.find(params[:id])
    end

    def service_params
      params.require(:service).permit(:name, :description)
    end
end
