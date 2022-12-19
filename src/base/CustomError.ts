import type { ArrayToTuple } from '../utils/ArrayUtil';

type StrArrOnly = ReadonlyArray<string>;

/**
 * @description Helps to build custom errors. Allows for use of generics to define a preset list of names and messages.
 * @author AceLikesGhosts
 * @example ```ts
 * CustomError.createAndThrow<readonly ['Name1', 'Name2'], readonly ['Message1', 'Message2']>('Name1', 'Message1'); // works a-okay
 * 
 * CustomError.createAndThrow<readonly ['Name1', 'Name2'], readonly ['Message1', 'Message2']>('Name3', 'Message3'); // Argument of type 'Name3' is not assignable to parameter of type 'Name1' | 'Name2'.
 * 
 * CustomError.createAndThrow('A', 'B'); // works a-okay
 * 
 * new CustomError('a', 'b'); // works a-okay
 * 
 * new CustomError<readonly ['a', 'b']>('a', 'b'); // works a-okay
 * 
 * new CustomError<readonly ['a', 'b']>('c', 'd'); // Argument of type 'c' is not assignabel to parameter of type 'a' | 'b'.
 * ```
 */
class CustomError<N extends StrArrOnly, M extends StrArrOnly> extends Error
{
    static create<N extends StrArrOnly, M extends StrArrOnly>(name: ArrayToTuple<N>, message: ArrayToTuple<M>): CustomError<N, M>;
    static create<N extends StrArrOnly, M extends StrArrOnly>(name: ArrayToTuple<N>, message: ArrayToTuple<M>, stacktrace?: string | null): CustomError<N, M>
    {
        return new this(name, message, stacktrace);
    }

    static createAndThrow<N extends StrArrOnly, M extends StrArrOnly>(name: ArrayToTuple<N>, message: ArrayToTuple<M>): void;
    static createAndThrow<N extends StrArrOnly, M extends StrArrOnly>(name: ArrayToTuple<N>, message: ArrayToTuple<M>, stacktrace?: string | null): void
    {
        throw new this(name, message, stacktrace);
    }

    public constructor(name: ArrayToTuple<N>, message: ArrayToTuple<M>, stacktrace?: string | null)
    {
        super(message);
        this.name = name;

        if(stacktrace)
            this.stack = stacktrace;
    }
}

export default CustomError;