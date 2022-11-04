import { TextField, Validate } from 'payload/types'

import MarkdownField from './MarkdownField'

import { MDEditorProps } from '@uiw/react-md-editor'
import { ValidateOptions } from 'payload/dist/fields/config/types'

export const markdownIsPossible: Validate<any, any, TextField> = (
	value: string,
	options: ValidateOptions<any, any, any>
) => {
	if (options?.required && !value) {
		return 'This field is required.'
	}
	return true
}

export const markdownIsValid: Validate<any, any, TextField> = (
	value: string,
	options: ValidateOptions<any, any, any>
) => {
	// Check for XSS?
	if (options?.required && !value) {
		return 'This field is required.'
	}

	return true
}

export const markdownField = (options: Omit<TextField, 'type'>, editorOptions?: MDEditorProps): TextField => {
	return {
		type: 'text',
		admin: {
			components: {
				Field: (props) => {
					return MarkdownField({
						...props,
						editorOptions: editorOptions
					})
				}
			}
		},
		...options
	}
}
