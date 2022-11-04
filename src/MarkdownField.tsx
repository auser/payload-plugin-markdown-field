import '@uiw/react-markdown-preview/markdown.css'
import '@uiw/react-md-editor/markdown-editor.css'

import { MarkdownPreviewProps } from '@uiw/react-markdown-preview'
import { Props } from 'payload/components/fields/Text'
import { Label, useField } from 'payload/components/forms'
import Error from 'payload/dist/admin/components/forms/Error'
import React, { useCallback } from 'react'
import rehypeSanitize from 'rehype-sanitize'

import MDEditor, { ContextStore, MDEditorProps } from '@uiw/react-md-editor'

import './MarkdownField.scss'

type MarkdownEditorProps = Props & {
	path: string
	initialValue?: string
	editorOptions?: MDEditorProps
	previewOptions?: MarkdownPreviewProps
}

const MarkdownField: React.FC<MarkdownEditorProps> = ({
	initialValue,
	previewOptions,
	editorOptions,
	path,
	label,
	required,
	validate
}: MarkdownEditorProps) => {
	const memoizedValidate = useCallback(
		(value: string, options: any) => {
			if (validate) {
				return validate(value, { ...options, required })
			}
			return true
		},
		[validate, required]
	)
	const field = useField<string>({ path, validate: memoizedValidate })
	const { value, showError, setValue, errorMessage } = field

	const fieldOnChange = (
		value?: string,
		event?: React.ChangeEvent<HTMLTextAreaElement>,
		state?: ContextStore
	) => {
		editorOptions?.onChange && editorOptions.onChange(value, event, state)
		setValue(value)
	}

	previewOptions = { rehypePlugins: [rehypeSanitize], ...previewOptions }

	return (
		<div className={'field-type markdown'}>
			<Error showError={showError} message={errorMessage} />
			<Label htmlFor={path} label={label} required={required} />
			<MDEditor
				value={value}
				onChange={fieldOnChange}
				previewOptions={previewOptions}
				{...editorOptions}
			/>
		</div>
	)
}

export default MarkdownField
