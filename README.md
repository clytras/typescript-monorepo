# TypeScript monorepo importing from parent directories

This is a proposed solution to the [is not under 'rootDir'](https://stackoverflow.com/questions/55753163/package-json-is-not-under-rootdir/61426303#61426303) error TS6059 that TypeScript generates when `rootDir` is set, and imports from parents of `rootDir` are attempted.
