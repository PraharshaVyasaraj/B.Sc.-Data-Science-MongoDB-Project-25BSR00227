use mongoProjectDB

// ==========================================
// B.Sc. Data Science MongoDB Project
// K Praharsha | 25BSR00227
// MongoDB_Common_Problems_1_to_30.js
// ==========================================

// Problem 1: Coffee Shop Menu System
db.menu.drop()
db.menu.insertOne({ item_id: 1, name: "Espresso", category: "Coffee", price: 150, availability: true })
db.menu.insertMany([
  { item_id: 2, name: "Latte", category: "Coffee", price: 200, availability: true },
  { item_id: 3, name: "Green Tea", category: "Tea", price: 120, availability: false },
  { item_id: 4, name: "Blueberry Muffin", category: "Snack", price: 180, availability: true },
  { item_id: 5, name: "Iced Americano", category: "Coffee", price: 170, availability: true },
  { item_id: 6, name: "Chocolate Cookie", category: "Snack", price: 80, availability: false }
])
db.menu.find({ availability: true })
db.menu.find({}, { name: 1, price: 1, _id: 0 })
db.menu.deleteOne({ item_id: 3 })

// Problem 2: Contact Book System
db.contacts.drop()
db.contacts.insertOne({ contact_id: 1, first_name: "John", last_name: "Doe", phone: "9876543210", email: "john@test.com", city: "Mumbai" })
db.contacts.insertMany([
  { contact_id: 2, first_name: "Alice", last_name: "Smith", phone: "9876543211", email: "alice@test.com", city: "Delhi" },
  { contact_id: 3, first_name: "Bob", last_name: "Johnson", phone: "9876543212", email: "bob@test.com", city: "Mumbai" },
  { contact_id: 4, first_name: "Raj", last_name: "Patel", phone: "9876543213", email: "raj@test.com", city: "Pune" },
  { contact_id: 5, first_name: "Sara", last_name: "Khan", phone: "9876543214", email: "sara@test.com", city: "Mumbai" },
  { contact_id: 6, first_name: "Mike", last_name: "Davis", phone: "9876543215", email: "mike@test.com", city: "Chennai" }
])
db.contacts.find({ city: "Mumbai" })
db.contacts.find({}, { first_name: 1, last_name: 1, phone: 1, _id: 0 })
db.contacts.deleteOne({ contact_id: 6 })

// Problem 3: To-Do List Manager
db.tasks.drop()
db.tasks.insertOne({ task_id: 1, title: "Learn MongoDB", description: "Practice queries", due_date: new Date("2024-05-10"), priority: "High", is_completed: false })
db.tasks.insertMany([
  { task_id: 2, title: "Math Assignment", description: "Calculus", due_date: new Date("2024-05-15"), priority: "Medium", is_completed: false },
  { task_id: 3, title: "Groceries", description: "Milk, Eggs", due_date: new Date("2024-05-08"), priority: "Low", is_completed: true },
  { task_id: 4, title: "Python Project", description: "Data cleaning", due_date: new Date("2024-05-20"), priority: "High", is_completed: false },
  { task_id: 5, title: "Call Parents", description: "Weekly catchup", due_date: new Date("2024-05-09"), priority: "Medium", is_completed: false },
  { task_id: 6, title: "Gym", description: "Cardio", due_date: new Date("2024-05-09"), priority: "Low", is_completed: true }
])
db.tasks.find({ is_completed: false })
db.tasks.find({}, { title: 1, due_date: 1, _id: 0 })
db.tasks.deleteOne({ task_id: 6 })

// Problem 4: Expense Tracker System
db.expenses.drop()
db.expenses.insertOne({ expense_id: 1, category: "Food", amount: 300, date: new Date("2024-05-01"), payment_method: "UPI", note: "Lunch" })
db.expenses.insertMany([
  { expense_id: 2, category: "Transport", amount: 600, date: new Date("2024-05-02"), payment_method: "Card", note: "Cab" },
  { expense_id: 3, category: "Entertainment", amount: 1200, date: new Date("2024-05-03"), payment_method: "Cash", note: "Movie" },
  { expense_id: 4, category: "Bills", amount: 2000, date: new Date("2024-05-04"), payment_method: "UPI", note: "Electricity" },
  { expense_id: 5, category: "Food", amount: 450, date: new Date("2024-05-05"), payment_method: "UPI", note: "Dinner" },
  { expense_id: 6, category: "Transport", amount: 100, date: new Date("2024-05-06"), payment_method: "Cash", note: "Bus" }
])
db.expenses.find({ amount: { $gt: 500 } })
db.expenses.find({}, { category: 1, amount: 1, date: 1, _id: 0 })
db.expenses.deleteOne({ expense_id: 6 })

// Problem 5: Movie Watchlist System
db.watchlist.drop()
db.watchlist.insertOne({ movie_id: 1, title: "Inception", genre: "Sci-Fi", release_year: 2010, imdb_rating: 8.8, watched: true })
db.watchlist.insertMany([
  { movie_id: 2, title: "The Dark Knight", genre: "Action", release_year: 2008, imdb_rating: 9.0, watched: false },
  { movie_id: 3, title: "Interstellar", genre: "Sci-Fi", release_year: 2014, imdb_rating: 8.7, watched: false },
  { movie_id: 4, title: "Parasite", genre: "Thriller", release_year: 2019, imdb_rating: 8.5, watched: true },
  { movie_id: 5, title: "Avengers", genre: "Action", release_year: 2012, imdb_rating: 8.0, watched: false },
  { movie_id: 6, title: "Joker", genre: "Drama", release_year: 2019, imdb_rating: 8.4, watched: false }
])
db.watchlist.find({ watched: false })
db.watchlist.find({}, { title: 1, genre: 1, imdb_rating: 1, _id: 0 })
db.watchlist.deleteOne({ movie_id: 6 })

