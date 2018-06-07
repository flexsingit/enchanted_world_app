class VisitorsController < ApplicationController

  layout 'landing'

    def index
    @setting = @user.setting

    @choices = {
      'Unicorns' => 'unicorns',
      'Luxury' => 'luxury',
      'Discounts' => 'cheapo'
      # ,'Poop' => 'poop'
    }

    @categories = YELP_CATEGORIES
    # @categories = ['restaurant']

  end
end
