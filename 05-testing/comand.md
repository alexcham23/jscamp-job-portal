### pnpm
#### crear proyecto e2e
```sh
pnpm create playwright
```
```
pnpm is running through Node.js because the script that installs its native binary was skipped.
Reinstall pnpm with its build scripts allowed to run the binary directly.
Getting started with writing end-to-end tests with Playwright:
Initializing project in 'e2e'
✔ Do you want to use TypeScript or JavaScript? · JavaScript
✔ Where to put your end-to-end tests? · tests
✔ Add a GitHub Actions workflow? (Y/n) · false
✔ Install Playwright browsers (can be done manually via 'pnpm exec playwright install')? (Y/n) · true

✔ Install Playwright operating system dependencies (requires sudo / root - can be done manually via 'sudo pnpm exec playwright install-deps')? (y/N) · false
```


#### Ejecutar test

```sh
pnpm exec playwright test
```

#### ver reporte

```sh
pnpm exec playwright show-report
```

### usar el UI mode

```sh
pnpm exec playwright test --ui
```