// Problem 6: Student Hostel Room Allotment
db.hostel.drop()
db.hostel.insertOne({ student_id: 101, name: "Rahul", room_number: 10, block_name: "A", bed_number: 1, check_in_date: new Date("2023-08-01") })
db.hostel.insertMany([
  { student_id: 102, name: "Amit", room_number: 12, block_name: "A", bed_number: 2, check_in_date: new Date("2023-08-02") },
  { student_id: 103, name: "Neha", room_number: 20, block_name: "B", bed_number: 1, check_in_date: new Date("2023-08-03") },
  { student_id: 104, name: "Priya", room_number: 25, block_name: "B", bed_number: 2, check_in_date: new Date("2023-08-04") },
  { student_id: 105, name: "Rohan", room_number: 15, block_name: "A", bed_number: 1, check_in_date: new Date("2023-08-05") },
  { student_id: 106, name: "Karan", room_number: 30, block_name: "C", bed_number: 1, check_in_date: new Date("2023-08-06") }
])
db.hostel.find({ block_name: "A" })
db.hostel.find({}, { name: 1, room_number: 1, block_name: 1, _id: 0 })
db.hostel.deleteOne({ student_id: 106 })

// Problem 7: Parking Lot Management
db.parking.drop()
db.parking.insertOne({ slot_id: 1, floor: 1, vehicle_type: "Car", is_occupied: true, vehicle_number: "MH12AB1234" })
db.parking.insertMany([
  { slot_id: 2, floor: 1, vehicle_type: "Bike", is_occupied: false, vehicle_number: null },
  { slot_id: 3, floor: 2, vehicle_type: "Car", is_occupied: true, vehicle_number: "MH14XY5678" },
  { slot_id: 4, floor: 2, vehicle_type: "Car", is_occupied: false, vehicle_number: null },
  { slot_id: 5, floor: 3, vehicle_type: "Bike", is_occupied: true, vehicle_number: "DL01ZZ9999" },
  { slot_id: 6, floor: 3, vehicle_type: "Bike", is_occupied: false, vehicle_number: null }
])
db.parking.find({ is_occupied: false })
db.parking.find({}, { slot_id: 1, floor: 1, vehicle_type: 1, _id: 0 })
db.parking.deleteOne({ slot_id: 6 })

// Problem 8: Gift Card System
db.giftcards.drop()
db.giftcards.insertOne({ card_id: 1, recipient_name: "Aarav", sender_name: "Ravi", amount: 1000, purchase_date: new Date("2024-01-10"), expiry_date: new Date("2025-01-10"), is_used: false })
db.giftcards.insertMany([
  { card_id: 2, recipient_name: "Sita", sender_name: "Gita", amount: 500, purchase_date: new Date("2024-02-15"), expiry_date: new Date("2025-02-15"), is_used: false },
  { card_id: 3, recipient_name: "John", sender_name: "Doe", amount: 2000, purchase_date: new Date("2023-05-20"), expiry_date: new Date("2024-05-20"), is_used: true },
  { card_id: 4, recipient_name: "Emma", sender_name: "Liam", amount: 1500, purchase_date: new Date("2024-03-05"), expiry_date: new Date("2026-03-05"), is_used: false },
  { card_id: 5, recipient_name: "Noah", sender_name: "Mia", amount: 3000, purchase_date: new Date("2023-11-11"), expiry_date: new Date("2024-11-11"), is_used: true },
  { card_id: 6, recipient_name: "Paul", sender_name: "Sam", amount: 250, purchase_date: new Date("2024-04-01"), expiry_date: new Date("2025-04-01"), is_used: false }
])
db.giftcards.find({ is_used: false, expiry_date: { $gt: new Date() } })
db.giftcards.find({}, { recipient_name: 1, amount: 1, expiry_date: 1, _id: 0 })
db.giftcards.deleteOne({ card_id: 6 })

// Problem 9: Courier Parcel Tracker
db.parcels.drop()
db.parcels.insertOne({ parcel_id: 1, sender_name: "Raj", receiver_name: "Simran", weight: 2.5, shipping_cost: 150, booking_date: new Date("2024-05-01"), delivery_status: "Shipped" })
db.parcels.insertMany([
  { parcel_id: 2, sender_name: "Amit", receiver_name: "Neha", weight: 1.0, shipping_cost: 80, booking_date: new Date("2024-05-05"), delivery_status: "Pending" },
  { parcel_id: 3, sender_name: "Vikram", receiver_name: "Rohan", weight: 5.0, shipping_cost: 300, booking_date: new Date("2024-04-20"), delivery_status: "Delivered" },
  { parcel_id: 4, sender_name: "Sara", receiver_name: "Ali", weight: 0.5, shipping_cost: 50, booking_date: new Date("2024-05-06"), delivery_status: "Pending" },
  { parcel_id: 5, sender_name: "John", receiver_name: "Doe", weight: 3.2, shipping_cost: 200, booking_date: new Date("2024-05-02"), delivery_status: "Shipped" },
  { parcel_id: 6, sender_name: "Emma", receiver_name: "Liam", weight: 1.5, shipping_cost: 100, booking_date: new Date("2024-05-07"), delivery_status: "Pending" }
])
db.parcels.find({ delivery_status: "Pending" })
db.parcels.find({}, { sender_name: 1, receiver_name: 1, shipping_cost: 1, _id: 0 })
db.parcels.deleteOne({ parcel_id: 6 })

