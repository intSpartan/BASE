void main() {
  // Example array
  List<int> numbers = [1, 2, 3, 4, 5];

  // Calculate the sum
  int sum = calculateSum(numbers);

  // Display the result
  print("Sum of the array elements: $sum");
}

// Function to calculate the sum of an array
int calculateSum(List<int> arr) {
  int sum = 0;

  // Loop through the array and add each element to the sum
  for (int num in arr) {
    sum += num;
  }

  return sum;
}
