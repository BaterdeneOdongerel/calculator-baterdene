class HomeController < ApplicationController
  def show
  	@msg = Message.all.last(10)
  	@user_name = generate_user_name @msg
  end

  def generate_user_name msg
  	nextid = 1
  	if (msg.count > 0 )
  		nextid = msg.last.id + 1
  	end	
  	(0..2).map { ('A'..'Z').to_a[rand(26)] }.join + "-" + (nextid).to_s
  end
end
