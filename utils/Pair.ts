
export default class Pair<T, K> {
    first: T;
    second: K;

    constructor(el1: T, el2: K) {
        this.first = el1;
        this.second = el2;
    }

    areEqual(): boolean {
        if (typeof this.first !== typeof this.second) return false;

        return (this.first as any) === (this.second as any);
    }

    [Symbol.iterator](): Iterator<T | K> {
        let counter = 0;
        return {
            next: () => {
                counter++;
                return {
                    done: counter > 2,
                    value: counter === 1 ? this.first : this.second
                }
            }
        }
    }
}