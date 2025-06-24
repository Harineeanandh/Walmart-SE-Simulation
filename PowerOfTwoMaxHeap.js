import java.util.ArrayList;

public class PowerOfTwoMaxHeap {
    private final int childrenCount;
    private final ArrayList<Integer> heap;

    public PowerOfTwoMaxHeap(int degreePower) {
        this.childrenCount = (int) Math.pow(2, degreePower);
        this.heap = new ArrayList<>();
    }

    public void insert(int value) {
        heap.add(value);
        int currentIndex = heap.size() - 1;
        bubbleUp(currentIndex);
    }

    private void bubbleUp(int index) {
        while (index > 0) {
            int parentIndex = (index - 1) / childrenCount;
            if (heap.get(index) > heap.get(parentIndex)) {
                swap(index, parentIndex);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    public int popMax() {
        if (heap.isEmpty()) throw new IllegalStateException("Heap is empty");

        int maxValue = heap.get(0);
        int lastValue = heap.remove(heap.size() - 1);

        if (!heap.isEmpty()) {
            heap.set(0, lastValue);
            trickleDown(0);
        }

        return maxValue;
    }

    private void trickleDown(int index) {
        while (true) {
            int largest = index;

            for (int i = 1; i <= childrenCount; i++) {
                int childIndex = childrenCount * index + i;
                if (childIndex < heap.size() && heap.get(childIndex) > heap.get(largest)) {
                    largest = childIndex;
                }
            }

            if (largest != index) {
                swap(index, largest);
                index = largest;
            } else {
                break;
            }
        }
    }

    private void swap(int i, int j) {
        int temp = heap.get(i);
        heap.set(i, heap.get(j));
        heap.set(j, temp);
    }

    public void printHeap() {
        System.out.println(heap);
    }

    public int size() {
        return heap.size();
    }
}

// This class is just for testing
class HeapTest {
    public static void main(String[] args) {
        PowerOfTwoMaxHeap heap = new PowerOfTwoMaxHeap(2); // 4 children per node

        heap.insert(10);
        heap.insert(40);
        heap.insert(20);
        heap.insert(5);
        heap.insert(60);
        heap.insert(15);

        heap.printHeap(); // Debugging view

        System.out.println("Popped max: " + heap.popMax());
        System.out.println("Popped max: " + heap.popMax());
        System.out.println("Popped max: " + heap.popMax());

        heap.printHeap();
    }
}

