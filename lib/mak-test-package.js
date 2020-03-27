'use babel';

import MakTestPackageView from './mak-test-package-view';
import { CompositeDisposable } from 'atom';

export default {

  makTestPackageView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.makTestPackageView = new MakTestPackageView(state.makTestPackageViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.makTestPackageView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'mak-test-package:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.makTestPackageView.destroy();
  },

  serialize() {
    return {
      makTestPackageViewState: this.makTestPackageView.serialize()
    };
  },

  toggle() {
    //kader modified
    let editor
    if (editor = atom.workspace.getActiveTextEditor()) {
      let selection = editor.getSelectedText()
      editor.insertText(selection.toUpperCase())
    }
    /*console.log('MakTestPackage was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );*/
  }

};
