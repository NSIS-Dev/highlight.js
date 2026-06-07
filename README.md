# @nsis/highlight.js

[![License](https://img.shields.io/github/license/NSIS-Dev/highlight.js?style=for-the-badge)](LICENSE)
[![Version: npm](https://img.shields.io/npm/v/@nsis/highlight.js?style=for-the-badge)](https://www.npmjs.org/package/@nsis/highlight.js)
[![CI](https://img.shields.io/github/actions/workflow/status/NSIS-Dev/highlight.js/ci.yml?logo=nodedotjs&logoColor=white&style=for-the-badge)](https://github.com/NSIS-Dev/highlight.js/actions/workflows/ci.yml)

[highlight.js](https://github.com/highlightjs/highlight.js) syntax definition for the NSIS language

> [!NOTE]
>
> This language file has been a part of the highlight.js core since 2013. However, the latest fixes and changes are only available in this package.

## Usage

```js
import hljs from "highlight.js/lib/core";
import nsis from "../../src/nsis.ts";

hljs.registerLanguage("nsis", nsis);
hljs.highlightAll();
```

## License

Released under the [BSD License](LICENSE).
