<br />

# eor

`eor` is a fast error library for Typescript 

It provides several error helpers, and error classes built in.

<details>
    <summary>
        Table of Contents
    </summary>
    <ol>
        <li>
            <a href="#installation">Installation</a>
        </li>
        <li>
            <a href="#usage">General Usage</a>
        </li>
        <li>
            <a href="#documentaion">Documentation</a>
        </li>
    </ol>
</details>

----------

<!-- What's needed to use the lib -->
### Prerequisites
A general understanding of Typescript, generics, 
and Node/NPM.

For contributing it is expected that you understand the source code
behind the library, and the general layout of the source code within.

<!-- how to install the lib... -->
### Installation

This is a general example on how to install the utilities provided by this library.

* npm
  ```bash
  npm install @biased-ts/eor --save
  ```

<!-- Examples on how to use the lib -->
### Usage

Depending on your use case, and what portion of the utility library you are using, these examples can vary.

For now, we are simply going to cover using the Getter and Setter annotations.

```ts
import { CustomError } from '@biased-ts/eor';

new CustomError<readonly ['Name'], readonly ['Message']>('Name', 'Message');

// create a new custom error with a few names and messages allowed
// it will convert the array into tuples which are allowed.
new CustomError<readonly ['Name', 'Another Name'], readonly ['Message', 'Another Message']>('Name', 'Another Message');


new CustomErrorBuilder()
    .setName('Name')
    .setMessage('Message')
    .throw(); // throws the error
```


### Documentaion
<a name="documentaion"></a>
At this current point in time, any documentation provided for this library is
simply provided through using JSDoc comments; those are required to have
detailed examples, descriptions, and other data.


### Acknowledgements

This section is here to give acknowledgement to anyone who contributes, or takes the time to
report any issues within the source code; any efforts are heavily appreciated. Thank you all
for your time, and thank you anybody who uses this. 

### Licencing

This project is "licenced" using the [Unlicence](https://unlicense.org/) "licence".