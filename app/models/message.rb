class Message < ApplicationRecord
	after_create_commit { MainBroadcastJob.perform_later(self) }
end
