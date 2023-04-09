# sample-cypress-multi-coverage
Sample to setup cypress coverage for frontend monorepos

Run this project in VSCode and open it in devcontainer

# Running Cypress

Using devcontainer in WSL2 on latest Windows 11 - cypress will open GUI with no extra settings
```
yarn cy:open
```

Running tests (without GUI)
```
TARGET_APP=reactfnd yarn run test
```

# Running React

```shell
cd reactfnd
yarn start
```

# Running AngularJS

```shell
cd angularjsfnd
yarn start
```

# Creation Commands

This project was created this way:

```shell
npx create-react-app reactfnd
git clone https://github.com/angular/angular-seed.git
mv angular-seed angularjsfnd
rm -rf angularjsfnd/.git
cd angularjsfnd
yarn install
cd ..
cat > .gitignore <<EOF
node_modules
EOF
yarn add cypress --dev
yarn add start-server-and-test --dev
yarn add typescript
```
