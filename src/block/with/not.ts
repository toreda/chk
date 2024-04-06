/**
 *	MIT License
 *
 *	Copyright (c) 2019 - 2024 Toreda, Inc.
 *
 *	Permission is hereby granted, free of charge, to any person obtaining a copy
 *	of this software and associated documentation files (the "Software"), to deal
 *	in the Software without restriction, including without limitation the rights
 *	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *	copies of the Software, and to permit persons to whom the Software is
 *	furnished to do so, subject to the following conditions:

 * 	The above copyright notice and this permission notice shall be included in all
 * 	copies or substantial portions of the Software.
 *
 * 	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * 	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * 	SOFTWARE.
 *
 */

import {Constructor} from '@toreda/types';
import {Block} from '../../block';
import {Statement} from '../../statement';
import {type BlockInit} from '../init';
import {blockWithMod} from './mod';
import {BlockFlags} from '../flags';

/**
 * @category Block Modifiers
 */
export type BlockWithNot<InputT, BlockT extends Block<Statement<InputT>>> = BlockT & {not: BlockT};
/**
 * @category Block Modifiers
 */
export function blockWithNot<InputT, BlockT extends Block<Statement<InputT>>>(
	block: Constructor<BlockT>,
	init: BlockInit<InputT>
): BlockWithNot<InputT, BlockT> {
	if (!init.flags) {
		init.flags = {};
	}

	const flags: BlockFlags = {
		...init.flags,
		invertResult: true
	};

	return blockWithMod<InputT, BlockT, ReturnT>(block, init, flags, 'not');
}
