import CustomError from './CustomError';

/**
 * @description Builds a custom error.
 * @abstract
 * @author AceLikesGhosts
 */
class CustomErrorBuilder
{
    private name: string | null = null;
    private message: string | null = null;
    private stackstrace: string | null = null;

    /**
     * @param {string} name - The name of the Error.
     * @returns 
     */
    setName(name: string): CustomErrorBuilder
    {
        this.name = name;
        return this;
    }

    /**
     * @param message - The message of the Error.
     * @returns 
     */
    setMessage(message: string): CustomErrorBuilder
    {
        this.message = message;
        return this;
    }

    /**
     * @param trace - The stacktrace of the Error.
     * @returns 
     */
    setStackTrace(trace: string): CustomErrorBuilder
    {
        this.stackstrace = trace;
        return this;
    }

    /**
     * @throws
     * @description Turns the Builder into a CustomError instance.
     * @returns {CustomError<any, any>} The custom error instance.
     */
    build(): CustomError<any, any>
    {
        if(this.name === null)
            throw new CustomError('IllegalArgumentException', 'Name cannot be null when building an error.');

        if(this.message === null)
            this.message = 'N/A';

        return new CustomError(this.name, this.message, this.stackstrace === null ? undefined : this.stackstrace);
    }

    /**
     * @throws
     * @description Turns the Builder into a CustomError instancce and proceeds to throw it.
     */
    throw(): void
    {
        throw this.build();
    }
}

export default CustomErrorBuilder;