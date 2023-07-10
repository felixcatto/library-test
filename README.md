### Description

Little test of publishing library. Decided to transpile all react + ts `.tsx` to original `.js` files. But all dependencies like `React, Emotion` added as peerDependencies, i.e. we don't bundle any deps and consumer will use own versions of it.

### Todo

To speed up local development it probably better use native incremental watch of `swc` and `tsc` over custom chokidar full rebuild.
