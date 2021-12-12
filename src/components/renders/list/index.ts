import { colorText } from './colorText'
import { descriptionText } from './descriptionText'
import { rateCell } from './rate'

const cellComponents: { [index: string]: any } = {
    colorText,
    rate: rateCell,
    descriptionText,
}

export default cellComponents
