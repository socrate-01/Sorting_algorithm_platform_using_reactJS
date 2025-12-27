
# Sorting Algorithm Visualization Platform

This project is an **interactive visualization tool** that helps you understand how different sorting algorithms operate under the hood.
By animating comparisons, swaps, and execution steps, the platform makes it easier to grasp how each algorithm transforms an unsorted list into an ordered one.

---

## Features

* **Real-time visualization** of sorting operations
* **Multiple algorithms** (Bubble, Selection, Insertion, Merge, Quick — depending on your implementation)
* **Adjustable array size**
* **Control sorting speed**
* **Generate new random arrays**
* **Clean and intuitive UI built with ReactJS**

---

## Tech Stack

* **ReactJS**
* **JavaScript (ES6+)**
* **CSS / Custom styling**
* **HTML5 Canvas or DOM-based animations** (depending on your implementation)

---

## Supported Algorithms (V1)

This platform currently visualizes the following sorting algorithms:

### **Bubble Sort** (`BubbleSort.js`)

A simple comparison-based algorithm that repeatedly steps through the list, swaps adjacent elements that are in the wrong order, and continues until the entire array is sorted.

### **Selection Sort** (`SelectionSort.js`)

This algorithm repeatedly selects the smallest (or largest) element from the unsorted portion and places it in its correct position in the sorted portion.

### **Insertion Sort** (`InsertionSort.js`)

Builds the final sorted array one element at a time by inserting each new element into its correct position among the already-sorted elements.

### **Merge Sort** (`MergeSort.js`)

A highly efficient **divide-and-conquer** algorithm that splits the array into halves, recursively sorts them, and merges the sorted halves back together.

### **Quick Sort** (`QuickSort.js`)

A fast and widely used divide-and-conquer algorithm that selects a pivot element, partitions the array around the pivot, and recursively sorts each partition.

---

## Getting Started

Clone the repository:

```bash
git clone https://github.com/socrate-01/Sorting_algorithm_platform_using_reactJS.git
cd Sorting_algorithm_platform_using_reactJS
```

Install dependencies:

```bash
npm install
```

(Optional) Fix vulnerabilities:

```bash
npm audit fix
```

Run the development server:

```bash
npm start
```

The app will be available at:

```
http://localhost:3000
```

---

## What Are Sorting Algorithms?

Sorting algorithms are step-by-step methods used to rearrange the elements of a list or array into a specific order (ascending, descending, etc.).
This platform visually demonstrates how these algorithms behave, making them **easier to understand, compare, and learn**.

---

## Supported Algorithms

If all algorithms are included, this typically supports:

* Bubble Sort
* Selection Sort
* Insertion Sort
* Merge Sort
* Quick Sort
* Heap Sort *(optional if implemented)*

---

## Contributing

Contributions, suggestions, and improvements are welcome!
Feel free to open an issue or submit a pull request.

---

## License

This project is licensed under the **MIT License**.
