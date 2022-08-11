import ECMAScriptVisitor from '../lib/ECMAScriptVisitor.js'

class Visitor extends ECMAScriptVisitor {
  start(ctx) {
    return this.visitExpressionSequence(ctx)
  }

  /**
   * Visits children of current node
   *
   * @param {object} ctx
   * @returns {string}
   */
  visitChildren(ctx) {
    let code = ''

    for (let i = 0; i < ctx.getChildCount(); i++) {
      code += this.visit(ctx.getChild(i))
    }

    return code.trim()
  }

  /**
   * Visits a leaf node and returns a string
   *
   * @param {object} ctx
   * @returns {string}
   */
  visitTerminal(ctx) {
    return ctx.getText()
  }

  /**
   * Visits Property Expression Assignment
   *
   * @param {object} ctx
   * @returns {string}
   */
  visitExpressionSequence(ctx) {
    const key = this.visit(ctx.propertyName())
    const value = this.visit(ctx.singleExpression())

    return `'${key}': ${value}`
  }
}

export default Visitor