// Problem 10: Fitness Workout Logger
db.workouts.drop()
db.workouts.insertOne({ workout_id: 1, exercise_name: "Pushups", duration_minutes: 15, calories_burned: 100, date: new Date("2024-05-01"), intensity: "Medium" })
db.workouts.insertMany([
  { workout_id: 2, exercise_name: "Running", duration_minutes: 45, calories_burned: 400, date: new Date("2024-05-02"), intensity: "High" },
  { workout_id: 3, exercise_name: "Yoga", duration_minutes: 60, calories_burned: 200, date: new Date("2024-05-03"), intensity: "Low" },
  { workout_id: 4, exercise_name: "Deadlifts", duration_minutes: 30, calories_burned: 250, date: new Date("2024-05-04"), intensity: "High" },
  { workout_id: 5, exercise_name: "Cycling", duration_minutes: 40, calories_burned: 300, date: new Date("2024-05-05"), intensity: "Medium" },
  { workout_id: 6, exercise_name: "Planks", duration_minutes: 10, calories_burned: 50, date: new Date("2024-05-06"), intensity: "Low" }
])
db.workouts.find({ intensity: "High" })
db.workouts.find({}, { exercise_name: 1, duration_minutes: 1, calories_burned: 1, _id: 0 })
db.workouts.deleteOne({ workout_id: 6 })

// Problem 11: Subscription Management System
db.subscriptions.drop()
db.subscriptions.insertMany([
  { sub_id: 1, user_name: "Alice", plan_type: "Basic", monthly_fee: 199, start_date: new Date("2024-01-01"), renewal_date: new Date("2025-01-01"), is_active: true },
  { sub_id: 2, user_name: "Bob", plan_type: "Premium", monthly_fee: 599, start_date: new Date("2023-06-01"), renewal_date: new Date("2024-06-01"), is_active: true },
  { sub_id: 3, user_name: "Charlie", plan_type: "Standard", monthly_fee: 399, start_date: new Date("2022-05-15"), renewal_date: new Date("2024-12-31"), is_active: false },
  { sub_id: 4, user_name: "David", plan_type: "Basic", monthly_fee: 199, start_date: new Date("2024-02-10"), renewal_date: new Date("2025-02-10"), is_active: true },
  { sub_id: 5, user_name: "Eve", plan_type: "Premium", monthly_fee: 599, start_date: new Date("2024-03-20"), renewal_date: new Date("2025-03-20"), is_active: true }
])
db.subscriptions.find({ is_active: true, plan_type: "Premium" })
db.subscriptions.updateMany({ plan_type: "Basic" }, { $inc: { monthly_fee: 100 } })
db.subscriptions.deleteMany({ is_active: false, renewal_date: { $lt: new Date("2025-01-01") } })
db.subscriptions.find({}, { user_name: 1, plan_type: 1, monthly_fee: 1, _id: 0 }).sort({ monthly_fee: -1 })

// Problem 12: Employee Attendance Tracker
db.attendance.drop()
db.attendance.insertMany([
  { record_id: 1, emp_name: "John", department: "IT", date: new Date("2024-05-01"), status: "Present", check_in_time: "09:00" },
  { record_id: 2, emp_name: "Sara", department: "IT", date: new Date("2024-05-01"), status: "Absent", check_in_time: null },
  { record_id: 3, emp_name: "Mike", department: "HR", date: new Date("2023-12-15"), status: "Leave", check_in_time: null },
  { record_id: 4, emp_name: "Emma", department: "Finance", date: new Date("2024-05-01"), status: "Present", check_in_time: "09:15" },
  { record_id: 5, emp_name: "Raj", department: "IT", date: new Date("2024-05-02"), status: "Present", check_in_time: "08:55" }
])
db.attendance.find({ status: "Absent", department: "IT" })
db.attendance.updateMany({ check_in_time: { $ne: null } }, { $set: { status: "Present" } })
db.attendance.deleteMany({ date: { $lt: new Date("2024-01-01") }, status: "Leave" })
db.attendance.find({ status: "Present" }).sort({ date: 1 })

// Problem 13: Online Polling System
db.polls.drop()
db.polls.insertMany([
  { poll_id: 1, question: "Best DB?", options: ["MongoDB", "MySQL", "PostgreSQL"], votes: [150, 100, 120], created_date: new Date("2024-01-10"), end_date: new Date("2025-01-10"), is_active: true },
  { poll_id: 2, question: "Best Language?", options: ["Python", "Java", "C++", "JS"], votes: [200, 150, 90, 180], created_date: new Date("2022-05-01"), end_date: new Date("2022-12-31"), is_active: true },
  { poll_id: 3, question: "Remote Work?", options: ["Yes", "No"], votes: [500, 50], created_date: new Date("2024-05-01"), end_date: new Date("2024-12-31"), is_active: true },
  { poll_id: 4, question: "Favorite OS?", options: ["Windows", "Mac", "Linux", "Other"], votes: [300, 250, 100, 20], created_date: new Date("2022-01-01"), end_date: new Date("2022-06-01"), is_active: false },
  { poll_id: 5, question: "Next feature?", options: ["Dark Mode", "Offline Support"], votes: [400, 350], created_date: new Date("2024-05-05"), end_date: new Date("2024-05-20"), is_active: true }
])
db.polls.find({ is_active: true, end_date: { $gt: new Date() } })
db.polls.updateMany({ end_date: { $lt: new Date() } }, { $set: { is_active: false } })
db.polls.deleteMany({ created_date: { $lt: new Date("2023-01-01") }, is_active: false })
db.polls.find({ $expr: { $gt: [{ $size: "$options" }, 3] } })

