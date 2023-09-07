import { useBlockProps, RichText } from '@wordpress/block-editor';
import classnames from 'classnames';

export default function save( { attributes } ) {
	const { text, textAlignment, shadow, ShadowOpacity } = attributes;

	const classes = classnames( `text-box-align-${ textAlignment }`,{
		'has-shadow': shadow,
		[`shadow-opacity-${ShadowOpacity}`]: shadow && ShadowOpacity,
	});

	return (
		<RichText.Content
			{ ...useBlockProps.save( {
				className: classes,
			} ) }
			tagName="p"
			value={ text }
		/>
	);
}