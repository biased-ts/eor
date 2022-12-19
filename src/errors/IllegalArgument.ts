import CustomError from 'src/base/CustomError';

/**
 * @description Creates an IllegalArgument Error with a provided message.
 * @param message - The message of the ID10T Error.
 * @returns {CustomError<Readonly<string[]>, Readonly<string[]>>} 
 */
export default function (message: string): CustomError<readonly string[], readonly string[]>
{
    return CustomError.create('IllegalArgument', message);
}