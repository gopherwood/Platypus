#! /usr/bin/env bash
rm ../src/images/compressed/*.*
java -jar rhino/js.jar -f js/compile-json.js
java -jar rhino/js.jar -f js/compile-assets.js
java -jar rhino/js.jar -f js/compile-scripts.js
rm config.json