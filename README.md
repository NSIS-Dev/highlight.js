# @nsis/highlight.js

[![License](https://img.shields.io/github/license/NSIS-Dev/highlight.js?style=for-the-badge)](LICENSE)
[![Version: npm](https://img.shields.io/npm/v/@nsis/highlight.js?style=for-the-badge)](https://www.npmjs.org/package/@nsis/highlight.js)
[![CI](https://img.shields.io/github/actions/workflow/status/NSIS-Dev/highlight.js/ci.yml?logo=nodedotjs&logoColor=white&style=for-the-badge)](https://github.com/NSIS-Dev/highlight.js/actions/workflows/ci.yml)

[highlight.js](https://github.com/highlightjs/highlight.js) syntax definition for the NSIS language

> [!NOTE]
>
> This language file has been a part of the highlight.js core since 2013. However, the latest fixes and changes are only available in this package.

## Usage

Simply include the `highlight.js` script package in your webpage or node app, load up this module and apply it to `hljs`.

If you're not using a build system and just want to embed this in your webpage:

```html
<script src="https://cdn.jsdelivr.net/npm/highlight.js@11/lib/index.min.js"></script>
<script src="nsis.mjs" type="module"></script>
<script>
	hljs.registerLanguage("nsis", window.hljsDefineNSIS);
	hljs.initHighlightingOnLoad();
</script>
```

If you're using a bundler

```js
const hljs = require("highlight.js");
const hljsDefineNSIS = require("@nsis/highlight.js");

hljsDefineNSIS(hljs);
hljs.initHighlightingOnLoad();
```

## License

Highlight.js is released under the BSD License. See [LICENSE](https://raw.githubusercontent.com/highlightjs/highlight.js/master/LICENSE) file for details.
