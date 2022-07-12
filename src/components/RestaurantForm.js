import React from 'react';

const RestaurantForm = ({name,id,location,catagories,description,image,website}) => {

    const handleInputChange = event => {
        props.setInputs({
            ...props.inputs,
            [event.currentTarget.name]: event.currentTarget.value
        })
        
    }
    return ( 
        <div>
            <form >
            <div>
                <label htmlFor='name'> Name of restaurant:</label>
                <input
                type="text"
                id='name'
                name='name'/> 
            </div>

            <div>
                <label htmlFor='location'>Address: </label>
                <input 
                type="text"
                id='location'
                name='location'/> 
            </div>

            <div>
                <label htmlFor='description'> Description:</label>
                <input
                type="text"
                id='description'
                name='description' /> 
            </div>

            <input type="submit" className='button' value="Submit"/> 
        </form>
        </div>
     );
}
 
export default RestaurantForm;