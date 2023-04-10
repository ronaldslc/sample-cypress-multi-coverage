# sample-cypress-multi-coverage

Sample to setup cypress coverage for frontend monorepos

Run this project in VSCode and open it in devcontainer

# Running Cypress

Using devcontainer in WSL2 on latest Windows 11 - cypress will open GUI with no extra settings
```
yarn cy:open
```

Running tests individually (without GUI) and view report
```
TARGET_APP=reactfnd yarn run test
TARGET_APP=reactfnd yarn run report
```

Running both tests (with generated report)
```
yarn test:all
yarn run report:aggregate
```

Navigate to your WSL2 project folder path and enter `explorer.exe coverage/lcov-report/index.html` to view it in your local Windows browser

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
