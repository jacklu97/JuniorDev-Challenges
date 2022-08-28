export default class Stack<T> {
    #size: number = 0;
    elements: T[] = [];
    maxSize: number;

    constructor(maxSize: number = Infinity){
        this.maxSize = maxSize;
    };

    /**
     * Adds a new element to the stack
     * @param value 
     */
    push(value: T): void {
        if (this.#size === this.maxSize) {
            throw new Error("Stack overflow");
        }
        this.elements.push(value);
        this.#size++;
    }

    /**
     * Removes the top element from the stack and returns the element
     */
    pop(): T | undefined {
        this.#size--;
        return this.elements.pop();
    }

    /**
     * Gets the element at the top of the stack
     * @returns element at the top of the stack
     */
    top(): T {
        return this.elements[this.elements.length - 1];
    }

    /**
     * Gets the current number of elements in the stack
     * @returns number of elements in the stack
     */
    size(): number {
        return this.#size;
    }

    /**
     * Boolean check if the stack is empty
     * @returns true is the stack is empty, otherwise returns false
     */
    isEmpty(): boolean {
        return this.#size == 0;
    }
}