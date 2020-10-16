# need to restart server when file is changed
class MainChannel < ApplicationCable::Channel
  def subscribed
     stream_from "main_channel"
  end
  def unsubscribed
   
  end
  def receive(data)
    if (data.has_key?('message').present? && data.has_key?('username'))
      m = Message.new( user: data['username'],  :content => data['message'])
      m.save!
    end
  end
end