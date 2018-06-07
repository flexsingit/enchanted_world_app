# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180316213946) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "businesses", force: :cascade do |t|
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
    t.string   "yelp_id"
    t.string   "name"
    t.decimal  "latitude"
    t.decimal  "longitude"
    t.decimal  "rating"
    t.string   "price"
    t.integer  "review_count"
    t.string   "image_url"
    t.string   "category"
    t.string   "location"
    t.string   "meta_category"
    t.integer  "search_id"
    t.decimal  "distance"
    t.string   "yelp_url"
    t.string   "search_type"
    t.string   "remote_ip"
    t.string   "user_id"
  end

  create_table "settings", force: :cascade do |t|
    t.string   "user_id"
    t.string   "search_term"
    t.datetime "created_at",                       null: false
    t.datetime "updated_at",                       null: false
    t.boolean  "tawggle_on",  default: false
    t.string   "search_type", default: "unicorns"
  end

  create_table "users", force: :cascade do |t|
    t.string   "ip_address"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
