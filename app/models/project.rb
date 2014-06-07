class Project < ActiveRecord::Base
	belongs_to :user
	has_attached_file :image

	validates :image, presence: true
	validates :description, presence: true
	validates :title, presence: true
end
