import React from 'react'

interface Props {
    value : string,
    setValue : React.Dispatch<React.SetStateAction<string>>
    handleSubmit : (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form = ({value, setValue, handleSubmit} : Props) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    return (
        <form style={{ display: 'flex' }} onSubmit={(e) => handleSubmit(e)}>
            <input type="text" name='value' style={{ flex: '10', padding: '5px' }}
                placeholder='해야 할 일을 입력해주세요' value={value} onChange={handleChange}
            />
            <input type="submit" value="입력" className='btn' style={{ flex: '1' }} />
        </form>
    )
}

export default Form