// Problem 14: Vehicle Service Center System
db.service.drop()
db.service.insertMany([
  { service_id: 1, customer_name: "Amit", vehicle_number: "MH12AB1234", service_type: "Oil Change", service_date: new Date("2025-05-10"), cost: 1500, status: "Scheduled" },
  { service_id: 2, customer_name: "Priya", vehicle_number: "DL01XY9876", service_type: "Repair", service_date: new Date("2026-07-15"), cost: 5000, status: "InProgress" },
  { service_id: 3, customer_name: "Raj", vehicle_number: "KA05ZZ5555", service_type: "Inspection", service_date: new Date("2024-12-01"), cost: 400, status: "Scheduled" },
  { service_id: 4, customer_name: "Neha", vehicle_number: "TS09AA1111", service_type: "Repair", service_date: new Date("2024-10-20"), cost: 8000, status: "Completed" },
  { service_id: 5, customer_name: "Karan", vehicle_number: "MH14BB2222", service_type: "Oil Change", service_date: new Date("2024-11-15"), cost: 450, status: "Completed" }
])
db.service.find({ status: "InProgress", service_date: { $lt: new Date("2026-08-01") } })
db.service.updateMany({ service_date: { $lt: new Date("2025-01-01") } }, { $set: { status: "Completed" } })
db.service.deleteMany({ status: "Completed", cost: { $lt: 500 } })
db.service.find({}, { customer_name: 1, service_type: 1, cost: 1, _id: 0 }).sort({ cost: -1 })

// Problem 15: Book Reading Challenge Tracker
db.reading.drop()
db.reading.insertMany([
  { record_id: 1, member_name: "Alice", book_title: "Dune", genre: "Sci-Fi", pages_read: 150, total_pages: 500, start_date: new Date("2024-01-10"), completion_date: null, is_completed: false },
  { record_id: 2, member_name: "Bob", book_title: "1984", genre: "Fiction", pages_read: 328, total_pages: 328, start_date: new Date("2024-02-01"), completion_date: new Date("2024-02-15"), is_completed: false },
  { record_id: 3, member_name: "Charlie", book_title: "Sapiens", genre: "History", pages_read: 50, total_pages: 450, start_date: new Date("2022-12-01"), completion_date: null, is_completed: false },
  { record_id: 4, member_name: "David", book_title: "The Hobbit", genre: "Fiction", pages_read: 310, total_pages: 310, start_date: new Date("2024-03-05"), completion_date: new Date("2024-03-20"), is_completed: true },
  { record_id: 5, member_name: "Eve", book_title: "Atomic Habits", genre: "Self-Help", pages_read: 120, total_pages: 320, start_date: new Date("2024-04-10"), completion_date: null, is_completed: false }
])
db.reading.find({ is_completed: false, pages_read: { $gt: 100 } })
db.reading.updateMany({ completion_date: { $ne: null } }, { $set: { is_completed: true } })
db.reading.deleteMany({ start_date: { $lt: new Date("2023-01-01") }, is_completed: false })
db.reading.find({ genre: "Fiction", is_completed: true })

// Problem 16: Pharmacy Prescription Tracker
db.prescriptions.drop()
db.prescriptions.insertMany([
  { prescription_id: 1, patient_name: "John", doctor_name: "Dr. Smith", medicine_name: "Paracetamol", dosage: "500mg", issue_date: new Date("2024-05-01"), expiry_date: new Date("2025-05-01"), status: "Active" },
  { prescription_id: 2, patient_name: "Sara", doctor_name: "Dr. Adams", medicine_name: "Amoxicillin", dosage: "250mg", issue_date: new Date("2023-10-15"), expiry_date: new Date("2024-01-15"), status: "Active" },
  { prescription_id: 3, patient_name: "Mike", doctor_name: "Dr. Lee", medicine_name: "Ibuprofen", dosage: "400mg", issue_date: new Date("2023-05-20"), expiry_date: new Date("2023-11-20"), status: "Fulfilled" },
  { prescription_id: 4, patient_name: "Emma", doctor_name: "Dr. Smith", medicine_name: "Cetirizine", dosage: "10mg", issue_date: new Date("2024-04-10"), expiry_date: new Date("2025-04-10"), status: "Active" },
  { prescription_id: 5, patient_name: "Raj", doctor_name: "Dr. Patel", medicine_name: "Vitamin C", dosage: "1000mg", issue_date: new Date("2024-01-01"), expiry_date: new Date("2024-05-01"), status: "Expired" }
])
db.prescriptions.find({ status: "Active", expiry_date: { $gt: new Date() } })
db.prescriptions.updateMany({ expiry_date: { $lt: new Date() } }, { $set: { status: "Expired" } })
db.prescriptions.deleteMany({ status: "Fulfilled", issue_date: { $lt: new Date("2024-01-01") } })
db.prescriptions.find({}, { patient_name: 1, medicine_name: 1, status: 1, _id: 0 }).sort({ issue_date: -1 })

