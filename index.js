'use strict';

module.exports = {
    extends: ['eslint:recommended', '@hapi/eslint-config-hapi'],
    env: {
        node: true,
        es2020: true
    },
    parserOptions: {
        ecmaVersion: 2020
    },
    rules: {
        'no-await-in-loop': 'warn',
        'no-console': 'warn',
        'no-dupe-else-if': 'error',
        'no-extra-parens': 'warn',
        'no-import-assign': 'error',
        'no-setter-return': 'error',
        'no-template-curly-in-string': 'error',
        'require-atomic-updates': 'error',

        'complexity': 'warn',
        'curly': 'error',
        'default-case': 'error',
        'default-param-last': 'error',
        'dot-location': ['error', 'property'],
        'dot-notation': 'warn',
        'eqeqeq': 'error',
        'grouped-accessor-pairs': 'error',
        'guard-for-in': 'warn',
        'no-alert': 'error',
        'no-caller': 'error',
        'no-constructor-return': 'error',
        'no-else-return': 'error',
        'no-empty-function': 'error',
        'no-eq-null': 'error',
        'no-eval': 'error',
        'no-extra-bind': 'error',
        'no-extra-label': 'error',
        'no-floating-decimal': 'error',
        'no-implicit-coercion': 'error',
        'no-implied-eval': 'error',
        'no-iterator': 'error',
        'no-labels': 'error',
        'no-lone-blocks': 'error',
        'no-multi-spaces': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-param-reassign': 'error',
        'no-proto': 'error',
        'no-return-assign': 'error',
        'no-return-await': 'error',
        'no-script-url': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-throw-literal': 'error',
        'no-unmodified-loop-condition': 'error',
        'no-unused-expressions': 'error',
        'no-useless-call': 'error',
        'no-useless-return': 'error',
        'no-void': 'error',
        'prefer-promise-reject-errors': 'error',
        'require-await': 'error',
        'wrap-iife': ['error', 'any'],
        'yoda': 'error',

        'init-declarations': ['error', 'always'],
        'no-label-var': 'error',
        'no-undef-init': 'error',
        'no-undefined': 'error',
        'no-use-before-define': 'error',

        'callback-return': 'error',
        'handle-callback-err': 'error',
        'no-buffer-constructor': 'error',
        'no-mixed-requires': 'error',
        'no-new-require': 'error',
        'no-path-concat': 'error',
        'no-process-env': 'error',
        'no-process-exit': 'error',
        'no-sync': ['warn', { allowAtRootLevel: true }],

        'array-bracket-newline': ['error', 'consistent'],
        'array-bracket-spacing': ['error', 'never'],
        'array-element-newline': ['error', 'consistent'],
        'block-spacing': 'error',
        'brace-style': ['error', 'stroustrup'],
        'camelcase': 'error',
        'comma-dangle': ['error', 'never'],
        'comma-spacing': ['error', { 'before': false, 'after': true }],
        'comma-style': ['error', 'last'],
        'computed-property-spacing': ['error', 'never'],
        'eol-last': ['error', 'always'],
        'func-call-spacing': ['error', 'never'],
        'func-names': ['error', 'never', { 'generators': 'always' }],
        'func-style': ['error', 'expression'],
        'function-call-argument-newline': ['error', 'consistent'],
        'function-paren-newline': ['error', 'consistent'],
        'implicit-arrow-linebreak': ['error', 'beside'],
        'no-bitwise': 'error',
        'no-multiple-empty-lines': 'error',
        'no-nested-ternary': 'error',
        'no-tabs': 'error',
        'no-trailing-spaces': 'error',
        'no-whitespace-before-property': 'error',
        'spaced-comment': ['error', 'always'],
        'template-tag-spacing': ['error', 'always'],
        'unicode-bom': ['error', 'never'],

        'arrow-parens': 'error',
        'arrow-spacing': 'error',
        'generator-star-spacing': ['error', 'before'],
        'no-confusing-arrow': 'error',
        'no-duplicate-imports': 'error',
        'no-useless-computed-key': 'error',
        'no-useless-constructor': 'error',
        'no-useless-rename': 'error',
        'no-var': 'error',
        'object-shorthand': ['error', 'consistent'],
        'prefer-const': 'error',
        'prefer-rest-params': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'rest-spread-spacing': 'error',
        'symbol-description': 'error',
        'template-curly-spacing': ['error', 'always'],
        'yield-star-spacing': ['error', 'before']
    }
};
