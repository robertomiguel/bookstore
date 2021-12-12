import ExclamationCircleFilled from '@ant-design/icons/lib/icons/ExclamationCircleFilled'
import { Button, Form, Popover } from 'antd'
import { generateId } from 'common/generateId'
import formComponents from 'components/renders/form'
import { useCallback, useEffect, useState } from 'react'
import { IBookStore } from 'stores/book'

interface BookFormProps {
    formRef: any // FormInstance
    bookStore: IBookStore
    create: (value: any) => void
}

export const BForm = (props: BookFormProps) => {
    const { formRef, bookStore, create } = props
    const [formBook, setFormBook] = useState<any>()

    const submitButton = (
        <Button
            loading={bookStore.isLoading}
            onClick={() => formRef.current.submit()}
        >
            Guardar
        </Button>
    )

    const getForm = useCallback(async () => {
        const f = await bookStore.getForm('bookFormBasic')
        setFormBook(() => f)
    }, [bookStore])

    useEffect(() => {
        getForm()
    }, [getForm])

    const resetButton = (
        <Button onClick={() => formRef.current.resetFields()}>Reiniciar</Button>
    )

    const formComponentsList = formComponents

    const formData: { form: any; children: { [index: string]: any }[] } =
        formBook

    return (
        <Form
            className="modalForm"
            ref={formRef}
            layout="vertical"
            style={formData && { maxWidth: formData.form.maxWidth }}
            onFinish={(value) => create(value)}
        >
            <Form.Item>
                {submitButton}
                {resetButton}
            </Form.Item>

            {formData &&
                formData.children.map((component) => (
                    <Form.Item
                        key={generateId()}
                        label={
                            component.help ? (
                                <span>
                                    {component.label}
                                    <Popover content={component.help}>
                                        {' '}
                                        <ExclamationCircleFilled />
                                    </Popover>
                                </span>
                            ) : (
                                component.label
                            )
                        }
                        name={component.name}
                        rules={component.rules}
                    >
                        {!component.data
                            ? formComponentsList[component.render](
                                  component.props
                              )
                            : formComponentsList[component.render](
                                  component.data,
                                  component.props
                              )}
                    </Form.Item>
                ))}
        </Form>
    )
}
