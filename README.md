# sample-cypress-multi-coverage
Sample to setup cypress coverage for frontend monorepos

Run this project in VSCode and open it in devcontainer

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
mkdir tests
cd tests
yarn add cypress --dev
yarn add start-server-and-test --dev
yarn add typescript
```