// Problem 17: Cab Ride Booking System
db.rides.drop()
db.rides.insertMany([
  { ride_id: 1, rider_name: "Aman", driver_name: "Ramesh", pickup_location: "Station", drop_location: "Airport", ride_date: new Date(), distance_km: 15, fare: 450, ride_status: "Requested" },
  { ride_id: 2, rider_name: "Priya", driver_name: "Suresh", pickup_location: "Mall", drop_location: "Home", ride_date: new Date("2024-05-15"), distance_km: 5, fare: 150, ride_status: "Completed" },
  { ride_id: 3, rider_name: "Karan", driver_name: "Vikram", pickup_location: "Office", drop_location: "Gym", ride_date: new Date("2024-04-20"), distance_km: 12, fare: 350, ride_status: "Cancelled" },
  { ride_id: 4, rider_name: "Neha", driver_name: "Anil", pickup_location: "Park", drop_location: "Cafe", ride_date: new Date(), distance_km: 3, fare: 100, ride_status: "Requested" },
  { ride_id: 5, rider_name: "Rahul", driver_name: "Raj", pickup_location: "Hotel", drop_location: "Museum", ride_date: new Date("2024-05-10"), distance_km: 20, fare: 600, ride_status: "Completed" }
])
db.rides.find({ ride_status: "Requested", ride_date: { $gte: new Date(new Date().setHours(0,0,0,0)) } })
db.rides.updateMany({ drop_location: { $ne: null } }, { $set: { ride_status: "Completed" } })
db.rides.deleteMany({ ride_status: "Cancelled", ride_date: { $lt: new Date("2024-06-01") } })
db.rides.find({ distance_km: { $gt: 10 }, fare: { $gt: 300 } })

// Problem 18: Gym Equipment Maintenance Tracker
db.gym.drop()
db.gym.insertMany([
  { equip_id: 1, equip_name: "Treadmill", category: "Cardio", purchase_date: new Date("2020-01-01"), last_maintenance_date: new Date("2024-01-01"), next_maintenance_date: new Date("2024-07-01"), condition: "Good" },
  { equip_id: 2, equip_name: "Bench Press", category: "Strength", purchase_date: new Date("2021-05-10"), last_maintenance_date: new Date("2023-11-15"), next_maintenance_date: new Date("2024-05-15"), condition: "NeedsService" },
  { equip_id: 3, equip_name: "Cycle", category: "Cardio", purchase_date: new Date("2019-08-20"), last_maintenance_date: new Date("2023-12-01"), next_maintenance_date: new Date("2024-06-01"), condition: "OutOfOrder" },
  { equip_id: 4, equip_name: "Dumbbells", category: "Strength", purchase_date: new Date("2022-01-10"), last_maintenance_date: new Date("2024-04-10"), next_maintenance_date: new Date("2024-10-10"), condition: "Good" },
  { equip_id: 5, equip_name: "Rower", category: "Cardio", purchase_date: new Date("2018-12-15"), last_maintenance_date: new Date("2023-10-01"), next_maintenance_date: new Date("2024-04-01"), condition: "OutOfOrder" }
])
db.gym.find({ condition: { $in: ["NeedsService", "OutOfOrder"] } })
db.gym.updateMany({ last_maintenance_date: { $gt: new Date("2025-01-01") } }, { $set: { condition: "Good" } })
db.gym.deleteMany({ purchase_date: { $lt: new Date("2015-01-01") }, condition: "OutOfOrder" })
db.gym.find().sort({ next_maintenance_date: 1 })

// Problem 19: Online Course Review System
db.reviews.drop()
db.reviews.insertMany([
  { review_id: 1, course_name: "MongoDB Basics", student_name: "Alice", rating: 5, review_text: "Perfect", review_date: new Date("2024-05-01"), likes_count: 25, is_verified_purchase: true },
  { review_id: 2, course_name: "Python Pro", student_name: "Bob", rating: 4, review_text: "Good", review_date: new Date("2024-04-15"), likes_count: 12, is_verified_purchase: false },
  { review_id: 3, course_name: "SQL Expert", student_name: "Charlie", rating: 2, review_text: "Boring", review_date: new Date("2023-12-10"), likes_count: 5, is_verified_purchase: true },
  { review_id: 4, course_name: "Data Science 101", student_name: "David", rating: 5, review_text: "Helpful", review_date: new Date("2024-05-10"), likes_count: 30, is_verified_purchase: true },
  { review_id: 5, course_name: "Intro to Java", student_name: "Eve", rating: 1, review_text: "Waste", review_date: new Date("2023-11-01"), likes_count: 2, is_verified_purchase: false }
])
db.reviews.find({ rating: { $gt: 4 }, likes_count: { $gt: 10 } })
db.reviews.updateMany({ course_name: { $regex: /MongoDB/i } }, { $set: { is_verified_purchase: true } })
db.reviews.deleteMany({ review_date: { $lt: new Date("2024-01-01") }, rating: 1 })
db.reviews.find({}, { course_name: 1, student_name: 1, rating: 1, _id: 0 }).sort({ rating: -1 })

// Problem 20: Hospital Bed Availability System
db.hospital.drop()
db.hospital.insertMany([
  { bed_id: 1, ward_name: "ICU", bed_type: "ICU", is_occupied: false, patient_name: null, admission_date: null, expected_discharge_date: null },
  { bed_id: 2, ward_name: "General", bed_type: "General", is_occupied: true, patient_name: "Rahul", admission_date: new Date("2024-05-01"), expected_discharge_date: new Date("2024-05-10") },
  { bed_id: 3, ward_name: "ICU", bed_type: "ICU", is_occupied: true, patient_name: "Suresh", admission_date: new Date("2024-05-05"), expected_discharge_date: new Date("2024-05-15") },
  { bed_id: 4, ward_name: "Private", bed_type: "Private", is_occupied: false, patient_name: null, admission_date: null, expected_discharge_date: null },
  { bed_id: 5, ward_name: "ICU", bed_type: "ICU", is_occupied: false, patient_name: null, admission_date: null, expected_discharge_date: null }
])
db.hospital.find({ is_occupied: false, ward_name: "ICU" })
db.hospital.updateMany({ admission_date: new Date() }, { $set: { is_occupied: true, patient_name: "Emergency Admission" } })
db.hospital.deleteMany({ expected_discharge_date: { $lt: new Date() }, is_occupied: true })
db.hospital.find({}, { ward_name: 1, bed_type: 1, is_occupied: 1, _id: 0 }).sort({ bed_type: 1 })

