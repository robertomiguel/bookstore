import { Rate } from 'antd'

export const rateCell = (props: { rate: number }) => (
    <Rate value={props.rate} disabled />
)
