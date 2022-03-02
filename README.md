# AvatarLegendsVTT

This is an unoffical implementation of the [Avatar Legends RPG](https://magpiegames.com/pages/avatarrpg) system for FoundryVTT.

This is a fan made system for Foundry VTT and is in no way associated with Magpie Games, Nickelodeon or their partners and does not reproduce any of the copyrighted material from the Avatar Legends RPG source books. You will still need to purchase the offical source books to make use of this system as intended.

## Installation

Unless you understand NodeJS and Typescript development it is highly recommended that you do not attempt to build this project yourself.

To manually install this system:
1. Download the latest .zip file from the [releases page](https://github.com/drmattsuu/AvatarLegendsVTT/releases)
2. Extract the system to your [Foundry Virtual Tabletop User Data Path](https://foundryvtt.com/article/configuration/) `Data/systems/AvatarLegendsVTT/`

## Development

### Prerequisites

In order to build this system, recent versions of `node` and `npm` are
required. Most likely, using `yarn` also works, but only `npm` is officially
supported. We recommend using the latest lts version of `node`. If you use `nvm`
to manage your `node` versions, you can simply run

```
nvm install
```

in the project's root directory.

You also need to install the project's dependencies. To do so, run

```
npm install
```

### Building

You can build the project by running

```
npm run build
```

Alternatively, you can run

```
npm run build:watch
```

to watch for changes and automatically build as necessary.

### Linking the built project to Foundry VTT

In order to provide a fluent development experience, it is recommended to link
the built system to your local Foundry VTT installation's data folder. In
order to do so, first add a file called `foundryconfig.json` to the project root
with the following content:

```
{
  "dataPath": "/absolute/path/to/your/FoundryVTT"
}
```

(if you are using Windows, make sure to use `\` as a path separator instead of
`/`)

Then run

```
npm run link-project
```

On Windows, creating symlinks requires administrator privileges, so unfortunately
you need to run the above command in an administrator terminal for it to work.

### Running the tests

You can run the tests with the following command:

```
npm test
```

### Creating a release

The workflow works basically the same as the workflow of the [League Basic JS Module Template], please follow the
instructions given there.

## Licensing

This project is being developed under the terms of the
[LIMITED LICENSE AGREEMENT FOR MODULE DEVELOPMENT] for Foundry Virtual Tabletop.

The source code within this project is licensed under MIT, please see [LICENSE.txt]

[League Basic JS Module Template]: https://github.com/League-of-Foundry-Developers/FoundryVTT-Module-Template
[LIMITED LICENSE AGREEMENT FOR MODULE DEVELOPMENT]: https://foundryvtt.com/article/license/
