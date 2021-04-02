#!/usr/bin/env node
const create = require("base-create");

const { name } = create({
    // optional files to create
    files: [
      "src/index.js",
      {
        path: "src/hello.js",
        contents: 'alert("hi")',
      },
      {
        path: "README.md",
        // `contents` can be a function
        contents: ({ nameWithScope, nameWithoutScope, dirName }) =>
          "# ${nameWithScope}",
      },
    ],
  });