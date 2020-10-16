class MainBroadcastJob < ApplicationJob
  queue_as :default
  def perform(message)
    ActionCable.server.broadcast 'main_channel', message: message
  end
end
