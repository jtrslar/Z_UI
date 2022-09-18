import bable from 'rollup-plugin-babel'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'

export default {
	input: 'src/components/index.js',
	output: {
		file: 'lib/zui.js',
		exports: 'auto',
	},
	plugins: [
		terser(),
		bable({
			extensions: ['.jsx', '.tsx', '.js', '.ts'],
		}),
		postcss({
			modules: true,
		}),
	],
}
