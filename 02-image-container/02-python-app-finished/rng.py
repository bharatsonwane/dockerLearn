from random import randint


def print_random_number():
  print("Hello from a function")
  global min_number
  global max_number
  min_number = int(input('Please enter the min number: '))
  max_number = int(input('Please enter the max number: '))


print_random_number()
if (max_number < min_number): 
  print('Invalid input - shutting down...')
else:
  rnd_number = randint(min_number, max_number)
  print(rnd_number)
  print_random_number()

