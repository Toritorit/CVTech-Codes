import datetime
import os
import sys

DT = datetime.datetime.now()

Inventory = {
    "Frozen Ham": {"quantity": 0, "points": 50},
    "Frozen Turkey": {"quantity": 0, "points": 50},
    "Canned Yams": {"quantity": 0, "points": 5},
    "Canned Corn": {"quantity": 0, "points": 5},
    "Canned Green Beans": {"quantity": 0, "points": 5},
    "Canned Carrots": {"quantity": 0, "points": 5},
    "Canned Peas": {"quantity": 0, "points": 5},
    "Canned Fruit": {"quantity": 0, "points": 5},
    "Canned Pumpkin": {"quantity": 0, "points": 5},
    "Canned Milk": {"quantity": 0, "points": 5},
    "Instant Mashed Potatoes": {"quantity": 0, "points": 8},
    "Potatoes": {"quantity": 0, "points": 5},
    "Sugar": {"quantity": 0, "points": 15},
    "Flour": {"quantity": 0, "points": 10},
    "Cranberry Sauce": {"quantity": 0, "points": 5},
    "Pie Crust": {"quantity": 0, "points": 8},
    "Pie Filling": {"quantity": 0, "points": 5},
    "Stuffing Mix": {"quantity": 0, "points": 10},
    "Gravy Mix": {"quantity": 0, "points": 1},
    "Bread Mix": {"quantity": 0, "points": 5},
    "Cookie Mix": {"quantity": 0, "points": 5},
    "Cake Mix and Icing": {"quantity": 0, "points": 5},
    "Cooking Oil": {"quantity": 0, "points": 8},
    "Mac n Cheese": {"quantity": 0, "points": 2},
    "Canned Meats": {"quantity": 0, "points": 10},
    "Peanut Butter": {"quantity": 0, "points": 8},
    "Boxed Meal Kits": {"quantity": 0, "points": 5},
    "Canned Soup": {"quantity": 0, "points": 5},
    "Quick Meals": {"quantity": 0, "points": 1}
}

INV_PATH = ("C:\\Users\\tmckissick\\Desktop\\FoodDrive2\\Storage_inv.txt")

FullInventory = {}

if not os.path.exists(INV_PATH):
 with open(INV_PATH, 'w') as file:
        for item, data in Inventory.items():
             qty = data["quantity"]
             pts = data["points"]
             file.write(f"{item},{qty},{pts}\n")

else:
    print("Inventory Loaded")
   

def LoadInv():
    with open(INV_PATH, 'r') as file:
     content = file.read()
     print(content)


     

def SaveInv():
     print("SaveInv")

def AddItems():
    print("Add to Inv")
    item = input("Item Name...").title()
    quantity = int(input("Item Amount...?"))
    points = int(input("Points:.."))

    lined = f"{item},{quantity},{points}\n"

    with open(INV_PATH, "a") as file:
        file.write(lined)
    print(lined.strip(),"added Item")



        
def SearchInv():
    SearchItem = input ("Item Name...").strip().lower()

    with open("Storage_inv.txt", 'r') as file:
     found = False
     for line in file:
         item, quantity, points = line.strip().split(",")
         if item.lower() == SearchItem:
          print(f"{item},{quantity},{points}")
         found = True

    if not found:
        print('Not found')




def UpdateQuantity():
    UdtQuantity = input ("Item name..").strip().lower()

with open("Storage_inv.txt", 'r') as file:
    
    for line in file:
     item, quantity, points = line.strip().split(",")
     points = int()

     line = f"{item},{quantity},{quantity}"

def Top_Bottom_Five():
    pass

def Calc_Baskets():
    with open ('Storage_inv.txt', 'r') as file:
    
        for line in file: 
         item, quantity, points = line.strip().split(",")
# points x quantity of each line = 

def CloseInv():
    #endcode = input("Are you sure?   ").lower()
    #if endcode in ("yes","y"):
    sys.exit()
    
def FDMenu():
     while True:
         print('FoodDrive Menu')
         print('1. Load Inventory')
         print('2. Save Inventory')
         print('3. Add to Inventory')
         print('4. Search Item')
         print('5. Update Item Quantity')
         print('6. Top/Bottom Five')
         print('7. Calculate Baskets')
         print('8. Exit')

         try:
            choice = int(input('Enter a Number: '))
         except ValueError:
            print("Numbers only.")
            continue
    
         if choice == 1:
             LoadInv()
         elif choice == 2:
             SaveInv()
         elif choice == 3:
             AddItems()
         elif choice == 4:
             SearchInv()
         elif choice == 5:
             UpdateQuantity()
         elif choice == 6:
             Top_Bottom_Five()
         elif choice == 7:
             Calc_Baskets()
         elif choice == 8:
             CloseInv()
         else:
             print("Try again")

FDMenu()
