import { Rate, RateProps } from 'antd'

export const rate = (props: RateProps) => (
    <Rate style={{ background: 'white', padding: '0.5em' }} {...props} />
)
