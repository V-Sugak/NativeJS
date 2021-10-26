import React, {ChangeEvent, MouseEvent} from "react";

export const User = () => {
    const search = (e: MouseEvent<HTMLButtonElement>) => {
       alert(e.currentTarget.name)
    }

    const onAgeChange = (e:ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
    }

    const onNameChange = () => {
        console.log('name changed')
    }
    const onBlurHandler = () => {
        console.log('focus lost')
    }

    return <div>
        <textarea onChange={onNameChange} onBlur={onBlurHandler}>Viktoria</textarea>
        <input onChange={onAgeChange} type={'number'}/>
        <button name='search' onClick={search}>search</button>
    </div>
}