// Problem 21: E-Commerce Wishlist System
db.wishlist.drop()
db.wishlist.insertMany([
  { wishlist_id: 1, customer_name: "Alice", product_name: "iPhone", product_category: "Electronics", price: 80000, added_date: new Date("2024-05-01"), notify_when_available: true },
  { wishlist_id: 2, customer_name: "Bob", product_name: "T-Shirt", product_category: "Fashion", price: 1500, added_date: new Date("2023-11-15"), notify_when_available: true },
  { wishlist_id: 3, customer_name: "Alice", product_name: "Headphones", product_category: "Electronics", price: 1800, added_date: new Date("2024-05-10"), notify_when_available: true },
  { wishlist_id: 4, customer_name: "Charlie", product_name: "Lamp", product_category: "Home", price: 1200, added_date: new Date("2024-04-20"), notify_when_available: false },
  { wishlist_id: 5, customer_name: "Bob", product_name: "Mouse", product_category: "Electronics", price: 1900, added_date: new Date("2024-05-12"), notify_when_available: true }
])
db.wishlist.find({ price: { $lt: 2000 }, notify_when_available: true })
db.wishlist.updateMany({ product_category: "Electronics" }, { $mul: { price: 0.80 } })
db.wishlist.deleteMany({ added_date: { $lt: new Date("2024-01-01") } })
db.wishlist.aggregate([{ $group: { _id: "$customer_name", item_count: { $sum: 1 } } }])

// Problem 22: Travel Itinerary Planner
db.travel.drop()
db.travel.insertMany([
  { itinerary_id: 1, customer_name: "Aman", destination: "Goa", trip_start_date: new Date("2024-06-01"), trip_end_date: new Date("2024-06-10"), budget: 60000, activities: ["Beach", "Party"], hotel_name: "Sun Resort", booking_status: "Confirmed" },
  { itinerary_id: 2, customer_name: "Priya", destination: "Manali", trip_start_date: new Date("2024-05-20"), trip_end_date: new Date("2024-05-25"), budget: 45000, activities: ["Trekking", "Camping"], hotel_name: "Hill View", booking_status: "Confirmed" },
  { itinerary_id: 3, customer_name: "Raj", destination: "Leh", trip_start_date: new Date("2024-04-10"), trip_end_date: new Date("2024-04-20"), budget: 80000, activities: ["Biking"], hotel_name: "Eco Stay", booking_status: "Pending" },
  { itinerary_id: 4, customer_name: "Neha", destination: "Kerala", trip_start_date: new Date("2024-08-15"), trip_end_date: new Date("2024-08-25"), budget: 55000, activities: ["Houseboat"], hotel_name: "Backwaters", booking_status: "Confirmed" },
  { itinerary_id: 5, customer_name: "Karan", destination: "Dubai", trip_start_date: new Date("2023-12-01"), trip_end_date: new Date("2023-12-10"), budget: 120000, activities: ["Shopping"], hotel_name: "Grand Inn", booking_status: "Cancelled" }
])
db.travel.find({ booking_status: "Confirmed", budget: { $gt: 50000 } })
db.travel.updateMany({ trip_start_date: { $lt: new Date() } }, { $set: { booking_status: "Cancelled" } })
db.travel.deleteMany({ booking_status: "Cancelled", trip_end_date: { $lt: new Date("2024-01-01") } })
db.travel.find({ activities: "Trekking" })

// Problem 23: Warehouse Inventory System
db.warehouse.drop()
db.warehouse.insertMany([
  { product_id: 1, product_name: "Laptop", category: "Electronics", quantity_in_stock: 50, reorder_level: 20, supplier_name: "ABC Corp", last_restock_date: new Date("2024-05-01"), storage_location: "A1" },
  { product_id: 2, product_name: "Table", category: "Furniture", quantity_in_stock: 10, reorder_level: 15, supplier_name: "Wood House", last_restock_date: new Date("2024-04-10"), storage_location: "B2" },
  { product_id: 3, product_name: "Phone", category: "Electronics", quantity_in_stock: 0, reorder_level: 10, supplier_name: "ABC Corp", last_restock_date: new Date("2021-12-01"), storage_location: "A2" },
  { product_id: 4, product_name: "Chair", category: "Furniture", quantity_in_stock: 5, reorder_level: 20, supplier_name: "Steel Works", last_restock_date: new Date("2024-05-05"), storage_location: "B1" },
  { product_id: 5, product_name: "Monitor", category: "Electronics", quantity_in_stock: 100, reorder_level: 30, supplier_name: "ABC Corp", last_restock_date: new Date("2024-03-20"), storage_location: "A3" }
])
db.warehouse.find({ $expr: { $lt: ["$quantity_in_stock", "$reorder_level"] } })
db.warehouse.updateMany({ supplier_name: "ABC Corp" }, { $inc: { quantity_in_stock: 100 } })
db.warehouse.deleteMany({ last_restock_date: { $lt: new Date("2022-01-01") }, quantity_in_stock: 0 })
db.warehouse.createIndex({ category: 1, quantity_in_stock: 1 })

