/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

import {
  IDisposable
} from 'phosphor/lib/core/disposable';

import {
  Token
} from 'phosphor/lib/core/token';

import {
  CommandPalette
} from 'phosphor/lib/ui/commandpalette';


/**
 * The command IDs used by the command palette plugin.
 */
export
namespace CommandIDs {
  export
  const activate: string = 'command-palette:activate';

  export
  const hide: string = 'command-palette:hide';

  export
  const toggle: string = 'command-palette:toggle';
};


/* tslint:disable */
/**
 * The command palette token.
 */
export
const ICommandPalette = new Token<ICommandPalette>('jupyter.services.commandpalette');
/* tslint:enable */


/**
 * The options for creating a command palette item.
 */
export
interface IPaletteItem extends CommandPalette.IItemOptions {}


/**
 * The interface for a Jupyter Lab command palette.
 */
export
interface ICommandPalette {
  /**
   * The placeholder text of the command palette's search input.
   */
  placeholder: string;

  /**
   * Activate the command palette for user input.
   */
  activate(): void;

  /**
   * Add a command item to the command palette.
   *
   * @param options - The options for creating the command item.
   *
   * @returns A disposable that will remove the item from the palette.
   */
  addItem(options: IPaletteItem): IDisposable;
}
