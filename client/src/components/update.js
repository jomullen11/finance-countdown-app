import React, { useState } from 'react'
import { useInput } from './hooks-input'

const Update = (props) => {
    const {value: amountPaid, bind: bindAmountPaid, reset: resetAmountPaid} = useInput('')
    const [updatedWhatsLeft, setUpdatedWhatsLeft] = useState(props.read.whatsLeft)

    const handleSubmit = async () => {

    }

}

export default Update