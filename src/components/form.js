import React from 'react'

const Forms = () => {
    return (
        <div>
            <h2>Form</h2>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )

}

export default Forms;