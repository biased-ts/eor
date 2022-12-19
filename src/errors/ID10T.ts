import CustomError from 'src/base/CustomError';

/**
 * @description Creates an ID10T Error with a provided message.
 * @param message - The message of the ID10T Error.
 * @returns {CustomError<Readonly<string[]>, Readonly<string[]>>} 
 */
export default function (message: string): CustomError<readonly string[], readonly string[]>
{
    return CustomError.create('ID10T', message);
}