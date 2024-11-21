print("Welcome to the tip calculator!")
bill = float(input("What was the total bill? $"))
tip = int(input("What percentage tip would you like to give? 10 12 15 "))
people = int(input("How many people to split the bill? "))

#Bill $150...Tip 12%...5 people....Result $33.60
split =  (bill*(tip/100) + bill)/people
print (f"Each person should pay: ${split}")

#Solution with logic steps
tip_as_percent = tip/100
total_tip_amount = bill * tip_as_percent
total_bill = bill + total_tip_amount
bill_per_person = total_bill / people
final_amount = round (bill_per_person, 2)
print (f"The final amount for everyone to pay is: ${final_amount}")