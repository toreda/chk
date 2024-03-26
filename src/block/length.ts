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

import type {Matcher} from '../matcher';
import {Block} from '../block';
import type {BlockFlags} from './flags';
import {matcherEqualToMk} from '../matcher/equal/to/mk';
import {matcherGreaterThanMk} from '../matcher/greater/than/mk';
import {matcherLessThanMk} from '../matcher/less/than/mk';
import {Statement} from '../statement';

/**
 * Contains matcher predicates for length properties.
 *
 * @category Statement Blocks
 */
export class BlockLength extends Block<Statement> {
	public readonly equalTo: Matcher<unknown>;
	public readonly lessThan: Matcher<number>;
	public readonly greaterThan: Matcher<number>;

	constructor(stmt: Statement, flags?: BlockFlags) {
		super(stmt, 'length');

		this.lessThan = matcherLessThanMk(stmt, flags);
		this.greaterThan = matcherGreaterThanMk(stmt, flags);
		this.equalTo = matcherEqualToMk(stmt, flags);
	}
}
