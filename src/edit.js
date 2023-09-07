import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	RichText,
	BlockControls,
	AlignmentToolbar,
	InspectorControls,
} from '@wordpress/block-editor';
//eslint-disable-next-line
import {
	__experimentalBoxControl as BoxControl,
	PanelBody,
	RangeControl,
} from '@wordpress/components';

import classnames from 'classnames';
import './editor.scss';
// const { __Visualizer: BoxControlVisualizer } = BoxControl;
// import {ToolbarGroup, ToolbarButton, ToolbarDropdownMenu } from '@wordpress/components'
// import { PanelBody, TextControl, TextareaControl, ToggleControl, AnglePickerControl, ColorPicker, ColorPalette } from '@wordpress/components';

export default function Edit( props ) {
	const { attributes, setAttributes } = props;
	const { text, textAlignment, shadow, ShadowOpacity } = attributes;

	const onChangeAlignment = ( newAlignment ) => {
		setAttributes( { textAlignment: newAlignment } );
	};
	const onChangeText = ( newText ) => {
		setAttributes( { text: newText } );
	};

	const onChnageShadowOpacity = ( newShadowOpacity ) => {
		setAttributes( { ShadowOpacity: newShadowOpacity } );
	};
	const toggleShadow = () => {
		setAttributes( { shadow: ! shadow } );
	};
	const classes = classnames( `text-box-align-${ textAlignment }`, {
		'has-shadow': shadow,
		[ `shadow-opacity-${ ShadowOpacity }` ]: shadow && ShadowOpacity,
	} );

	return (
		<>
			<InspectorControls>
				{ shadow && (
					<PanelBody title={ __( 'Shadow Setting', 'text-box' ) }>
						<RangeControl
							label={ __( 'Shadow Opacity', 'text-box' ) }
							value={ ShadowOpacity }
							min={ 10 }
							max={ 40 }
							step={ 10 }
							onChange={ onChnageShadowOpacity }
						/>
					</PanelBody>
				) }
			</InspectorControls>

			<BlockControls
				controls={ [
					{
						icon: 'admin-page',
						title: __( 'Shadow', 'text-box' ),
						onClick: toggleShadow,
						isActive: shadow,
					},
				] }
			>
				<AlignmentToolbar
					value={ textAlignment }
					onChange={ onChangeAlignment }
				/>
			</BlockControls>

			<RichText
				{ ...useBlockProps( {
					className: classes,
				} ) }
				onChange={ onChangeText }
				value={ text }
				placeholder={ __( 'Your Text', 'text-box' ) }
				tagName="p"
				allowedFormats={ [] }
			/>
		</>
	);
}

//  Tried followings*********
//  <TextControl
// 						label="Input Label"
// 						value={ text }
// 						onChange={ onChangeText }
// 						help="help text"
// 					/>
// 					<TextareaControl
// 						label="Text Area Label"
// 						value={ text }
// 						onChange={ onChangeText }
// 						help="help text"
// 					/>
// 					<ToggleControl
// 						label="Toggle Label"
// 						checked={ true }
// 						onChange={ ( v ) => console.log( v ) }
// 					/>
// 					<AnglePickerControl />
// 					<ColorPicker
// 						color={ 'F03' }
// 						onChangeComplete={ ( v ) => console.log( v ) }
// 					/>

//  <BlockControls group="inline">
// 				<p>Inline Controls</p>
// 			</BlockControls>
// 			<BlockControls group="block">
// 				<p>Block Controls</p>
// 			</BlockControls>
// 			<BlockControls
// 				group="other"
// 				controls={ [
// 					{
// 						title: 'Button 1',
// 						icon: 'admin-generic',
// 						isActive: true,
// 						onClick: () => console.log( 'Button 1 Clicked' ),
// 					},
// 					{
// 						title: 'Button 2',
// 						icon: 'admin-collapse',
// 						onClick: () => console.log( 'Button 2 Clicked' ),
// 					},
// 				] }
// 			>
// 				{ text && (
// 					<ToolbarGroup>
// 						<ToolbarButton
// 							title={ __( 'Align Left', 'text-box' ) }
// 							icon="editor-alignleft"
// 							onClick={ () => console.log( 'Align Left' ) }
// 						/>
// 						<ToolbarButton
// 							title={ __( 'Align Center', 'text-box' ) }
// 							icon="editor-aligncenter"
// 							onClick={ () => console.log( 'Align center' ) }
// 						/>
// 						<ToolbarButton
// 							title={ __( 'Align Right', 'text-box' ) }
// 							icon="editor-alignright"
// 							onClick={ () => console.log( 'Align Right' ) }
// 						/>
// 						<ToolbarDropdownMenu
// 							icon="arrow-down-alt2"
// 							label={ __( 'More Alignments', 'text-box' ) }
// 							controls={ [
// 								{
// 									title: __( 'Wide', 'text-box' ),
// 									icon: 'align-wide',
// 								},
// 								{
// 									title: __( 'Full', 'text-box' ),
// 									icon: 'align-full-width',
// 								},
// 							] }
// 						/>
// 					</ToolbarGroup>
// 				) }

// 			</BlockControls>
