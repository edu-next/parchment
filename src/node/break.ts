import LeafNode = require('./leaf');
import Registry = require('../registry');


class BreakNode extends LeafNode {
  static nodeName = 'break';
  static tagName = 'BR';
  static scope = Registry.Scope.LEAF;

  getLength():number {
    return 0;
  }

  getValue(): any[] {
    return [""];
  }

  deleteText(index: number, length: number): void {
    // TODO warn
  }

  formatText(index: number, length: number, name: string, value: any): void {
    this.wrap(name, value);
  }

  insertEmbed(index: number, name: string, value: any): void {
    this.replace(name, value);
  }

  insertText(index: number, text: string): void {
    this.replace('text', text);
  }
}


export = BreakNode;
