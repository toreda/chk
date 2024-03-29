# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## Added
* Schema system with JSON-style rule config.


## [0.6.0] - 2023-05-25
## Changed
* `chk` functions return the provided `value` argument as `fate.data`. Some `chk` functions now accept a generic type which defaults to unknown and is not required to call. No other existing aspects of the returned `fate` object have changed. `fate.data` was already present but was not set to anything.

---

## [0.5.4] - 2023-05-24
### Fixed
* Changed `value` arg from type validator-specific types like `string` to `unknown` in all stand-alone `chk` functions like `chkStringId` and `chkArrayEmpty`. Strict `value` types caused build errors when `value` *may* not be the expected type.

### Dependencies
* Updated all packages in `devDependencies` to the latest version.

---
## [0.5.3]
* *No notes available for release.*

---
## [0.4.1] - 2023-03-10
* Fixed issue in `chkStringId` where the result `Fate.success` was not set to `true`.

---

## [0.4.0]
* *No notes available for release.*
---

## [0.3.1] - 2022-05-16
### Fixed
* Resolved issue preventing package install via `npm install @toreda/chk`.

### Updates
* Project dependencies updated to latest available.

---

## [0.3.0]

### Added
* First version of validator chains in place.
* Expanded test coverage for all classes.

---

## [0.1.0]
* *No notes available for release.*

[Unreleased]: https://github.com/toreda/chk/compare/v0.6.0...HEAD

[0.6.0]: https://github.com/toreda/chk/compare/v0.5.4...v0.6.0
[0.5.4]: https://github.com/toreda/chk/compare/v0.5.3...v0.5.4
[0.5.3]: https://github.com/toreda/chk/compare/v0.5.0...v0.5.3
[0.5.0]: https://github.com/toreda/chk/compare/v0.4.1...v0.5.0
[0.4.1]: https://github.com/toreda/chk/compare/v0.4.0...v0.4.1
[0.4.0]: https://github.com/toreda/chk/compare/v0.3.1...v0.4.0
[0.3.1]: https://github.com/toreda/chk/compare/v0.3.0...v0.3.1
[0.3.0]: https://github.com/toreda/chk/compare/v0.3.0...v0.3.1
[0.1.0]: https://github.com/toreda/chk/releases/tag/v0.1.0
