// @remove-file-on-eject
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use strict';

const babelJest = require('babel-jest');

module.exports = babelJest.createTransformer({
  // Earthling Interactive Modification - START
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
  ],
  // Earthling Interactive Modification - END
  presets: [require.resolve('babel-preset-react-app')],
  babelrc: false,
  configFile: false,
});
