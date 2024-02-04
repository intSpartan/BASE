import cmath  # Importing the complex math module for handling complex roots

def calculate_quadratic_roots(a, b, c):
    # Calculate the discriminant
    discriminant = cmath.sqrt(b**2 - 4*a*c)

    # Calculate the roots using the quadratic formula
    root1 = (-b + discriminant) / (2 * a)
    root2 = (-b - discriminant) / (2 * a)

    return root1, root2

# Input coefficients from the user
a = 1
b = 2
c = 1

# Calculate and display the roots
roots = calculate_quadratic_roots(a, b, c)
print("Root 1:", roots[0])
print("Root 2:", roots[1])
