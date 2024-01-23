module.exports = {
    plugins: [
        [
            '@semantic-release/commit-analyzer',
            {
                releaseRules: [
                    { type: 'docs', scope: 'README', release: 'patch' },
                    { type: 'minor', release: 'minor' },
                    { type: 'major', release: 'major' },
                    { type: 'patch', release: 'patch' },
                    { type: 'test', release: false },
                    { scope: 'no-release', release: false },
                ],
            },
        ],
        '@semantic-release/release-notes-generator',
        '@semantic-release/github',
    ],
    branches: [
        { name: 'main' }
    ],
};