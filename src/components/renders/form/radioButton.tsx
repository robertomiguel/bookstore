import { RadioGroupProps, Radio } from 'antd'
import { generateId } from 'common/generateId'

export const radioButton = (
    data: {
        list: {
            value: string | number | boolean
            text: string
            disabled?: boolean
        }[]
    },
    props: RadioGroupProps
) => (
    <Radio.Group {...props}>
        {data.list.map((value) => (
            <Radio.Button
                key={generateId()}
                value={value.value}
                disabled={value.disabled}
            >
                {value.text}
            </Radio.Button>
        ))}
    </Radio.Group>
)
