# 1. TASK: print "Hello World"
print( "Hello World!" )
# 2. print "Hello Noelle!" with the name in a variable
name = "Rocio!"
print( "Hello", name )	# with a comma
print( "Hello" + " " + name)	# with a +
# 3. print "Hello 42!" with the number in a variable
num = 4
print( "Hello", num, "!")	# with a comma
print( "Hello" + num + "!")	# with a +	-- this one should give us an error!
#NINJA BONUS: Figure out how to resolve the error from above, without changing the + sign to a comma
print( "Hello" + str(num) + "!")
# 4. print "I love to eat sushi and pizza." with the foods in variables
fave_food1 = "sushi"
fave_food2 = "pizza"
txt = "I love to eat {} and {}."
print( txt.format(fave_food1, fave_food2) ) # with .format()
print(f"I love to eat {fave_food1} and {fave_food2}.") # with an f string