// Problem 24: Music Playlist Manager
db.music.drop()
db.music.insertMany([
  { playlist_id: 1, user_name: "Alice", playlist_name: "Jazz", songs: [{title: "Song A", artist: "Artist 1"}], created_date: new Date("2024-01-01"), total_duration_minutes: 60, is_public: true, play_count: 150 },
  { playlist_id: 2, user_name: "Bob", playlist_name: "Rock", songs: [{title: "Song B", artist: "Artist 2"}], created_date: new Date("2024-03-15"), total_duration_minutes: 45, is_public: true, play_count: 80 },
  { playlist_id: 3, user_name: "Alice", playlist_name: "Pop", songs: [{title: "Song C", artist: "Artist 3"}], created_date: new Date("2022-12-10"), total_duration_minutes: 30, is_public: false, play_count: 50 },
  { playlist_id: 4, user_name: "Charlie", playlist_name: "Lo-fi", songs: [{title: "Song D", artist: "Artist 4"}], created_date: new Date("2024-05-10"), total_duration_minutes: 120, is_public: true, play_count: 300 },
  { playlist_id: 5, user_name: "Bob", playlist_name: "Country", songs: [{title: "Song E", artist: "Artist 5"}], created_date: new Date("2022-10-01"), total_duration_minutes: 90, is_public: false, play_count: 10 }
])
db.music.find({ is_public: true, play_count: { $gt: 100 } })
db.music.updateOne({ playlist_id: 1 }, { $inc: { play_count: 1 } })
db.music.deleteMany({ created_date: { $lt: new Date("2023-01-01") }, is_public: false })
db.music.aggregate([{ $group: { _id: "$user_name", avg_duration: { $avg: "$total_duration_minutes" } } }])

// Problem 25: Banking Loan Application System
db.loans.drop()
db.loans.insertMany([
  { loan_id: 1, applicant_name: "Rahul", loan_type: "Home", loan_amount: 5000000, interest_rate: 8.5, tenure_months: 240, application_date: new Date("2024-05-01"), approval_status: "Pending", credit_score: 750 },
  { loan_id: 2, applicant_name: "Priya", loan_type: "Car", loan_amount: 800000, interest_rate: 9.0, tenure_months: 60, application_date: new Date("2024-04-10"), approval_status: "Pending", credit_score: 780 },
  { loan_id: 3, applicant_name: "Amit", loan_type: "Personal", loan_amount: 200000, interest_rate: 12.0, tenure_months: 24, application_date: new Date("2022-10-15"), approval_status: "Rejected", credit_score: 650 },
  { loan_id: 4, applicant_name: "Neha", loan_type: "Home", loan_amount: 4000000, interest_rate: 8.5, tenure_months: 180, application_date: new Date("2024-05-05"), approval_status: "Approved", credit_score: 720 },
  { loan_id: 5, applicant_name: "Karan", loan_type: "Car", loan_amount: 500000, interest_rate: 9.5, tenure_months: 48, application_date: new Date("2022-05-01"), approval_status: "Rejected", credit_score: 600 }
])
db.loans.find({ approval_status: "Pending", credit_score: { $gt: 700 } })
db.loans.updateMany({ credit_score: { $gt: 750 } }, { $set: { approval_status: "Approved" } })
db.loans.deleteMany({ application_date: { $lt: new Date("2023-01-01") }, approval_status: "Rejected" })
db.loans.aggregate([{ $match: { approval_status: "Approved" } }, { $group: { _id: "$loan_type", avg_amt: { $avg: "$loan_amount" } } }])

// Problem 26: Food Delivery Rider Tracking System
db.riders.drop()
db.riders.insertMany([
  { rider_id: 1, rider_name: "Raju", city: "Mumbai", vehicle_type: "Bike", total_deliveries: 50, average_rating: 4.8, current_status: "Available", earnings_today: 1200, delivery_history: ["O1", "O2"] },
  { rider_id: 2, rider_name: "Sham", city: "Delhi", vehicle_type: "Scooter", total_deliveries: 15, average_rating: 4.2, current_status: "Busy", earnings_today: 400, delivery_history: ["O3"] },
  { rider_id: 3, rider_name: "Babu", city: "Pune", vehicle_type: "Bike", total_deliveries: 0, average_rating: 0, current_status: "Offline", earnings_today: 0, delivery_history: [] },
  { rider_id: 4, rider_name: "Ali", city: "Mumbai", vehicle_type: "Bike", total_deliveries: 30, average_rating: 4.6, current_status: "Available", earnings_today: 900, delivery_history: ["O4", "O5"] },
  { rider_id: 5, rider_name: "John", city: "Delhi", vehicle_type: "Scooter", total_deliveries: 5, average_rating: 3.8, current_status: "Offline", earnings_today: 100, delivery_history: ["O6"] }
])
db.riders.find({ current_status: "Available", average_rating: { $gt: 4.5 } })
db.riders.updateMany({ total_deliveries: { $gt: 20 } }, { $inc: { earnings_today: 100 } })
db.riders.deleteMany({ current_status: "Offline", total_deliveries: 0 })
db.riders.createIndex({ delivery_history: 1 })

// Problem 27: Hotel Guest Feedback System
db.feedback.drop()
db.feedback.insertMany([
  { feedback_id: 1, guest_name: "Aman", hotel_name: "Taj", overall_rating: 5, feedback_date: new Date("2024-05-01"), would_recommend: true, cleanliness_rating: 5, service_rating: 5 },
  { feedback_id: 2, guest_name: "Sara", hotel_name: "Hilton", overall_rating: 2, feedback_date: new Date("2023-12-15"), would_recommend: false, cleanliness_rating: 2, service_rating: 3 },
  { feedback_id: 3, guest_name: "Raj", hotel_name: "Marriott", overall_rating: 4, feedback_date: new Date("2024-04-10"), would_recommend: true, cleanliness_rating: 4, service_rating: 4 },
  { feedback_id: 4, guest_name: "Neha", hotel_name: "Taj", overall_rating: 1, feedback_date: new Date("2022-11-20"), would_recommend: false, cleanliness_rating: 1, service_rating: 1 },
  { feedback_id: 5, guest_name: "Karan", hotel_name: "Hilton", overall_rating: 5, feedback_date: new Date("2024-05-12"), would_recommend: true, cleanliness_rating: 5, service_rating: 4 }
])
db.feedback.find({ overall_rating: { $lt: 3 }, would_recommend: false })
db.feedback.updateMany({ overall_rating: { $gt: 4 } }, { $set: { would_recommend: true } })
db.feedback.deleteMany({ feedback_date: { $lt: new Date("2023-01-01") }, overall_rating: 1 })
db.feedback.aggregate([{ $group: { _id: "$hotel_name", avg_clean: { $avg: "$cleanliness_rating" }, avg_service: { $avg: "$service_rating" } } }])

