module.exports = {
    root: './build',
    cssCleanConfig: {
        compatibility: '*',
        properties: {
            backgroundClipMerging: true, // controls background-clip merging into shorthand
            backgroundOriginMerging: true, // controls background-origin merging into shorthand
            backgroundSizeMerging: true, // controls background-size merging into shorthand
            colors: true, // controls color optimizations
            ieBangHack: false, // controls keeping IE bang hack
            ieFilters: false, // controls keeping IE `filter` / `-ms-filter`
            iePrefixHack: false, // controls keeping IE prefix hack
            ieSuffixHack: false, // controls keeping IE suffix hack
            merging: true, // controls property merging based on understandability
            shorterLengthUnits: false, // controls shortening pixel units into `pc`, `pt`, or `in` units
            spaceAfterClosingBrace: true, // controls keeping space after closing brace - `url() no-repeat` into `url()no-repeat`
            urlQuotes: true, // controls keeping quoting inside `url()`
            zeroUnits: true // controls removal of units `0` value
        },
        format: {
            indentBy: 1,
            indentWith: 'tab',
            breaks: { // controls where to insert breaks
                afterAtRule: true, // controls if a line break comes after an at-rule; e.g. `@charset`; defaults to `false`
                afterBlockBegins: true, // controls if a line break comes after a block begins; e.g. `@media`; defaults to `false`
                afterBlockEnds: true, // controls if a line break comes after a block ends, defaults to `false`
                afterComment: true, // controls if a line break comes after a comment; defaults to `false`
                afterProperty: true, // controls if a line break comes after a property; defaults to `false`
                afterRuleBegins: true, // controls if a line break comes after a rule begins; defaults to `false`
                afterRuleEnds: true, // controls if a line break comes after a rule ends; defaults to `false`
                beforeBlockEnds: true, // controls if a line break comes before a block ends; defaults to `false`
                betweenSelectors: true, // controls if a line break comes between selectors; defaults to `false`
            }
        }
    },
    cssBeautifyConfig: {
        indent: '\t',
        openbrace: 'end-of-line',
        autosemicolon: true
    }
}
