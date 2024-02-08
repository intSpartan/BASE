public class ArraySumCalculator {
    public static void main(String[] args) {
        // Example array
        int[] numbers = {1, 2, 3, 4, 5};

        // Calculate the sum
        int sum = calculateSum(numbers);

        // Display the result
        System.out.println("Sum of the array elements: " + sum);
    }

    // Function to calculate the sum of an array
    public static int calculateSum(int[] arr) {
        int sum = 0;

        // Loop through the array and add each element to the sum
        for (int num : arr) {
            sum += num;
        }

        return sum;
    }
}
