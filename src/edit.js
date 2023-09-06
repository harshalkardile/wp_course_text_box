import { __ } from '@wordpress/i18n';

import { useBlockProps, RichText, BlockControls, InspectorControls, AlignmentToolbar, PanelColorSettings, ContrastChecker, withColors } from '@wordpress/block-editor';
// import {ToolbarGroup, ToolbarButton, ToolbarDropdownMenu } from '@wordpress/components'
// import { PanelBody, TextControl, TextareaControl, ToggleControl, AnglePickerControl, ColorPicker, ColorPalette } from '@wordpress/components';
import './editor.scss';
 function Edit(props) {
	const {
		attributes,
		setAttributes,
		backgroundColor,
		textColor,
		setBackgroundColor,
		setTextColor,
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
			<InspectorControls>
				<PanelColorSettings
					title={ __( 'Color Settings', 'text-box' ) }
					icon="admin-appearance"
					initialOpen
					disableCustomColors={ false }
					colorSettings={ [
						{
							value: backgroundColor.color,
							onChange: setBackgroundColor,
							label: __( 'Background Color', 'text-box' ),
						},
						{
							value: textColor.color,
							onChange: setTextColor,
							label: __( 'Text Color', 'text-box' ),
						},
					] }
				>
					<ContrastChecker
						textColor={ textColor.color }
						backgroundColor={ backgroundColor.color }
					/>
				</PanelColorSettings>
			</InspectorControls>
			<BlockControls>
				<AlignmentToolbar
					value={ alignment }
					onChange={ onChangeAlignment }
				/>
			</BlockControls>

			
		<RichText
				{ ...useBlockProps( {
					className: `text-box-align-${ alignment }`,
					style: {
						backgroundColor: backgroundColor.color,
						color: textColor.color,
					},
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

export default withColors( {
	backgroundColor: 'backgroundColor',
	textColor: 'color',
} )( Edit );







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