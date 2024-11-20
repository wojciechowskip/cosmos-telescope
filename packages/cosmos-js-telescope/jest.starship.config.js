/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        '^.+\\.tsx?$': [
            'ts-jest',
            {
                babelConfig: false,
                tsconfig: 'tsconfig.json'
            }
        ]
    },
    transformIgnorePatterns: [`/node_modules/*`],
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    testTimeout: 60000,
    modulePathIgnorePatterns: [
        'dist/*',
        'unit/',
        'cosmos-sdk/',
        'ics23/',
        'ibc-go/'
    ]
};
