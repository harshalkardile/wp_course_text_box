import { __ } from '@wordpress/i18n';

import { useBlockProps,RichText, BlockControls, AlignmentToolbar } from '@wordpress/block-editor';
// import {ToolbarGroup, ToolbarButton, ToolbarDropdownMenu } from '@wordpress/components'
// import { PanelBody, TextControl, TextareaControl, ToggleControl, AnglePickerControl, ColorPicker, ColorPalette } from '@wordpress/components';
import './editor.scss';
 export default function Edit(props) {
	const {
		attributes,
		setAttributes,
	} = props;
	const { text, alignment } = attributes;
	const onChangeAlignment = ( newAlignment ) => {
		setAttributes( { alignment: newAlignment } );
	};
	const onChangeText = ( newText ) => {
		setAttributes( { text: newText } );
	};

	return (
		<>
			<BlockControls>
				<AlignmentToolbar
					value={ alignment }
					onChange={ onChangeAlignment }
				/>
			</BlockControls>

			
		<RichText
				{ ...useBlockProps( {
					className: `text-box-align-${ alignment }`,
				} ) }
				onChange={ onChangeText }
				value={ text }
				placeholder={ __( 'Your Text', 'text-box' ) }
				tagName="h4"
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