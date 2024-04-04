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

import {stringValue} from '@toreda/strong-types';
import {type ExecutionContext} from '../../execution/context';
import {type ExecutorParams} from '../params';

/**
 * Creates ExecutionContext and initialize with provided values, or default when
 * none provided.
 * @param params
 *
 * @category Executor
 */
export function executorMkContext<InputT = unknown>(
	params?: Partial<ExecutorParams<InputT>>
): ExecutionContext {
	return {
		name: stringValue(params?.name, '_default_'),
		results: [],
		outcome: 'fail',
		summary: {
			counts: {
				error: 0,
				fail: 0,
				pass: 0,
				skip: 0,
				total: 0
			}
		}
	};
}
