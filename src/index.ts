// export everything ong
import CustomError from './base/CustomError';
import CustomErrorBuilder from './base/CustomErrorBuilder';

// #region Messages
import IllegalArgument from './errors/IllegalArgument';
import ID10T from './errors/ID10T';
// #endregion

export default CustomErrorBuilder;
export
{
    CustomError,
    CustomErrorBuilder,

    IllegalArgument,
    ID10T
};