// Problem 28: Event Ticket Booking System
db.events.drop()
db.events.insertMany([
  { booking_id: 1, event_name: "Music Fest", event_date: new Date("2026-11-01"), ticket_type: "VIP", number_of_tickets: 2, payment_status: "Paid", booking_date: new Date("2024-05-01") },
  { booking_id: 2, event_name: "Comedy", event_date: new Date("2024-04-10"), ticket_type: "General", number_of_tickets: 4, payment_status: "Paid", booking_date: new Date("2024-03-15") },
  { booking_id: 3, event_name: "Music Fest", event_date: new Date("2026-11-01"), ticket_type: "Student", number_of_tickets: 1, payment_status: "Pending", booking_date: new Date("2023-12-10") },
  { booking_id: 4, event_name: "Theater", event_date: new Date("2024-05-15"), ticket_type: "VIP", number_of_tickets: 2, payment_status: "Paid", booking_date: new Date("2024-05-10") },
  { booking_id: 5, event_name: "Concert", event_date: new Date("2023-05-01"), ticket_type: "General", number_of_tickets: 2, payment_status: "Paid", booking_date: new Date("2023-04-01") }
])
db.events.find({ event_date: { $gt: new Date("2026-10-01") }, payment_status: "Paid" })
db.events.updateMany({ event_date: { $lt: new Date() }, payment_status: "Paid" }, { $set: { payment_status: "Refunded" } })
db.events.deleteMany({ payment_status: "Pending", booking_date: { $lt: new Date("2024-01-01") } })
db.events.aggregate([{ $group: { _id: "$event_name", total_sold: { $sum: "$number_of_tickets" } } }])

// Problem 29: Social Media Follower Analytics
db.social.drop()
db.social.insertMany([
  { follower_id: 1, follower_name: "Alice", engagement_score: 90, is_active: true, interests: ["Tech", "Gaming"], last_interaction_date: new Date("2024-05-15"), followed_since: new Date("2024-01-01") },
  { follower_id: 2, follower_name: "Bob", engagement_score: 15, is_active: true, interests: ["Sports"], last_interaction_date: new Date("2024-05-10"), followed_since: new Date("2021-05-01") },
  { follower_id: 3, follower_name: "Charlie", engagement_score: 85, is_active: true, interests: ["Tech"], last_interaction_date: new Date("2025-02-01"), followed_since: new Date("2023-11-15") },
  { follower_id: 4, follower_name: "David", engagement_score: 10, is_active: false, interests: ["Fashion"], last_interaction_date: new Date("2022-12-01"), followed_since: new Date("2020-01-10") },
  { follower_id: 5, follower_name: "Eve", engagement_score: 95, is_active: true, interests: ["Gaming"], last_interaction_date: new Date("2024-05-18"), followed_since: new Date("2024-03-01") }
])
db.social.find({ engagement_score: { $gt: 80 }, is_active: true })
db.social.updateMany({ last_interaction_date: { $lt: new Date("2025-01-01") } }, { $set: { is_active: false } })
db.social.deleteMany({ followed_since: { $lt: new Date("2022-01-01") }, engagement_score: { $lt: 20 } })
db.social.aggregate([{ $unwind: "$interests" }, { $group: { _id: "$interests", count: { $sum: 1 } } }, { $sort: { count: -1 } }, { $limit: 1 }])

// Problem 30: Manufacturing Defect Tracking System
db.factory.drop()
db.factory.insertMany([
  { defect_id: 1, product_name: "Part A", severity: "Low", status: "Open", quantity_affected: 50, root_cause: null, detection_date: new Date("2024-05-01"), defect_type: "Cosmetic" },
  { defect_id: 2, product_name: "Part B", severity: "High", status: "Open", quantity_affected: 200, root_cause: null, detection_date: new Date("2024-04-15"), defect_type: "Functional" },
  { defect_id: 3, product_name: "Part C", severity: "High", status: "Resolved", quantity_affected: 500, root_cause: "Heat", detection_date: new Date("2021-10-10"), defect_type: "Safety" },
  { defect_id: 4, product_name: "Part D", severity: "Medium", status: "Open", quantity_affected: 30, root_cause: "Fit", detection_date: new Date("2024-05-10"), defect_type: "Functional" },
  { defect_id: 5, product_name: "Part E", severity: "Low", status: "Resolved", quantity_affected: 15, root_cause: "Color", detection_date: new Date("2021-05-20"), defect_type: "Cosmetic" }
])
db.factory.find({ severity: "High", status: "Open" })
db.factory.updateMany({ root_cause: { $ne: null } }, { $set: { status: "Resolved", resolution_date: new Date() } })
db.factory.deleteMany({ detection_date: { $lt: new Date("2022-01-01") }, status: "Resolved" })
db.factory.aggregate([{ $group: { _id: "$defect_type", total: { $sum: "$quantity_affected" } } }, { $sort: { total: -1 } }])
