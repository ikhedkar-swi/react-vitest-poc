export class Counter {
  private _counter = 0;

  public get count() {
    return this._counter;
  }

  public increment(): number {
    this._counter++;
    return this._counter;
  }

  public incrementBy(factor: number): number {
    this._counter += this._counter * factor;
    return this._counter;
  }

  public decrement(): number {
    this._counter--;
    return this._counter;
  }

  public decrementBy(factor: number): number {
    this._counter -= this._counter * factor;
    return this._counter;
  }
}
