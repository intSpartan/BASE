def calculate_sum(arr):
    sum_of_array = 0

    for num in arr:
        sum_of_array += num

    return sum_of_array

# Example usage
my_array = [1, 2, 3, 4, 5]
result = calculate_sum(my_array)
print(f"The sum of the array {my_array} is: {result}")
