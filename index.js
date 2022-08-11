import antlr4 from 'antlr4'
import ECMAScriptLexer from './lib/ECMAScriptLexer.js'
import ECMAScriptParser from './lib/ECMAScriptParser.js'
import PythonGenerator from './codegeneration/PythonGenerator.js'

const input = '{x: 1}'

const chars = new antlr4.InputStream(input)
const lexer = new ECMAScriptLexer(chars)

lexer.strictMode = false // do not use js strictMode

const tokens = new antlr4.CommonTokenStream(lexer)
const parser = new ECMAScriptParser(tokens)
const tree = parser.program()

console.log('JavaScript input:', input)

const output = new PythonGenerator().start(tree)

console.log(output)
