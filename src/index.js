import { registerBlockType } from '@wordpress/blocks';

import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import save from './save';

registerBlockType( 'blocks-course/text-box', {
	// icon:{
	// 	src:'text-page',
	// 	background:'#f03',
	// 	foreground: '#fff',
	// } ,
	edit: Edit,
	save,
} );
