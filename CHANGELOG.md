# Changelog

## [v2.0.0](https://github.com/Aashu-Dubey/capacitor-statusbar-safe-area/compare/v1.1.0...v2.0.0) - (1 Apr 2023)

This version adds support for an addition way to handle safe area on device, using `safe-area` web component exported by the plugin.

It can be used as follows:
```html
<safe-area>
  <!-- Other content -->
</safe-area>
```

It also comes with 2 attributes to control it's behaviour, `mode` and `edges`.

For example, to use safe area insets as element's margin instead of default padding, and to apply only for top, we would write it as follows:
```html
<safe-area mode="margin" edges="top">
  <!-- Other content -->
</safe-area>
```

more details about it's usage can be found in the [readme](https://github.com/Aashu-Dubey/capacitor-statusbar-safe-area#html-tag).

✨ Features

- Added support for a new `safe-area` web component ([#6](https://github.com/Aashu-Dubey/capacitor-statusbar-safe-area/pull/6)) ([019b125](https://github.com/Aashu-Dubey/capacitor-statusbar-safe-area/commit/019b1250a7658c6d8c7c5ad6108018943793c498))

🐛 Fixes

- Fixed background thread swift warnings on iOS ([#5](https://github.com/Aashu-Dubey/capacitor-statusbar-safe-area/pull/5)) ([4a55cee](https://github.com/Aashu-Dubey/capacitor-statusbar-safe-area/commit/4a55cee1f022d99de64426baa625d60fd5768600))

## [v1.1.0](https://github.com/Aashu-Dubey/capacitor-statusbar-safe-area/compare/v1.0.1...v1.1.0) - (2 Nov 2022)

✨ Improvements

- Upgraded plugin to Capacitor v4 ([#3](https://github.com/Aashu-Dubey/capacitor-statusbar-safe-area/pull/3))(by @Hrdtr) ([Complete changelog](https://github.com/Aashu-Dubey/capacitor-statusbar-safe-area/compare/v1.0.1...1d85f2b)).

- Added [example](https://github.com/Aashu-Dubey/capacitor-statusbar-safe-area/tree/main/example) project 📱 ([1d85f2b](https://github.com/Aashu-Dubey/capacitor-statusbar-safe-area/commit/1d85f2be317e8f3e23861f7644bdc3fa32a82f7a)).

## [v1.0.1](https://github.com/Aashu-Dubey/capacitor-statusbar-safe-area/compare/v1.0.0...v1.0.1) - (29 May 2022)

- fix: podspec issue on iOS when running `npx cap sync` ([3bdf607](https://github.com/Aashu-Dubey/capacitor-statusbar-safe-area/commit/3bdf607b14a54121abcdc768aaa76b74a8a67876)).

## [v1.0.0](https://github.com/Aashu-Dubey/capacitor-statusbar-safe-area/tree/v1.0.0) - (20 Mar 2022)

Initial release.

Using this package you can get Status bar height and Safe area insets on Android & iOS on Ionic applications
