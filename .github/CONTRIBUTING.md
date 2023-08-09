# Contributing

## Request for changes/ Pull Requests
You first need to create a fork of the [hypertrance](https://github.com/nuphory/hypertrance) repository to commit your changes to it. Methods to fork a repository can be found in the [GitHub Documentation](https://docs.github.com/en/get-started/quickstart/fork-a-repo).

Then add your fork as a local project:

```sh
# Using HTTPS
git clone https://github.com/nuphory/hypertrance.git

# Using SSH
git clone git@github.com:nuphory/hypertrance.git
```

> [Which remote URL should be used ?](https://docs.github.com/en/get-started/getting-started-with-git/about-remote-repositories)

Then, go to your local folder

```sh
cd hypertrance
```

Add git remote controls :

```sh
# Using HTTPS
git remote add fork https://github.com/YOUR-USERNAME/hypertrance.git
git remote add upstream https://github.com/nuphory/hypertrance.git


# Using SSH
git remote add fork git@github.com:YOUR-USERNAME/hypertrance.git
git remote add upstream git@github.com/nuphory/hypertrance.git
```

You can now verify that you have your two git remotes:

```sh
git remote -v
```

## Receive remote updates
In view of staying up to date with the central repository :

```sh
git pull upstream master
```

## Choose a base branch
Before starting development, you need to know which branch to base your modifications/additions on. When in doubt, use master.

| Type of change                |           | Branches              |
| :------------------           |:---------:| ---------------------:|
| Documentation                 |           | `master`              |
| Bug fixes                     |           | `master`              |
| New features                  |           | `master`              |
| New issues models             |           | `YOUR-USERNAME:patch` |

```sh
# Switch to the desired branch
git switch master

# Pull down any upstream changes
git pull

# Create a new branch to work on
git switch --create patch/1234-name-issue
```

## Start developing
First you will want to install the project's dependencies, and start a `vite` dev server. You can do this with any node package manager

#### using pnpm
```sh
pnpm i;
pnpm dev # --host # --open
```
#### using yarn
```sh
yarn i;
yarn run dev # --host # --open
```
#### using npm
```sh
npm i;
npm run dev # --host # --open
```

## Pushing your changes
Before creating a pull request, make sure that your fork is able to build successfully with the `build` script.

#### using pnpm
```sh
pnpm format; pnpm lint; pnpm build 
```
#### using yarn
```sh
yarn run format; yarn run lint; yarn run build
```
#### using npm
```sh
npm run format; npm run lint; npm run build
```

Commit your changes, then push the branch to your fork with `git push -u fork` and open a pull request on [the hypertrance repository](https://github.com/nuphory/hypertrance/) following the template provided.

We might suggest or commit additional changes (e.g. bumping versions) before merging your pull request.